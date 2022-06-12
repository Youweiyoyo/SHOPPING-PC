/**
 * 按钮权限指令
 * @Example v-auth="'add'"
 */

// 模拟权限列表,后期权限列表可以使用 vuex 中的权限列表
const permissionSet = new Set(['add', 'update', 'delete'])

import {Directive, DirectiveBinding} from "vue";

const auth: Directive = {
    mounted: function(el: Element, binding: DirectiveBinding<any>) {
        const value = binding.value;

        if(!value) {
            return
        }
        // 找到当前元素的父级节点，调用 removeChild 删除当前元素
        if(!permissionSet.has(value)){
            el.parentNode?.removeChild(el)
        }
    }
}

export default auth;