import { ref, provide, toRaw, inject, nextTick } from 'vue'; 
import { BezierLink } from '@joskii/jflow-core';

export const useLink = (program, getJFlow, reOrderAndReflow) => {
    const current = ref({
        node: null,
        key: undefined,
        active: false,
        output: undefined,
    });
    
    const startLinkOutput = (event, node, output) => {
        startLink(event, output);
        Object.assign(current.value, {
            node,
        })
    }

    const startLink = (event, node, key) => {
        Object.assign(current.value, {
            node,
            key,
            active: true,
        })
        const jflowInstance = getJFlow();
        const { offsetX, offsetY } = event.detail.event;
        const point = jflowInstance._calculatePointBack([offsetX, offsetY]);
        jflowInstance.setLinkingMode(
            toRaw(node), 
            (configs) => new BezierLink({
                ...configs,
                backgroundColor: '#4E75EC',
            }), !!key);
        jflowInstance._tempNode.anchor = point;
    }
    const isFromNode = (node) => {
        return toRaw(node) === toRaw(current.value.node)
    }
    const isLinking = () => {
        return current.value.active
    }
    
    const link = (node, key) => {
        if(node) {
            if(!current.value.key && key) {
                // input 连 output
                program.linkNode(toRaw(current.value.node), toRaw(node), key);
                reOrderAndReflow();
                program.run();
            }
            if(current.value.key && !key) {
                // output 连 input
                program.linkNode(toRaw(node), toRaw(current.value.node), key);
                reOrderAndReflow();
                program.run();
            }    
        }        
    }

    const onLinkingEnter = (source) => {
        const jflowInstance = getJFlow();
        const renderNode = jflowInstance.getRenderNodeBySource(toRaw(source));
        const isTail = !!current.value.key
        if(!isTail) {
            jflowInstance.setLinkingLink({
                to: renderNode
            });
        } else {
            jflowInstance.setLinkingLink({
                from: renderNode 
            });
        }
    }
    const onLinkingLeave = () => {
        const jflowInstance = getJFlow();
        const isTail = !!current.value.key
        if(!isTail) {
            jflowInstance.setLinkingLink({
                to: jflowInstance._tempNode
            });
        } else {
            jflowInstance.setLinkingLink({
                from: jflowInstance._tempNode 
            });
        }
    }

    const clearLinkState = () => {
        Object.assign(current.value, {
            node: null,
            key: undefined,
            active: false,
            output: undefined
        })
    }

    
    provide('startLink', startLink);
    provide('startLinkOutput', startLinkOutput);
    provide('isLinking', isLinking);
    provide('isFromNode', isFromNode);
    provide('onLinkingEnter', onLinkingEnter);
    provide('onLinkingLeave', onLinkingLeave);
    provide('onLink', link);
    provide('clearLinkState', clearLinkState)
    return {
        startLink,
        link
    }
}