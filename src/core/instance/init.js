/* @flow */
import { initState } from './state'
import { initRender } from './render'
import { extend, mergeOptions } from '../util/index'

let uid = 0

export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    // a uid
    vm._uid = uid++

    // a flag to avoid this being observed
    vm._isVue = true
    
    vm.$options = options
    vm._renderProxy = vm
    
    // expose real self
    vm._self = vm
    initRender(vm)
    initState(vm)

    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
}