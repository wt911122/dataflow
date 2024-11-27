<template>
    <div :class="$style.root">
        <div :class="$style.item" @click="createNumeric">数字信号源</div>
        <div :class="$style.item" @click="createString">文本信号源</div>
        <div :class="$style.item" @click="createURL">API信号源</div>
        <div :class="$style.item" @click="createOperator">算子</div>
    </div>
</template>
<script setup>
import { defineProps, toRaw, ref, inject, onMounted, onBeforeUnmount, computed } from 'vue';
const reOrderAndReflow = inject('reOrderAndReflow');
const props = defineProps({
    source: Object,
    x: Number,
    y: Number,
});

const getProgram = inject('getProgram');
const claseNodePopper = inject('claseNodePopper');

const createNumeric = (e) => {
    const program = getProgram();
    program.addNode({
        type: 'Numeric',
        value: 1,
        position: [props.x, props.y]
    });
    reOrderAndReflow();
    claseNodePopper();
}
const createString = (e) => {
    const program = getProgram();
    program.addNode({
        type: 'String',
        value: '文本',
        position: [props.x, props.y]
    });
    reOrderAndReflow();
    claseNodePopper();
}
const createURL = (e) => {
    const program = getProgram();
    program.addNode({
        type: 'API',
        URL: 'http://nmc.cn/rest/province',
        position: [props.x, props.y]
    });
    reOrderAndReflow();
    claseNodePopper();
}
const createOperator = (e) => {
    const program = getProgram();
    program.addNode({
        type: 'Function',
        expression: `({a}) => {
            return a
        }`,
        position: [props.x, props.y]
    });
    reOrderAndReflow();
    claseNodePopper();
}
</script>
<style module>
.root {
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #ADC2E2;
    padding: 0px;
    background-color: white;
}
.item {
    width: max-content;
    padding: 4px 8px;
}
.item:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
}
</style>