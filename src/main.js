import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueEcharts from 'vue-echarts';
import './style/index.css'

const app = createApp(App)
app.use(router)
app.component('v-chart', VueEcharts);
app.mount('#app')
