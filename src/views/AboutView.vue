<template>
    <div>
       <router-link to="/city">点击切换城市</router-link> |{{store.state.cityname}}市
        <h1>AboutView</h1>
        <div class="search">
        <span>搜索： </span><input type="text" v-model="obj.mytext" placeholder="请输入影院名"/>
        </div>
         {{store.state.cityname}}
         {{store.state.cityid}}
<li v-for="list in computedlist"  :key="list.id">{{list.name}}</li>
    </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import axios from 'axios'
import { useStore } from 'vuex'

export default {
  name: 'AboutView',
  setup () {
    const obj = reactive({
      cinemalist: [],
      mytext: ''

    })
    const store = useStore()
    onMounted(() => {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=' + store.state.cityid + '&ticketFlag=1&k=249854',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16560877761904865240416257","bc":"310100"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        },
        method: 'get'
      }).then(res => {
        console.log(res.data)
        obj.cinemalist = res.data.data.cinemas
      })
    })
    const computedlist = computed(() => {
      console.log('我被调用了')
      return obj.cinemalist.filter(item => item.name.includes(obj.mytext)).length === 0 ? [{ name: '该影院不存在', cinemaId: '00000000' }] : obj.cinemalist.filter(item => item.name.includes(obj.mytext))
    })

    return {
      obj,
      store,
      computedlist
    }
  }
}
</script>
