<template>
<select v-model="model">
    <option v-for="item in data" :value="item[valueField]">{{ item[contentField] }}</option>
</select>
</template>
<script setup>
import { defineProps, ref, defineExpose, watch } from 'vue';
const model = ref(null);
const data = ref([]);

const contentField = ref('name')
const valueField = ref('code')

let updater;

watch(() => model.value, (val) => {
    if(updater) {
        updater(val);
    }
})
watch(() => data.value, (val) => {
    model.value = val[0]?.code;
})

const updateData = (_data, _contentField, _valueField) => {
    console.log('----------select-signal---------',_data)
    data.value = _data || [];
    contentField.value = _contentField || 'name';
    valueField.value = _valueField || 'code';
}
const registUpdater = (_updater) => {
    updater = _updater;
}

defineExpose({
    updateData,
    registUpdater,
    // signalOut
})
</script>