<template>
    <div>
        <h1>CityView</h1>
        <div class="search">
        <span>搜索： </span><input type="text" v-model="obj.mytext" placeholder="请输入城市名"/>
        </div>
        <div>当前城市：{{store.state.weathercityname}} ID:{{store.state.weathercityid}}</div>
<ul>
<li class="list" v-for="list in computedlist"  :key="list.cityId" @click="changeweathercityname([list.cityName, list.cityId])">{{list.cityName}}</li>
</ul>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import axios from 'axios'
import { useStore } from 'vuex'

export default {
  name: 'WeathercityView',
  setup () {
    const store = useStore()
    console.log(store)

    const obj = reactive({
      weathercitylist: [],
      mytext: ''
    })
    onMounted(() => {
      axios.get('/CityCode-weather.json').then(res => {
        console.log(res.data)
        obj.weathercitylist = res.data
      })
    })
    const computedlist = computed(() => {
      console.log('我被调用了')
      return obj.weathercitylist.filter(item => item.cityName.includes(obj.mytext)).length === 0 ? [{ cityName: '城市名不存在', cityId: '00000000' }] : obj.weathercitylist.filter(item => item.cityName.includes(obj.mytext))
    })
    console.log(computedlist)

    const changeweathercityname = (cityname) => {
      store.commit('changeweathercity', cityname)
      history.go(-1)
    }

    return {
      store,
      changeweathercityname,
      computedlist,
      obj
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
.search input{
  border: 2px solid gray;
}

</style>
