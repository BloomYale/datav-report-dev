<template>
    <div class="sales-view">
        <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
            <template #header>
                <div class="menu-wrapper">
                    <el-menu mode="horizontal" :default-active="activeIndex" @select="onMenuSelect"
                        class="sales-view-menu">
                        <el-menu-item index="1">销售额</el-menu-item>
                        <el-menu-item index="2">访问量</el-menu-item>
                    </el-menu>
                    <div class="menu-right">
                        <el-radio-group v-model="radioSelect" size="small">
                            <el-radio-button label="今日"></el-radio-button>
                            <el-radio-button label="本周"></el-radio-button>
                            <el-radio-button label="本月"></el-radio-button>
                            <el-radio-button label="今年"></el-radio-button>
                        </el-radio-group>
                        <el-date-picker v-model="date" type="daterange" range-separator="至" start-placeholder="开始时间"
                            end-placeholder="结束时间" unlink-panels size="small" :shortcuts="shortcuts"></el-date-picker>
                    </div>
                </div>
            </template>
            <template #default>
                <div class="sales-view-chart-wrapper">
                    <v-chart :option="chartOption"></v-chart>
                    <div class="sales-view-list">
                        <div class="sales-view-title">排行榜</div>
                        <div class="list-item-wrapper">
                            <div class="list-item" v-for="item in rankData" :key="item.no">
                                <span :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">{{ item.no }}</span>
                                <span class="list-item-name">{{ item.name }}</span>
                                <span class="list-item-money">{{ item.money }}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </template>
        </el-card>
    </div>
</template>

<script setup>
import { color } from 'echarts';
import { ref } from 'vue';
const activeIndex = ref('1');
const onMenuSelect = (index) => {
    activeIndex.value = index;
};
const radioSelect = ref('今日');
const date = ref([]);
const shortcuts = [
    {
        text: '最近一周',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setDate(start.getDate() - 7)
            return [start, end]
        },
    },
    {
        text: '最近一个月',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 1)
            return [start, end]
        },
    },
    {
        text: '最近三个月',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 3)
            return [start, end]
        },
    },
]
const rankData = ref([{ no: 1, name: '麦当劳', money: 323234 }, { no: 2, name: '麦当劳', money: 323234 }, { no: 3, name: '麦当劳', money: 323234 }, { no: 4, name: '麦当劳', money: 323234 }, { no: 5, name: '麦当劳', money: 323234 },]);
const chartOption = ref({
    title: {
        text: '年度销售额',
        textStyle: {
            fontSize: 12,
            color: '#666'
        },
        left: 20,
        top: 20
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: true,
            alignWithLabel: true,
            lineStyle: {
                color: '#999'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        },
        axisLabel: {
            color: '#333'
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dotted',
                color: '#eee'
            }
        }
    },
    grid: {
        left: 70,
        right: 60,
        left: 60,
        bottom: 50
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130, 90, 160, 200, 180, 220],
            type: 'bar',
            barWidth: '35%',
        }
    ],
    color: ['#3398DB'],
});
</script>

<style lang="scss" scoped>
.sales-view {
    margin-top: 20px;

    .menu-wrapper {
        display: flex;
        position: relative;

        .sales-view-menu {
            width: 100%;
            height: 50px;
            padding-left: 20px;

            .el-menu-item {
                margin: 0 20px;
            }
        }

        .menu-right {
            position: absolute;
            right: 20px;
            top: 0;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 20px;
        }
    }

    .sales-view-chart-wrapper {
        display: flex;
        height: 270px;

        .echarts {
            flex: 0 0 70%;
            width: 70%;
            height: 100%;
        }

        .sales-view-list {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            overflow: hidden;


            .sales-view-title {
                font-size: 12px;
                margin-top: 28px;
                color: #666;
                font-weight: 500;
            }

            .list-item-wrapper {
                margin-top: 15px;

                .list-item {
                    display: flex;
                    align-items: center;
                    padding: 6px 20px 6px 0;
                    border-bottom: 1px solid #f0f0f0;
                    font-size: 12px;

                    .list-item-no {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 20px;
                        height: 20px;
                        color: #333;

                        &.top-no {
                            background-color: #000;
                            border-radius: 50%;
                            color: #fff;
                            font-weight: 500;
                        }
                    }

                    .list-item-name {
                        margin-left: 10px;
                        color: #333;
                    }

                    .list-item-money {
                        flex: 1;
                        text-align: right;
                    }
                }
            }

        }
    }
}
</style>