import Vue from 'vue'
import Router from 'vue-router'
import number from '../views/number/number.vue'

// 患者数量
import chest from '../views/number/chest.vue'
import apoplexy from '../views/number/apoplexy.vue'
import child from '../views/number/child.vue'
//急救效率
import sos from '../views/sos/sos.vue'
import sosapoplexy from '../views/sos/sosapoplexy.vue'
import soschest from '../views/sos/soschest.vue'
import soschild from '../views/sos/soschild.vue'
//来院方式
import come from '../views/come/come.vue'
import comechest from '../views/come/comechest.vue'
import comeapoplexy from '../views/come/comeapoplexy.vue'
import comechild from '../views/come/comechild.vue'
//来院使用情况
import use from '../views/condition/use.vue'
import usechest from '../views/condition/usechest.vue'
import useapoplexy from '../views/condition/useapoplexy.vue'
import usechild from '../views/condition/usechild.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/number',
      component: number,
      children:[
        {
          path: '/chest',
          component: chest, 
        },
        {
          path: '/apoplexy',
          component: apoplexy
        },
        {
          path: '/child',
          component: child
        },
      ]
    },
    {
      path: '/sos',
      component: sos,
      children:[
        {
          path: '/soschest',
          component: soschest, 
        },
        {
          path: '/sosapoplexy',
          component: sosapoplexy
        },
        {
          path: '/soschild',
          component: soschild
        },
      ]
    },
    {
      path: '/come',
      component: come,
      children:[
        {
          path: '/comechest',
          component: comechest, 
        },
        {
          path: '/comeapoplexy',
          component: comeapoplexy
        },
        {
          path: '/comechild',
          component: comechild
        },
      ]
    },
    {
      path: '/use',
      component: use,
      children:[
        {
          path: '/usechest',
          component: usechest, 
        },
        {
          path: '/useapoplexy',
          component: useapoplexy
        },
        {
          path: '/usechild',
          component: usechild
        },
      ]
    },
  ]
})
