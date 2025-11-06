import { createApp } from 'vue'
import App from './App.vue'
import * as Echarts from 'echarts'
import router from './router'
const app = createApp(App)

app.provide('$echarts', Echarts)
app.use(router)
app.mount('#app')
