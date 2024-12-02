<template>
    <j-group :configs="rootConfigs" 
        :source="node" 
        @click="onClickNode"
        @mouseenter="onLinkingEnter(node)"
        @mouseleave="onLinkingLeave"
        @instancePressStart="startDragNode">
        <j-group :configs="componentConfigs">
            <j-text :configs="{
                fontSize: '14px',
                textColor: '#000',
                content: node.signal.componentName || '-'
            }"></j-text>
        </j-group>
        <j-text :configs="{
            fontSize: '14px',
            textColor: '#000',
            content
        }"></j-text>
        <j-point :configs="{
            radius: 4,
            backgroundColor: '#4E75EC'
        }" @click="onClickPoint"></j-point>
    </j-group>
</template>

<script setup>
import { toRaw, ref, inject, onMounted, onBeforeUnmount, computed } from 'vue';
import { LinearLayout } from '@joskii/jflow-core';

const startLink = inject('startLink')

const vLayout = new LinearLayout({
    direction: 'horizontal',
    gap: 4
})
const resetFocus = inject('resetFocus');
const isOnFocus = inject('isOnFocus');
const onLinkingEnter = inject('onLinkingEnter');
const onLinkingLeave = inject('onLinkingLeave');
const openNodePopper = inject('openNodePopper');
const startDrag = inject('startDrag');

const componentConfigs = ref({
    ayout: vLayout,
    backgroundColor: '#60CFC4',
    padding: 5,
})

const props = defineProps({
    node: Object
});

const nodeValue = ref(props.node.getValue());

const isFocus = computed(() => {
    return isOnFocus(props.node)
});

const rootConfigs = computed(() => ({
    layout: vLayout,
    borderColor: isFocus.value ? '#4E75EC' : '#ACB2BF',
    borderWidth: 2,
    padding: 12,
}));

const variable = computed(() => {
    return props.node.variable;
});
const content = computed(() => {
    console.log(variable.value)
    return `${nodeValue.value}`
});

const onClickNode = (e) => {
    e.detail.bubbles = false;
    resetFocus(props.node);
    // openNodePopper(props.node, 'String')
}
const onClickPoint = (e) => {
    e.detail.bubbles = false;
    startLink(e, props.node)
}

const startDragNode = (e) => {
    startDrag(e.detail.event, props.node)
}
const updateValue = () => {
    nodeValue.value = props.node.getValue();
}
onMounted(() => {
    console.log('stringNode mounted!')
    const node = toRaw(props.node.signal);
    node.addEventListener('update', updateValue)
})

onBeforeUnmount(() => {
    const node = toRaw(props.node.signal);
    node.addEventListener('update', updateValue)
})

</script>