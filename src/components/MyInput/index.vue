<template>
    <div class="my-input">
        <el-input ref="inp" v-bind="attrs" style="width:200px">
            <template v-for="(value, name) in slots" #[name]="scope">
                <slot :name="name" v-bind="{ ...scope }"></slot>
            </template>
        </el-input>
    </div>
</template>

<script setup>
const inp = ref(null);
import { ref, onMounted, onUpdated, useAttrs, useSlots, defineExpose } from 'vue';
const attrs = useAttrs();
const slots = useSlots();
const exposeObj = {};
onMounted(() => {
    // 1. 判断 ref 值的结构
    const ctx = Object.prototype.hasOwnProperty.call(inp.value, '$')
        ? inp.value.$.ctx  // Vue 组件实例（有 $ 属性）
        : inp.value;       // 普通 DOM 元素或普通对象

    // 2. 遍历目标对象的所有属性（包括 Symbol）
    Reflect.ownKeys(ctx).forEach(key => {
        // 3. 如果 exposeObj 中还没有这个属性，就复制过来
        if (!Reflect.has(exposeObj, key)) exposeObj[key] = ctx[key];
    });

})
defineExpose(exposeObj);
</script>

<style lang="scss" scoped>
.my-input {
    transition: 0.3s;
}

.my-input:hover,
.my-input:focus-within {
    filter: drop-shadow(0 0 3px rgb(0, 123, 255, 0.5));
}
</style>