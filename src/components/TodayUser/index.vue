<template>
    <common-card title="今日交易用户数" value="81,014">
        <template v-slot>
            <div id="today-users-chart" :style="{ width: '100%', height: '100%' }">
            </div>
        </template>
        <template v-slot:footer>
            <span class="emphasis">退货率：5.14%</span>
        </template>
    </common-card>
</template>

<script setup>
import CommonCard from '../CommonCard/index.vue';
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
onMounted(() => {
    const chartDom = document.getElementById('today-users-chart')
    const chart = echarts.init(chartDom)
    chart.setOption({
        color: ['#3398DB'],
        xAxis: {
            type: 'category',
            data: ['00:00', '01:00', '02:00', '03:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
            show: false
        },
        yAxis: {
            show: false
        },
        series: [{
            type: 'bar',
            data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
            barWidth: '60%',
        }],
        grid: {
            top: 0, bottom: 0, left: 0, right: 0
        }
    })

})
</script>

<style lang="scss" scoped></style>