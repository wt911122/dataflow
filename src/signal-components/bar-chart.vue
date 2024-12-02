<template>
    <div ref="chartWrapper" :class="$style.root"></div>
</template>
<script setup>
import { defineProps, ref, defineExpose, watch, onMounted, toRaw } from 'vue';
import JChart, {
    Data2D,
    Data1D,
    Coord2D,
    Geo2D,
    LineChart,
    BarChart,
    PieChart,
    LineIndicator,
    Legend,
    GeoIndicator,
} from '@joskii/jchart';

const chartModel = JChart([
    new Data2D(),
    new Coord2D({
        type: 'vertical',
        grid: {
            vertical: true,
            horizontal: true,
        }
    }),
    new LineChart({
        smooth: true,
        fill: true,
    }),
    // new BarChart(),
    new LineIndicator(),
    new Legend(),
], {
    layout: {
        left: 0,
        top: 20,
        bottom: 40,
        right: 30,
        xFloat: 20
    }
});

const dataFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
});
const NumberFormatter = new Intl.NumberFormat('en-GB', {
    notation: 'compact',
    compactDisplay: 'short',
});

const chartWrapper = ref('null')
const data = ref([]);

const getLegendValues = (data, name) => {
    return {
        name,
        values: data.length === 0 ? [Date.now(), 2] : data.map(r => {
            const timestamp = new Date(r.time).getTime();
            const d = r[name];
            return [timestamp, d]
        })
    }
}

const getSeries = () => {
    const d = toRaw(data.value);
    const q = getLegendValues(d, 'temperature')
    return [q]

}
let chartCTX;
const mountChart = () => {
    chartCTX = chartModel(chartWrapper.value, {
        reference: {
            type: 'continuous',
        },
        series: getSeries(),
        xAxis: {
            span: 6,
            format(value) {
                const datetime = new Date(value);
                return dataFormatter.format(datetime);
            },
        },
        yAxis: {
            min: 0,
            format(value) {
                return NumberFormatter.format(value);
            },
        },
    });
}
const updateChart = () => {
    chartCTX.resetData({
        reference: {
            type: 'continuous',
        },
        series: getSeries(),
        xAxis: {
            span: 6,
            format(value) {
             
                const datetime = new Date(value);
                console.log(dataFormatter.format(datetime))
                return dataFormatter.format(datetime);
            },
        },
        yAxis: {
            min: 0,
            format(value) {
                console.log(NumberFormatter.format(value))
                return NumberFormatter.format(value);
            },
        },
    });
}

const contentField = ref('name')
const valueField = ref('code')


const updateData = (_data) => {
    data.value = _data || [];
    if(data.value.length > 0) {
        if(!chartCTX) {
            mountChart();
        } else {
            updateChart()
        }
        
    }
    
}

onMounted(() => {
    // mountChart();
})

defineExpose({
    updateData,
    // signalOut
})

</script>
<style module>
.root {
    position: relative;
    margin: 30px;
    width: 500px;
    height: 320px;
    border: 1px solid rebeccapurple;
}
</style>