<template>
    <common-card title="累计用户数" value="1,087,503">
        <template v-slot>
            <div id="total-users-chart" :style="{ width: '100%', height: '100%' }">
            </div>
        </template>
        <template v-slot:footer>
            <div class="total-users-footer">
                <span>日同比</span>
                <span class="emphasis">8.73%</span>
                <div class="increase"></div>
                <span class="month">月同比</span>
                <span class="emphasis">35.91%</span>
                <div class="decrease"></div>
            </div>
        </template>
    </common-card>
</template>

<script setup>
import CommonCard from '../CommonCard/index.vue';
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
onMounted(() => {
    const chartDom = document.getElementById('total-users-chart')
    const chart = echarts.init(chartDom)
    chart.setOption({
        color: ['#45c946', '#eaeaea'],
        xAxis: {
            type: 'value',
            show: false,
        },
        yAxis: {
            type: 'category',
            show: false,
        },
        series: [{
            type: 'bar',
            data: [350],
            stack: 'total',
            barWidth: '10',
        }, {
            type: 'bar',
            data: [200],
            stack: 'total'
        }, {
            type: 'custom',
            data: [350],
            renderItem: function (params, api) {
                var xValue = api.value(0);
                const endPoint = api.coord([xValue, 0]);
                return {
                    type: 'group',
                    position: endPoint,
                    children: [
                        {
                            type: 'path',
                            shape: {
                                d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z', //svg path data
                                x: -10,
                                y: 2,
                                width: 20,
                                height: 20,
                                layout: 'center'
                            },
                            style: {
                                fill: '#45c946'
                            },
                        },
                        {
                            type: 'path',
                            shape: {
                                d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z', //svg path data
                                x: -10,
                                y: -22,
                                width: 20,
                                height: 20,
                                layout: 'center'
                            },
                            style: {
                                fill: '#45c946'
                            },

                        }
                    ],
                };
            },
        }],
        grid: {
            top: 0, bottom: 0, left: 0, right: 0
        }
    })

})
</script>

<style lang="scss" scoped>
.total-users-footer {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #666;

    .month {
        margin-left: 10px;
    }
}
</style>
