// 全局组件入口文件
import PCSkeleton from './PCSkeleton.vue'
import PCCarousel from './PCCarousel.vue'
export default {
    install(app: any) {
        app.component('PCSkeleton', PCSkeleton)
        app.component('PCCarousel', PCCarousel)
    }
}