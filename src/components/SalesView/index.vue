<template>
    <div class="sales-view">
        <el-card shadow="hover">
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
        </el-card>
    </div>
</template>

<script setup>
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
}
</style>