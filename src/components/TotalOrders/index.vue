<template>
    <common-card title="累计订单量" value="2,157,420">
        <template v-slot>
            <v-chart :option="getOption()"></v-chart>
        </template>
        <template v-slot:footer>
            <span class="emphasis">昨日订单量：2,000,000</span>
        </template>
    </common-card>
</template>

<script setup>
import CommonCard from '../CommonCard/index.vue';
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
onMounted(() => {
})
const getOption = () => {
    return {
        xAxis: {
            type: 'category',
            show: false,
            boundaryGap: false // 默认边距
        },
        yAxis: {
            show: false
        },
        series: [{
            type: 'line',
            data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
            areaStyle: {
                color: 'purple'
            },
            lineStyle: {
                width: 0
            },
            itemStyle: {
                opacity: 0
            },
            smooth: true
        }],
        grid: {
            top: 0, bottom: 0, left: 0, right: 0
        }
    }
};
</script>
