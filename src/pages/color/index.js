import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Color 色彩',
  'usingComponents': {
    'i-card': '/iview/card/index',
    'i-row': '/iview/row/index',
    'i-col': '/iview/col/index',
    'i-panel': '/iview/panel/index'
  }
}

}
