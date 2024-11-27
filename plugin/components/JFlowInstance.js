import * as JFlowInstance from '@joskii/jflow-core';
import { inject, watch, onUnmounted, onBeforeUnmount, toRaw, watchEffect } from 'vue';
import { bindEvent } from './event-utils'
function diff( a, b ){
    return Object.keys(b).some(k => b[k] !== a[k]) || Object.keys(a).some(k => b[k] !== a[k]);
}
export default function (nameNode) {
    const builder =  typeof nameNode === 'string'
        ? JFlowInstance[nameNode]
        : nameNode;
    return {
        inheritAttrs: false,
        props: {
            configs: {
                type: Object,
                default: function () {
                    return {};
                },
            },
            visible: {
                type: Boolean,
                default: true,
            },
            source: {
                type: Object,
            }
        },
        setup(props, { attrs, expose }) {
            const addToBelongStack = inject('addToStack');
            const removeFromBelongStack = inject('removeFromStack');
            const renderJFlow = inject('renderJFlow');
            const getJFlow = inject('getJFlow');
            const _jflowInstance =  new builder(toRaw(props.configs));
            const unbinds = bindEvent(_jflowInstance, attrs);
            addToBelongStack(_jflowInstance, toRaw(props.source));
            
            const stop0 = watch(() => props.configs, (val, oldVal) => {
                if(!diff(val, oldVal)){
                    return;
                }
                _jflowInstance.setConfig(val);
                renderJFlow();
            });
            const setVisible = (val) => {
                _jflowInstance.visible = val;
                renderJFlow();
            }
            const stop1 = watch(() => props.visible, setVisible);

            const stop2 = watch(() => props.source, (val, oldVal) => {
                const jflow = getJFlow();
                jflow.source_Layout_Render_NodeMap.delete(toRaw(oldVal));
                jflow.setRenderNodeBySource(toRaw(val), _jflowInstance);
            });
            setVisible(props.visible)

            onBeforeUnmount(() => {
                if(props.source) {
                    const rawsource = toRaw(props.source);
                    const jflow = getJFlow();
                    const meta = jflow.source_Layout_Render_NodeMap.get(rawsource)
                    if(meta.jflowNode === _jflowInstance) {
                        jflow.source_Layout_Render_NodeMap.delete(rawsource);
                    }
                }
            })

            onUnmounted(() => {
                stop0();
                stop1();
                stop2();
                unbinds();
                _jflowInstance.destroy();
                removeFromBelongStack(_jflowInstance);
                _jflowInstance._belongs = null;
            })

            expose({
                _jflowInstance,
            });
            return () => null;
        }
    }
}