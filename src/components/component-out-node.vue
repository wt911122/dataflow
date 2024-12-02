<template>
    <j-group :configs="rootConfigs" 
        :source="node"
        @click="onClickNode"
        @instancePressStart="startDragNode">
        <j-group :configs="argumentWrapperConfigs">
            <j-group v-for="argu in arguDefs" 
                :configs="argumentConfigs"
                :source="argu"
                :key="argu.keyword + argu.uuid"
                @mouseenter="onLinkingEnter(argu)"
                @mouseleave="onLinkingLeave"
                @click="onClickInput($event, argu)"
                @link="onLinkArgu($event, argu)">
                <j-text :configs="{
                    fontSize: '14px',
                    textColor: '#fff',
                    content: argu.keyword
                }"></j-text>
            </j-group>
        </j-group>

        <j-group :configs="componentConfigs">
            <j-text :configs="{
                fontSize: '14px',
                textColor: '#000',
                content: node.signal.componentName || '-'
            }"></j-text>
        </j-group>
    </j-group>
</template>

<script setup>
import { toRaw, ref, inject, onMounted, onBeforeUnmount, computed } from 'vue';
import { LinearLayout } from '@joskii/jflow-core';
const hLayout = new LinearLayout({
    direction: 'horizontal',
    gap: 4
})
const vLayout = new LinearLayout({
    direction: 'vertical',
    gap: 4
})
const props = defineProps({
    node: Object
});
const resetFocus = inject('resetFocus');
const isOnFocus = inject('isOnFocus');
const onLinkingEnter = inject('onLinkingEnter');
const onLinkingLeave = inject('onLinkingLeave');
const startLink = inject('startLink');
const startLinkOutput = inject('startLinkOutput');
const onLink = inject('onLink');
const isLinking = inject('isLinking');
const clearLinkState = inject('clearLinkState');
const startDrag = inject('startDrag');
const openNodePopper = inject('openNodePopper');

const argumentWrapperConfigs = ref({
    layout: vLayout,
    padding: 5,
})
const argumentConfigs = ref({
    layout: vLayout,
    backgroundColor: '#000',
    padding: 5,
});

const isFocus = computed(() => {
    return isOnFocus(props.node)
});

const rootConfigs = computed(() => ({
    layout: hLayout,
    borderColor: isFocus.value ? '#4E75EC' : '#ACB2BF',
    borderWidth: 2,
    padding: 12,
}));

const componentConfigs = ref({
    ayout: vLayout,
    backgroundColor: '#60CFC4',
    padding: 5,
})

const arguDefs = ref(props.node.signal.declaration.getArguments());

const onClickNode = (e) => {
    e.detail.bubbles = false;
    resetFocus(props.node);
    openNodePopper(props.node, 'componentout')
}

const onClickInput = (e, argu) => {
    if(isLinking()) {
        clearLinkState();
        return;
    }
    e.detail.bubbles = false;
    startLink(e, argu, argu.keyword)
}
const onLinkArgu = (e, argu) => {
    e.detail.bubbles = false;
    onLink(props.node, argu.keyword)
}

const startDragNode = (e) => {
    startDrag(e.detail.event, props.node)
}

const updateExpression = () => {
    arguDefs.value = props.node.signal.declaration.getArguments();
}

onMounted(() => {
    const op = toRaw(props.node);
    op.addEventListener('expressionchange', updateExpression)
})

onBeforeUnmount(() => {
    const op = toRaw(props.node);
    op.addEventListener('expressionchange', updateExpression)
})
</script>