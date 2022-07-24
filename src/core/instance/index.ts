import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
import type { GlobalAPI } from 'types/global-api'

// 此处不用class的原因是因为方便后续给Vue实例混入实例成员
function Vue(options) {
  if (__DEV__ && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 调用_init()方法
  this._init(options)
}

//@ts-expect-error Vue has function type
// 注册vm的_init()方法，初始化vm
initMixin(Vue)
//@ts-expect-error Vue has function type
// 注册vm的$data/$props/$set/$delete/$watch
stateMixin(Vue)
//@ts-expect-error Vue has function type
// 初始化事件相关方法
// $on/$off/$emit/$once
eventsMixin(Vue)
//@ts-expect-error Vue has function type
// 初始化生命周期相关的混入方法
// _update/$forceUpdate/$destroy
lifecycleMixin(Vue)
//@ts-expect-error Vue has function type
// 混入render
// $nextTick/_render
renderMixin(Vue)

export default Vue as unknown as GlobalAPI
