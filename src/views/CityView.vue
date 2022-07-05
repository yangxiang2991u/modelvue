<template>
    <div>
         {{store.state.cityname}}
         {{store.state.cityid}}
        <h1>CityView</h1>
<li class="list" v-for="list in citylist"  :key="list.id" @click="changecityname([list.name, list.cityId])">{{list.name}}</li>
    </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import axios from 'axios'
import { useStore } from 'vuex'

export default {
  name: 'CityView',
  setup () {
    const store = useStore()
    console.log(store)
    const citylist = ref([])
    onMounted(() => {
      axios({
        url: 'https://m.maizuo.com/gateway?k=358479',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16560877761904865240416257","bc":"310100"}',
          'X-Host': 'mall.film-ticket.city.list'
        },
        method: 'get'
      }).then(res => {
        console.log(res.data)
        citylist.value = res.data.data.cities
      })
    })

    const changecityname = (cityname) => {
      store.commit('changecity', cityname)
      history.go(-1)
    }

    return {
      citylist,
      store,
      changecityname
    }
  }
}
</script>

<style lang="scss" scoped>
.list{
color:#42b983;
display: block;
height: 40px;
border-bottom: 2px solid gainsboro;
line-height: 40px;

}
.list:hover{
  background-color: antiquewhite;
}

</style>
