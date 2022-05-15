import { createApp } from 'vue'
import App from './App.vue'
import Router from './route'
import Store from './store'
import commonUI from "./components/common";
import 'normalize.css'
import './assets/styles/commone.less'
import directives from './directives'
const app = createApp(App)
app.use(Router)
app.use(Store)
app.use(commonUI)
app.use(directives)
app.mount('#app')
