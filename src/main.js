import { createApp } from 'vue'
import { JFlowVuePlugin } from '../plugin';
import App from './App.vue'
const app = createApp(App);
app.use(JFlowVuePlugin)
app.mount('#app')
