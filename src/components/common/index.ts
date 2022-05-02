// 全局组件入口文件
import PCSkeleton from './PCSkeleton.vue'
import PCCarousel from './PCCarousel.vue'
import PCMore from './PCMore.vue'
export default {
    install(app: any) {
        app.component('PCSkeleton', PCSkeleton)
        app.component('PCCarousel', PCCarousel)
        app.component('PCMore', PCMore)
    }
}