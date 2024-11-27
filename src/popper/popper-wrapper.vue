<template>
    <transition name="fade">
        <div :class="$style.root" ref="root" :style="transform" v-show="active">
            <slot></slot>
        </div>
    </transition>
</template>
<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    active: Boolean,
    x: Number,
    y: Number,
});

const transform = computed(() => {
   return `transform: translate(${props.x}px, ${props.y}px)`  
});

</script>

<style module>
.root {
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    position: absolute;
    z-index: 4000;
}
.root:hover {
    z-index: 99999;
}
</style>