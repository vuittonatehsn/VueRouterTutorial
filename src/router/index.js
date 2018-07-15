import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page from '@/components/pages/page'
import child from '@/components/pages/child'
import child2 from '@/components/pages/child2'
import child3 from '@/components/pages/child3'
import Menu from '@/components/pages/menu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Home',
      component: HelloWorld
    },  
    {
      path: '/page',
      //name: '分頁',
      //component: Page,
      components:{
        default: Page,
        menu: Menu,
      },
      children:[
        {
          path: '',
          name: '卡片1',
          component: child
        },
        {
          path: 'child2',
          name: '卡片2',
          component: child2
        },
        {
          path: 'child/:id',
          name: '卡片3',
          component: child3
        }
      ]
    }
  ]
})
