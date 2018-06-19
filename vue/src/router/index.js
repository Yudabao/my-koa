import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = (resolve) => {
  import('@/components/HelloWorld').then((module) => {
    resolve(module)
  })
}

const jay = (resolve) => {
  import('@/components/jay').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/jay',
      component: jay,
    },
  ],
})
