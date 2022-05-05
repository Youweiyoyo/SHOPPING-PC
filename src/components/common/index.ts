// 全局组件入口文件
import defaultImage from '../../assets/images/200.png'

import PCSkeleton from './PCSkeleton.vue'
import PCCarousel from './PCCarousel.vue'
import PCMore from './PCMore.vue'
import PCBread from './PCBread.vue'
export default {
    install(app: any) {
        app.component('PCSkeleton', PCSkeleton)
        app.component('PCCarousel', PCCarousel)
        app.component('PCMore', PCMore)
        app.component('PCBread', PCBread)
        // 定义自定义指令
        defineDirective(app)
    }
}
const defineDirective = (app: any) => {
    // 图片懒加载原理：先把图片数据存起来，但不给 src 设置, 当图片进入可视区，再将图片资源设置给元素的 src
        app.directive('lazyLoad', {
        mounted(el: HTMLElement, binding: object){
            // el：此时使用指令的 DOM 元素
            // binding: 指令绑定的值对象
            // 创建一个观察者对象,观察当前的 DOM 元素
            const observe = new IntersectionObserver(([{isIntersecting}]) => {
                if(isIntersecting){
                    // 进入可视区后停止观察
                    observe.unobserve(el)
                    // 设置图片地址
                    el.src = binding.value
                    // 出来图片加载失败
                    el.onerror = () => {
                        // 设置默地址
                        el.src = defaultImage
                    }
                }
            }, {threshold: 0})
            observe.observe(el)
        }
    })
}