import { createApp } from 'vue'
import App from './App.vue'
import Router from './route'
import Store from './store'
import 'normalize.css'
import './assets/styles/commone.less'
const app = createApp(App)
app.use(Router)
app.use(Store)
app.mount('#app')
