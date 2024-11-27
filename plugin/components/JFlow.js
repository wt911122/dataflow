
import {
    ref, h, provide,
    onBeforeMount,
    onUnmounted,
    useAttrs,
    useSlots,
    nextTick, toRefs,
    toRaw
} from "vue";
import useStack from "./useStack";
import useLinkStack from './useLinkStack';
import { bindEvent } from './event-utils'
import JFlow from '@joskii/jflow-core';

// class JFlowEnhanced extends JFlow {
//     $mount(dom, setInitialPosition) {

//     }
// }

export default {
    props: {
        configs: {
            type: Object,
            default: function () {
                return {};
            },
        },
        setInitialPosition: {
            type: Function,
        },
        loading: Boolean,
        genVueComponentKey: {
            type: Function,
        },
        jflowMixin: {
            type: Object,
            default: function () {
                return {};
            },
        }
    },
    inheritAttrs: false,
    setup(props, { slots, attrs, emit, expose }) {
        const { genVueComponentKey, setInitialPosition } = props;
        const genLinkVueComponentKey = (meta) => {
            const k1 = genVueComponentKey(meta.from.source);
            const k2 = genVueComponentKey(meta.to.source);
            const k3 = meta.part;
            return `${k1}-${k2}-${k3}`
        }

        const className = attrs.class;
        const style = attrs.style;
        // const divEl = ref();
        const canvasDIVEl = ref();
        let stopLoading = false;
        const renderNodes = ref([]);
        const renderLinks = ref([]);
        const configs = toRaw(props.configs);
        // const _obj = omit(configs, 'setInitialPosition')
        const _jflowInstance = new JFlow({
            ...configs,
            setInitialPosition,
        });
        window._jflowInstance = _jflowInstance
        _jflowInstance.source_Layout_Render_NodeMap._map = new Map();
        const t = _jflowInstance.source_Layout_Render_NodeMap.set;
        _jflowInstance.source_Layout_Render_NodeMap.set = function (source) {
            return t.call(_jflowInstance.source_Layout_Render_NodeMap, source);
        }
        let mounted = false;
        // const fn = _jflowInstance.recalculateUp
        _jflowInstance.recalculateUp = function () {
            if(mounted) {
                _jflowInstance.reflow();
            }
        }
        _jflowInstance.removeLinkNodeBySource = function(sourceFrom, sourceTo, link) {
            let obj = this.source_Layout_Render_NodeMap.get(sourceFrom);
            if(obj) {
                const idx = obj.jflowFromLinks.findIndex(l => l === link);
                if(idx !== -1) {
                    obj.jflowFromLinks.splice(idx, 1);
                }
            }
            obj = this.source_Layout_Render_NodeMap.get(sourceTo);
            if(obj) {
                const idx = obj.jflowToLinks.findIndex(l => l === link);
                if(idx !== -1) {
                    obj.jflowToLinks.splice(idx, 1);
                }
            }
        }
        Object.assign(_jflowInstance, toRaw(props.jflowMixin));
        useStack(_jflowInstance);
        useLinkStack(_jflowInstance);
       

        const genNodeLinkMeta = () => {
            const nodes = _jflowInstance._layout.flowStack.map(meta => {
                const { type, layoutNode, source } = meta;
                const map = _jflowInstance.source_Layout_Render_NodeMap;
                let obj;
                const s = toRaw(source);
                const ly = toRaw(layoutNode);
                if(map.has(s)) {
                    obj = map.get(s);
                } else {
                    obj = map.set(s);
                }
                obj.layoutNode = ly;
                return meta;
            });
            const links = _jflowInstance._layout.flowLinkStack.slice();
            return [ nodes, links ];
        }

        const loadingNodes = (nodes, links) => {
            emit('update:loading', true);
            let i = 0;
            const tl = () => {
                if(stopLoading) {
                    return;
                }
                const end = i + 100;
                const linkPart = links.slice(i, end);
                if(linkPart.length) {
                    // this.renderLinks.splice(this.renderLinks.length,  0, ...linkPart);
                    renderLinks.value = renderLinks.value.concat(linkPart); // faster
                    i = end;
                    requestAnimationFrame(tl);
                } else {
                    requestAnimationFrame(mountJFlow.bind(this));
                }
            }
            const tn = () => {
                if(stopLoading) {
                    return;
                }
                const end = i + 100;
                const part = nodes.slice(i, end);
                if(part.length) {
                    // this.renderNodes.splice(this.renderNodes.length,  0, ...part);
                    renderNodes.value = renderNodes.value.concat(part);
                    i = end;
                    requestAnimationFrame(tn);
                } else {
                    i = 0;
                    requestAnimationFrame(tl)
                }
            }
            requestAnimationFrame(tn)
        };

        onBeforeMount(() => {
            loadingNodes(...genNodeLinkMeta());
        });



        const mountJFlow = () => {
            if(stopLoading) {
                return;
            }
            mounted = true;
            _jflowInstance.$mount(canvasDIVEl.value);
            bindEvent(_jflowInstance, attrs);
            emit('update:loading', false);
        }

        onUnmounted(() => {
            if(_jflowInstance.destroy) {
                _jflowInstance.source_Layout_Render_NodeMap.clear();
                _jflowInstance.anime_queue.length = 0; 
                _jflowInstance.destroy(); 
                _jflowInstance.initialPosition = null;
            }
            stopLoading = true;
        })

        const syncNodeLink = (nodes, links) => {
            renderNodes.value = nodes.slice();
            renderLinks.value = links.slice();
        }

        // syncNodeLink(...genNodeLinkMeta());
        // nextTick(() => {
        //     mountJFlow();
        // })


        const reflow = (preCallback, afterCallback) => {
            syncNodeLink(...genNodeLinkMeta());
            nextTick(() => {
                if(preCallback) {
                    preCallback();
                }
                _jflowInstance.recalculate();
                _jflowInstance.scheduleRender(() => {
                    if(afterCallback) {
                        afterCallback();
                    }
                });

            })
        }

        const syncLayout = () => {
            syncNodeLink(...genNodeLinkMeta());
        }

        const getInstance = () => {
            return _jflowInstance;
        }


        const renderJFlow = (() => {
            let __renderInSchedule__ = false;
            return () => {
                if(__renderInSchedule__) {
                    return;
                }
                __renderInSchedule__= true;
                nextTick(() => {
                    _jflowInstance._render();
                    __renderInSchedule__ = false;
                });
            }
        })();

        provide('getJFlow', getInstance);
        provide('renderJFlow', renderJFlow);

        expose({
            reflow,
            renderJFlow,
            getInstance,
            syncLayout
        });


        return () => {
            return h('div', {
                class: className,
                style: style,
            },
            [
                h('div', [
                    ...renderNodes.value.map(node => {
                        if(!node) {
                            return null
                        }
                        let { type, source, layoutNode } = node;
                        // layoutNode = toRaw(layoutNode);
                        if(!slots[type]) {
                            if(slots['jflowcommon']){
                                type = 'jflowcommon';
                            } else {
                                return null;
                            }
                        }
                        const [vnode] = slots[type]({ source, layoutNode });
                        vnode.key = genVueComponentKey(source);   
                        return vnode;
                    }).filter(n => !!n),
                    ...renderLinks.value.map(meta => {
                        let type = meta.type || 'plainlink'
                        if(!slots[type]) {
                            return null;
                        }
                        const [vnode] = slots[type]({ configs: meta });
                        vnode.key = genLinkVueComponentKey(meta);
                        return vnode
                    })

                ]),
                h('div', {
                    style: { width: '100%', height: '100%' },
                    ref: canvasDIVEl 
                })
            ])
        };
    },
}