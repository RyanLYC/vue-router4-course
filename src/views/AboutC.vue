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
    console.log('ComponentC beforeRouteEnter - to:', to)
    console.log('ComponentC beforeRouteEnter - from:', from)
    next((e: any) => {
      console.log('ComponentC data:', e.data.routerPage)
    })
  }
})
</script>

<script lang="ts" setup>
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
onBeforeRouteUpdate((to, from) => {
  console.log('ComponentC beforeRouteUpdate - to:', to)
  console.log('ComponentC beforeRouteUpdate - from:', from)
})
onBeforeRouteLeave((to, from) => {
  console.log('ComponentC beforeRouteLeave - to:', to)
  console.log('ComponentC beforeRouteLeave - from:', from)
})

let data = reactive({
  routerPage: 'C'
})
defineExpose({ data })
</script>
