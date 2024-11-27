<template>
    <div :class="$style.root">
        <div :class="$style.value">值：<input :value="nodeValue" @change="onChangeValue" /></div>
    </div>
</template>
<script setup>
import { defineProps, toRaw, ref, inject, onMounted, onBeforeUnmount, computed } from 'vue';
const reOrderAndReflow = inject('reOrderAndReflow');
const props = defineProps({
    source: Object
});
const nodeValue = ref(props.source.getValue());

const onChangeValue = (e) => {
    const val = e.target.value;
    const node = toRaw(props.source.signal);
    node.setValue(val)
}

const updateValue = () => {
    nodeValue.value = props.source.getValue();
}
onMounted(() => {
    const node = toRaw(props.source.signal);
    node.addEventListener('update', updateValue)
})

onBeforeUnmount(() => {
    const node = toRaw(props.source.signal);
    node.addEventListener('update', updateValue)
})
</script>
<style module>
.root {
    position: absolute;
    bottom: 5px;
    transform: translateX(-50%);
    border: 1px solid #ADC2E2;
    padding: 4px 8px;
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
    width: 200px;
}
</style>