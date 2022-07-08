<template>
  <div>
    <h1>CategoryView</h1>
    <p>{{ obj.newsdata }}</p>
    <button  @touchstart="nextjoy">下一个</button>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import axios from 'axios'

export default {
  name: 'CategoryView',
  setup () {
    const obj = reactive({
      newsdata: ''
    })
    onMounted(() => {
      axios.get('/joy/api/gxdz').then((res) => {
        console.log(res)
        obj.newsdata = res.data
      })
    })
    const nextjoy = () => {
      console.log('换一个')
      axios.get('/joy/api/gxdz').then((res) => {
        console.log(res)
        obj.newsdata = res.data
      })
    }

    return {
      obj,
      nextjoy
    }
  }
}
</script>
