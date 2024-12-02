<template>
    <div :class="$style.root">
        <div style="max-height: 300px; max-width: 300px; overflow: scroll;">输入：{{ input }}</div>
        <div>函数：<textarea rows="8" cols="50" :value="expression" @change="onChange"></textarea></div>
    </div>
</template>
<script setup>
import { defineProps, watch, toRaw, ref, inject, onMounted, onBeforeUnmount, computed } from 'vue';
const reOrderAndReflow = inject('reOrderAndReflow');
const getProgram = inject('getProgram');
const props = defineProps({
    source: Object
});
// const signal = computed(() => props.source.signal);
const input = ref('');
const expression = ref('');
// const output = ref('');
// const nodeValue = ref(props.source.getValue());

// const onChangeValue = (e) => {
//     const val = e.target.value;
//     const node = toRaw(props.source);
//     node.setValue(+val)
//     node.process();
// }

const onChange = (e) => {
    const program = getProgram();
    const programNode = toRaw(props.source);
    const signal = toRaw(props.source.signal);
    programNode.setExpression(e.target.value, program);
    programNode.processLocal();
    
}
const updateValue = () => {
    const signal = toRaw(props.source.signal);
    let inputContent = [];
    for(let key in signal.input) {
        const u = signal.input[key];
        if(typeof u === 'object') {
            inputContent.push(`${key}=${JSON.stringify(u)}`);
        } else {
            inputContent.push(`${key}=${u}`);
        }

    }
    // output.value = signal.output.getValue();
    expression.value = signal.expression;
    input.value = inputContent.join(', ');
}
const stop = watch(() => props.source, updateValue)
onMounted(() => {
    const node = toRaw(props.source);
    updateValue();
    node.addEventListener('output', updateValue)
})

onBeforeUnmount(() => {
    stop();
    const node = toRaw(props.source);
    node.addEventListener('output', updateValue)
})
</script>
<style module>
.root {
    position: absolute;
    bottom: 5px;
    transform: translateX(-50%);
    border: 1px solid #ADC2E2;
    padding: 4px 8px;
    padding-bottom: 8px;
    background-color: white;
}
.root::after {
    content: ' ';
    width: 6px;
    height: 6px;
    position: absolute;
    transform: translateX(-50%) translateY(-3px) rotate(45deg);
    background-color: white;
    border: 1px solid #ADC2E2;
    left: 50%;
    top: 100%;
    border-top: none;
    border-left: none;
}
.value {
    width: 180px;
}
</style>