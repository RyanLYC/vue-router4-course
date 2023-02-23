<template>
  <div>
    <h1>This is A page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  /**
   * 该钩子在全局守卫 beforeEach 和路由守卫 beforeEnter 之后，全局 beforeResolve 和全局 afterEach 之前调用
   */
  beforeRouteEnter(to, from, next) {
    console.log('ComponentB beforeRouteEnter - to:', to)
    console.log('ComponentB beforeRouteEnter - from:', from)
    next((e: any) => {
      console.log('ComponentB data:', e.data.routerPage)
    })
  }
})
</script>

<script lang="ts" setup>
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
onBeforeRouteUpdate((to, from) => {
  console.log('ComponentB beforeRouteUpdate - to:', to)
  console.log('ComponentB beforeRouteUpdate - from:', from)
})
onBeforeRouteLeave((to, from) => {
  console.log('ComponentB beforeRouteLeave - to:', to)
  console.log('ComponentB beforeRouteLeave - from:', from)
})

let data = reactive({
  routerPage: 'B'
})
defineExpose({ data })
</script>
