<template>
    <div class="bottom-view">
        <div class="view">
            <el-card shadow="hover">
                <template #header>
                    <div class="title-wrapper">
                        <div class="title">
                            关键词搜索
                        </div>
                    </div>
                </template>
                <template #default>
                    <div class="chart-wrapper">
                        <div class="chart-inner">
                            <div class="chart">
                                <div class="chart-title">搜索用户数</div>
                                <div class="chart-data">93,634</div>
                                <v-chart :option="searchUserOption"></v-chart>
                            </div>
                            <div class="chart">
                                <div class="chart-title">搜索量</div>
                                <div class="chart-data">198,782</div>
                                <v-chart :option="searchNumberOption"></v-chart>
                            </div>
                        </div>
                        <div class="table-wrapper">
                            <el-table :data="tableData">
                                <el-table-column prop="rank" label="排名" />
                                <el-table-column prop="keyword" label="关键词" />
                                <el-table-column prop="count" label="总搜索量" />
                                <el-table-column prop="users" label="搜索用户数" />
                            </el-table>
                            <el-pagination layout="prev,pager,next" :total="100" :page-size="4" background
                                @current-page="onPageChange"></el-pagination>
                        </div>
                    </div>

                </template>
            </el-card>
        </div>
        <div class="view">
            <el-card shadow="hover">
                <template #header>
                    <div class="title-wrapper">
                        <div class="title">
                            分类销售排行
                        </div>
                        <div class="radio-wrapper">
                            <el-radio-group v-model="radioSelect" size="small">
                                <el-radio-button label="品类"></el-radio-button>
                                <el-radio-button label="商品"></el-radio-button>
                            </el-radio-group>
                        </div>
                    </div>
                </template>
                <template #default>
                    <div class="chart-wrapper">
                        <v-chart :option="renderPiechart()"></v-chart>
                    </div>
                </template>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const radioSelect = ref('品类');
const searchUserOption = ref({
    xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false, // 去除轴内间距
    },
    yAxis: {
        show: false
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
            areaStyle: {
                color: 'rgba(95,187,255,.5)'
            },
            lineStyle: {
                color: 'rgb(95,187,255)'
            },
            itemStyle: {
                opacity: 0
            },
            smooth: true
        }
    ],
    grid: { left: '0%', right: '0%', top: '0%', bottom: '0%' }
});
const searchNumberOption = ref({
    xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false, // 去除轴内间距
    },
    yAxis: {
        show: false
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
            areaStyle: {
                color: 'rgba(95,187,255,.5)'
            },
            lineStyle: {
                color: 'rgb(95,187,255)'
            },
            itemStyle: {
                opacity: 0
            },
            smooth: true
        }
    ],
    grid: { left: '0%', right: '0%', top: '0%', bottom: '0%' }
});
const categoryOption = ref({
});
const tableData = ref([
    { id: 1, rank: 1, keyword: '北京', count: 100, users: 90, range: '90%' },
    { id: 2, rank: 2, keyword: '北京', count: 100, users: 90, range: '90%' },
    { id: 3, rank: 3, keyword: '北京', count: 100, users: 90, range: '90%' },
    { id: 4, rank: 4, keyword: '北京', count: 100, users: 90, range: '90%' },
    { id: 5, rank: 5, keyword: '北京', count: 100, users: 90, range: '90%' }

])
const onPageChange = (page) => {
    console.log(page);
}
// onMounted(() => {
//     renderPiechart();
// });
const renderPiechart = () => {
    const mockData = [
        { value: 67, legendName: '粉面粥店', percent: '15.4%', name: '粉面粥店 | 15.4%' },
        { value: 97, legendName: '简餐便当', percent: '22.3%', name: '简餐便当 | 22.3%' },
        { value: 92, legendName: '汉堡披萨', percent: '21.1%', name: '汉堡披萨 | 21.1%' },
        { value: 85, legendName: '川湘菜', percent: '19.5%', name: '川湘菜 | 19.5%' },
        { value: 65, legendName: '地方菜系', percent: '14.9%', name: '地方菜系 | 14.9%' },
        { value: 30, legendName: '其他类', percent: '7.8%', name: '其他类 | 7.8%' },
    ];
    const categoryOption = {
        title: [{
            text: '品类分布',
            textStyle: {
                fontSize: 14,
                color: '#666'
            },
            left: 20,
            top: 20
        }, {
            text: '累计订单量',
            subtext: '320',
            x: '34.5%',
            y: '42.5%',
            textAlign: 'center',
            textStyle: {
                fontSize: 14,
                color: '#999'
            },
            subtextStyle: {
                fontSize: 28,
                color: '#333'
            },
        }],
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                console.log(params);
                return params.seriesName + '<br/>' + params.marker + params.data.legendName + '<br/>' + '数量: ' + params.value + '<br/>' + '占比: ' + params.percent + '%';
            }
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            left: '70%',
            height: 250,
            top: 'middle',
            textStyle: {
                color: '#8c8c8c'
            }
        },
        series: [
            {
                name: '品类分布',
                type: 'pie',
                radius: ['45%', '60%'],
                center: ['35%', '50%'],
                data: mockData,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: function (params) {
                            return params.data.legendName
                        }
                    }
                },
                labelLine: {
                    normal: {
                        length: 5,
                        length2: 3,
                        smooth: true
                    },
                },
                clockwise: false,
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 4
                },
                // emphasis: {
                //     itemStyle: {
                //         shadowBlur: 10,
                //         shadowOffsetX: 0,
                //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                //     }
                // }
            }
        ]
    };
    return categoryOption
}
</script>

<style lang="scss" scoped>
.bottom-view {
    display: flex;
    margin-top: 20px;

    .view {
        flex: 1;
        width: 50%;
        box-sizing: border-box;

        &:first-child {
            padding: 0 0 10px 0;
        }

        &:last-child {
            padding: 0 0 0 10px;
        }

        .title-wrapper {
            display: flex;
            align-items: center;
            height: 60px;
            box-sizing: border-box;
            border-bottom: 1px solid #eee;
            font-size: 14px;
            font-weight: 500;
            padding: 0 0 0 20px;

            .radio-wrapper {
                flex: 1;
                display: flex;
                justify-content: flex-end;
                padding-right: 20px;
            }
        }

        .chart-wrapper {
            display: flex;
            flex-direction: column;
            height: 452px;

            .chart-inner {
                display: flex;
                padding: 0 10px;
                margin-top: 20px;

                .chart {
                    flex: 1;
                    padding: 0 10px;

                    .chart-title {
                        font-size: 14px;
                        color: #999;
                    }

                    .chart-data {
                        font-size: 22px;
                        font-weight: 500;
                        color: #333;
                        letter-spacing: 2px;
                    }

                    .echarts {
                        height: 50px;
                    }
                }
            }

            .table-wrapper {
                flex: 1;
                margin-top: 20px;
                padding: 0 20px 20px 20px;

                .el-pagination {
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 15px;
                }
            }
        }


    }
}
</style>