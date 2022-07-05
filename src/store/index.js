import { createStore } from 'vuex'

export default createStore({
  state: {
    cityname: '上海',
    cityid: 310100,
    weathercityname: '苏州',
    weathercityid: 101190401
  },
  getters: {
  },
  mutations: {
    changecity (state, newcity) {
      state.cityname = newcity[0]
      state.cityid = newcity[1]
    },
    changeweathercity (state, newweathercity) {
      state.weathercityname = newweathercity[0]
      state.weathercityid = newweathercity[1]
    }

  },
  actions: {
  },
  modules: {
  }
})
