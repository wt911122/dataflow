<template>
    <div :class="$style.body">
        <div>
            <div style="position: relative;">
                <j-jflow ref="jflow" 
                    :class="$style.wrapper" 
                    :configs="jflowconfigs"
                    :genVueComponentKey="genVueComponentKey"
                    @update:loading="onload"
                    @click="onClickNoWhere"
                    @link="link"
                    @pressEnd="onDrop"
                    @contextclick="openCreatePopper">
                    <template #SignalIn="{ source }">
                        <SignalInNode :node="source"></SignalInNode>
                    </template>
                    <template #SignalOut="{ source }">
                        <SignalOutNode :node="source"></SignalOutNode>
                    </template>
                    <template #Function="{ source }">
                        <ProgramNode :node="source"></ProgramNode>
                    </template>
                    <template #plainlink="{ configs }">
                        <program-link :configs="configs"></program-link>
                    </template>
                </j-jflow>
                <div :class="$style.groundAnchor" ref="groundAnchor">
                    <Popper :meta="popper"></Popper>
                </div>
            </div>
            <div>
                <button @click="onexport">导出数据</button>
                <dialog ref="dialogRef" style="width: 500px;height: 600px;">
                    <button @click="closeexport">关闭</button>
                    <textarea style="width: 100%; height: 500px; border: 3px solid black; overflow: scroll;">{{ exportData }}</textarea>
                </dialog>

                <button @click="onimport">导入数据</button>
                <dialog ref="importDialogRef" style="width: 500px;height: 600px;">
                    <button @click="doimport">导入</button>
                    <textarea ref="importTextAreaRef" style="width: 100%; height: 500px; border: 3px solid black; overflow: scroll;" placeholder="粘贴数据于此处"></textarea>
                </dialog>
            </div>
        </div>
        <div>
            <selectSignal ref="selectorA"/>
            <selectSignal ref="selectorB"/>
            <barChartSignal ref="barChartA" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, toRaw, watch, provide, getCurrentInstance } from 'vue'; 
import ProgramLink from './components/program-link.vue';
import ProgramNode from './components/program-node.vue';
import SignalInNode from './components/signalin-node';
import SignalOutNode from './components/signalout-node';
import Popper from './popper/popper.js';
import { useFocus } from './mixins/usefocus';
import { useLink } from './mixins/uselink';
import { useDrag } from './mixins/useDrag';
import { usePopper } from './popper/usePopper';

import selectSignal from './signal-components/select-signal.vue';
import barChartSignal from './signal-components/bar-chart.vue'

import commonEventAdapter from './customEventAdapter';

import data from './weather-data-http.json';
import { FreeLayout } from './layout';
import { Program, NodeResolver } from './model';
import { applyResolver } from './singnal-model';
const node_resolver = new NodeResolver();
applyResolver(node_resolver);
const program = new Program(node_resolver);
program.load(data);
const { resetFocus, doDelete } = useFocus(program);
const { startDrag, endDrag } = useDrag();

const layout = new FreeLayout(program);
const groundAnchor = ref(null);
const jflow = ref(null);

const getJflowInstance = () => {
    return toRaw(jflow.value).getInstance();
};
const getProgram = () => {
    return program;
}
const { link } = useLink(program, getJflowInstance, () => {
    reOrderAndReflow()
});

const { popper, mountPopper, closeNodePopper, openCreatePopper } = usePopper(getJflowInstance, groundAnchor); 
const onload = (val) => {
    if(!val) {
        mountPopper();
    }
}


const jflowconfigs = ref({
    allowDrop: true,
    layout,
    initialZoom: 1,
    minZoom: 0.25,
    eventAdapter: commonEventAdapter,
})

const genVueComponentKey = (source) => {
    return source.uuid;
}

const onDragVariable = () => {

}

const onDragOperator = () => {
    
}
const onClickNoWhere = () => {
    resetFocus();
    closeNodePopper();
}

const onDrop = (e) => {
    endDrag(e, (payload) => {
        const target = payload.target;
        const jflowInstance = getJflowInstance();
        const instance = jflowInstance.getRenderNodeBySource(toRaw(target));
        const anchor = instance.anchor.slice();
        target.setPosition(anchor)
    })
}

const reOrderAndReflow = () => {
    layout.reOrder(program);
    toRaw(jflow.value).reflow();
}

const dialogRef = ref(null);
const exportData = ref('');
const onexport = () => {
    const data = program.exportData();
    exportData.value = JSON.stringify(data, null, "\t");
    dialogRef.value.showModal();
}
const closeexport = () => {
    dialogRef.value.close();
}

const importDialogRef = ref(null);
const importTextAreaRef = ref(null);
const onimport = () => {
    const data = program.exportData();
    importDialogRef.value.showModal();
}
const doimport = () => {
    const data = importTextAreaRef.value.value;
    const obj = JSON.parse(data);
    program.load(obj);
    reOrderAndReflow()
    program.run();
    importDialogRef.value.close();
}

provide('reOrderAndReflow', reOrderAndReflow);
provide('getProgram', getProgram)

document.addEventListener('keydown', (event) => {
    const focusEle = document.activeElement;
    const jflowInstance = getJflowInstance();
    if (!jflowInstance?._focus?.instance && focusEle.tagName === 'BODY') {
        const { key, code, ctrlKey, shiftKey, metaKey } = event;

        switch(key) {
            case 'Backspace':
            case 'Delete':
                doDelete();
                reOrderAndReflow();
                program.run();
                break;
        }
    } 
   
});

const selectorA = ref(null);
const selectorB = ref(null);
const barChartA = ref(null);
const refs = { selectorA, selectorB, barChartA }
const refsGetter = (componentName) => {
    // const instance = getCurrentInstance();
    const compnent = refs[componentName].value;
    return compnent;
}

onMounted(() => {
    program.nodes.forEach(n => {
        if(n.type === 'ComponentSignalOut') {
            n.signal.setComponentGetter(refsGetter);
        }
        if(n.type === 'ComponentSignalIn') {
            n.signal.bindUpdater(refsGetter);
        }
    })
    program.run();
})
</script>

<style module>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.wrapper{
    width: 800px;
    height: 700px;
    border: 1px solid #ccc;
}
.body{
    display: flex;
    flex-direction: row;
}
.sidebar{
    width: 180px;
    border: 2px solid gold;
}
.sidebar > div {
    padding: 16px;
    display: flex;
    justify-content: center;
}

.sidebar > div > div {
    cursor: move;
}

.sidebar > div > .rect {
    width: 80px;
    height: 50px;
    background-color: green;
    text-align: center;
    line-height: 50px;
}

.sidebar > div > .part {
    width: 80px;
    height: 50px;
    border: 2px solid #517cff;
    border-radius: 8ox;
    text-align: center;
    line-height: 50px;
}

.sidebar > div > .circle {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background-color: hotpink;
    text-align: center;
    line-height: 80px;
}
.ast {
    flex: 1;
    border: 2px solid gold;
}
.hide{
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    -ms-user-drag: none;
    user-drag: none;
}
.hoverblock{
    position: absolute;
    background: #fff;
    width: 300px;
    height: 300px;
    border: 3px solid gold;
    left: 0;
    top: 0;
    transform: translate(0, 0);
}
.hoverblock > ul > li{
    cursor: pointer;
}
.hoverblock > ul > li:hover{
    background: #eee;
}

.groundAnchor{
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    background-color: #517cff;
}
</style>
    