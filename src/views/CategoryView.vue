<template>
    <div>
        <h1>CategoryView</h1>
        <p>{{obj.newsdata}}</p>
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
      axios.get('/joy/api/gxdz')
        .then(res => {
          console.log(res)
          obj.newsdata = res.data
        })
    })

    return {
      obj
    }
  }
}
</script>
