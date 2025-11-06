<template>
    <div class="home">
        <top-view></top-view>
        <sales-view></sales-view>
        <bottom-view></bottom-view>
        <map-view></map-view>
    </div>
</template>

<script setup>
import TopView from '../components/TopView/index.vue';
import SalesView from '../components/SalesView/index.vue';
import MapView from '../components/MapView/index.vue';
import BottomView from '../components/BottomView/index.vue';
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    background: #eee;
    box-sizing: border-box;
    padding: 20px;
}
</style>