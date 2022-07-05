<template>
    <div>
     nowplaying
     <ul>
        <li v-for="list in filmlist"  :key="list.id">{{list.name}}</li>
     </ul>
    </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import axios from 'axios'

export default {
  name: 'NowPlaying',
  setup () {
    const filmlist = ref([])
    onMounted(() => {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=4&pageSize=10&type=1&k=5562213',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16560877761904865240416257","bc":"310100"}',
          'X-Host': 'mall.film-ticket.film.list'
        },
        method: 'get'
      }).then(res => {
        console.log(res.data)
        filmlist.value = res.data.data.films
      })
    })

    return {
      filmlist
    }
  }
}
</script>
