<template>
  <div>
    <h1 @click="refresh">This is A page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  /**
   * 该钩子在全局守卫 beforeEach 和路由守卫 beforeEnter 之后，全局 beforeResolve 和全局 afterEach 之前调用
   */
  beforeRouteEnter(to, from, next) {
    console.log('ComponentA beforeRouteEnter - to:', to)
    console.log('ComponentA beforeRouteEnter - from:', from)
    next((e: any) => {
      console.log('ComponentA data:', e.data.routerPage)
    })
  }
})
</script>

<script lang="ts" setup>
import { onBeforeRouteUpdate, onBeforeRouteLeave, useRouter } from 'vue-router'
onBeforeRouteUpdate((to, from) => {
  console.log('ComponentA beforeRouteUpdate - to:', to)
  console.log('ComponentA beforeRouteUpdate - from:', from)
})
onBeforeRouteLeave((to, from) => {
  console.log('ComponentA beforeRouteLeave - to:', to)
  console.log('ComponentA beforeRouteLeave - from:', from)
})

let data = reactive({
  routerPage: 'A'
})
defineExpose({ data })

const router = useRouter()
const refresh = () => {
  router.push({
    path: '/a',
    query: {
      key: Math.random()
    }
  })
}
</script>
