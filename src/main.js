import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入第三方管理
import getVant from "@/plugins";

const app = createApp(App)
//使用第三方管理
getVant(app)
app.use(store)
app.use(router)
app.mount('#app')
