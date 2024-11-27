import * as JFlowInstance from '@joskii/jflow-core';
import { inject, watch, watchEffect, toRaw, onUnmounted, toRefs } from 'vue';
import { bindEvent } from './event-utils'
const isPrimitive = (val) => {
    if(val === null){
        return true
    }
        
    if(typeof val == "object" || typeof val == "function"){
        return false
    }else{
        return true
    }
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
            from: Object,
            to: Object,
        },
        setup(props, { attrs, expose }) {
            const addToLinkStack = inject('addToLinkStack');
            const addToLinkGroupStack = inject('addToLinkGroupStack');
            const removeFromLinkStack = inject('removeFromLinkStack');
            const removeFromLinkGroupStack = inject('removeFromLinkGroupStack');
            const getJFlow = inject('getJFlow');
            const renderJFlow = inject('renderJFlow');
            const jflow = getJFlow();
            const exposeObj = {
                _jflowInstance: null,
            }
            let unbinds;
            const createInstance = (fromInstance, toInstance) => {
                if(fromInstance && toInstance) {
                    const _jflowInstance = new builder({
                        ...props.configs,
                        from: fromInstance,
                        to: toInstance,
                    });
                    if(unbinds) {
                        unbinds();
                    }
                    unbinds = bindEvent(_jflowInstance, attrs);
                    addToLinkStack(_jflowInstance, toRaw(props.from), toRaw(props.to));  
                    if(addToLinkGroupStack) {
                        addToLinkGroupStack(_jflowInstance);
                    }
                    exposeObj._jflowInstance = _jflowInstance
                }
            }
            

            const refresh = () => {
                const fromInstance = jflow.getRenderNodeBySource(toRaw(props.from));
                const toInstance = jflow.getRenderNodeBySource(toRaw(props.to));
                console.log(fromInstance, toInstance)
                if(!exposeObj._jflowInstance) {
                    createInstance(fromInstance, toInstance);
                } else {
                    exposeObj._jflowInstance.setConfig({
                        ...props.configs,
                        from: fromInstance,
                        to: toInstance,
                    });
                }    
                renderJFlow();
            }

            refresh();
            const stop = watchEffect(() => {
                refresh();
            }, {
                flush: 'post',
            })
            onUnmounted(() => {
                stop();
                if(exposeObj._jflowInstance) {
                    if(unbinds) {
                        unbinds();
                    }
                    exposeObj._jflowInstance.destroy();
                    removeFromLinkStack(exposeObj._jflowInstance, toRaw(props.from), toRaw(props.to));
                    if(removeFromLinkGroupStack) {
                        removeFromLinkGroupStack(exposeObj._jflowInstance)
                    }

                    exposeObj._jflowInstance._belongs = null;
                    exposeObj._jflowInstance.from = undefined;
                    exposeObj._jflowInstance.to = undefined
                }
               
            })

            expose(exposeObj);
            return () => null;
        }
    }
}