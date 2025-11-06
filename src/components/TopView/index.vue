<template>
    <div class="top-view">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card shadow="hover"><total-sales></total-sales></el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover"><total-orders></total-orders></el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover"><today-users></today-users></el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover"><total-users></total-users></el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import TotalSales from '../TotalSales/index.vue';
import TotalOrders from '../TotalOrders/index.vue';
import TodayUsers from '../TodayUser/index.vue';
import TotalUsers from '../TotalUsers/index.vue';
</script>

<style lang="scss" scoped></style>