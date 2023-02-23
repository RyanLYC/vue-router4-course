import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/a',
      component: () => import('@/views/AboutA.vue'),
      beforeEnter: (to, from) => {
        console.log('/a beforeEach - to:', to)
        console.log('/a beforeEach - from:', from)
      }
    },
    {
      path: '/b',
      component: () => import('@/views/AboutB.vue'),
      beforeEnter: (to, from) => {
        console.log('/b beforeEach - to:', to)
        console.log('/b beforeEach - from:', from)
      }
    },
    {
      path: '/c',
      component: () => import('@/views/AboutC.vue'),
      beforeEnter: (to, from) => {
        console.log('/c beforeEach - to:', to)
        console.log('/c beforeEach - from:', from)
      }
    }
  ]
})

export default router

/**
 * 全局前置守卫，在路由跳转前触发，它在 每次导航 时都会触发。
    to: Route: 即将要进入的目标路由对象
    from: Route: 当前导航正要离开的路由对象
    next: Function:  next 参数可以不添加，但是一旦添加，则必须调用一次，否则路由跳转等会停止。
 */
router.beforeEach((to, from, next) => {
  console.log('router.beforeEach - to:', to)
  console.log('router.beforeEach - from:', from)
  next()
  /**
      next(): 进行管道中的下一个钩子。
      next(false): 中断当前的导航。回到 from 路由对应的地址。
      next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址，可传递的参数与 router.push 中选项一致。
      next(error): 导航终止，且该错误会被传递给 router.onError() 注册过的回调。

   */
})

/**
 * 全局解析守卫，在路由跳转前，所有 组件内守卫 和 异步路由组件 被解析之后触发，它同样在 每次导航 时都会触发。
 */
router.beforeResolve((to, from, next) => {
  console.log('router.beforeResolve - to:', to)
  console.log('router.beforeResolve - from:', from)
  next()
})

/**
 * 全局后置钩子，它发生在路由跳转完成后，beforeEach 和 beforeResolve 之后，beforeRouteEnter（组件内守卫）之前。它同样在 每次导航 时都会触发。
 */
router.afterEach((to, from) => {
  console.log('router.afterEach - to:', to)
  console.log('router.afterEach - from:', from)
})
