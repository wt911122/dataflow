<template>
    <jBezierLink
        :configs="linkConfigs"
        :from="configs.from.source"
        :to="configs.to.source"
        @click="onClickLink">
    </jBezierLink>
</template>
<script setup>
import { defineProps, inject, computed } from 'vue';

const props = defineProps({
    configs: Object
});
const resetFocus = inject('resetFocus');
const isOnFocus = inject('isOnFocus');

const isFocus = computed(() => {
    return isOnFocus(props.configs.source)
});

const linkConfigs = computed(() => {
    let backgroundColor = '#ADC2E2';
    if(isFocus.value) {
        backgroundColor = '#4E75EC';
    }
    return {
        backgroundColor,
        showclose: isFocus.value,
    }
});

const onClickLink = (e) => {
    e.detail.bubbles = false;
    resetFocus(props.configs.source);
}
</script>