<template>
    <div>
      <router-link to="/weathercity">点击切换城市</router-link> |{{store.state.weathercityname}}市
        <h1>WeatherView</h1>
        <ul>
          <li>{{cityinfo.city}}</li>
          <li>更新时间： {{cityinfo.updateTime}}</li>
          <li>感冒指数：{{weatherlist.ganmao}}</li>
          <li>温度： {{weatherlist.wendu}}</li>
          <li>pm2.5: {{weatherlist.pm25}}</li>
          <li>空气质量：{{weatherlist.quality}}</li>
        </ul>
        <h3>最近15日天气状况</h3>
        <ul>
          <li v-for="item in weatherlist.forecast" :key="item.ymd">{{item.ymd}}: {{item.type}}</li>
        </ul>

    </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import axios from 'axios'
import { useStore } from 'vuex'

export default {
  name: 'WeatherView',
  setup () {
    const weatherlist = ref('')
    const cityinfo = ref('')
    const store = useStore()
    onMounted(() => {
      axios.get('/wt/api/weather/city/' + store.state.weathercityid)
        .then(res => {
          console.log(res)
          weatherlist.value = res.data.data
          cityinfo.value = res.data.cityInfo
        })
    })

    return {
      weatherlist,
      store,
      cityinfo
    }
  }
}
</script>
