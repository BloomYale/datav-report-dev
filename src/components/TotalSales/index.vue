<template>
    <common-card title="累计销售额" value="￥32,039,165">
        <template v-slot>
            <div class="compare-wrapper">
                <div class="compare">
                    <span>日同比</span>
                    <span class="emphasis">7.33%</span>
                    <div class="increase"></div>
                </div>
                <div class="compare">
                    <span>月同比</span>
                    <span class="emphasis">38.70%</span>
                    <div class="decrease"></div>
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <span class="emphasis">昨日销售额：30,000,000</span>
        </template>
    </common-card>
</template>

<script setup>
import CommonCard from '../CommonCard/index.vue';
</script>

<style lang="scss" scoped>
.compare-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .compare {
        display: flex;
        align-items: center;
        margin-top: 3px;
        font-size: 12px;
        color: #666;
        .increase{
            width: 0;
            height: 0;
            border-width: 3px;
            border-color: transparent transparent red transparent;
            border-style: solid;
            margin: 0 0 3px 5px;
        }
        .decrease{
            width: 0;
            height: 0;
            border-width: 3px;
            border-color: green transparent transparent transparent;
            border-style: solid;
            margin: 3px 0 0 5px;
        }
    }
}
</style>