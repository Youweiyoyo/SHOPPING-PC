// 全局组件入口文件
import PCSkeleton from './PCSkeleton.vue'
export default {
    install(app: any) {
        app.component('PCSkeleton', PCSkeleton)
    }
}