// 全局组件入口文件

import PCSkeleton from './PCSkeleton.vue'
import PCCarousel from './PCCarousel.vue'
import PCMore from './PCMore.vue'
import PCBread from './PCBread.vue'
import PCBreadItem from './PCBread-item.vue'
import PCCheckBox from './PCCheckBox.vue'
import PCInfiniteLoading from './PCInfinite-loading.vue'
export default {
    install(app: any) {
        app.component('PCSkeleton', PCSkeleton)
        app.component('PCCarousel', PCCarousel)
        app.component('PCMore', PCMore)
        app.component('PCBread', PCBread)
        app.component('PCBreadItem', PCBreadItem)
        app.component('PCCheckBox', PCCheckBox)
        app.component('PCInfiniteLoading', PCInfiniteLoading)
    }
}