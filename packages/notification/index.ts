import { App } from 'vue'
import notification from './src/index.vue'

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('m-notification', notification)
  }
}