<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" v-show="isshow">
    <HelloView @change="homefunc" msg="Welcome to Your Vue.js App"/>
    <span v-good>{{name}}</span>
    <h1>{{age}}</h1>
    <h2 v-hello >{{mess}}</h2>
    <h2 v-hello >{{obj.titles}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, ref } from 'vue'
import HelloView from '../components/HelloView.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      name: '我叫马牛v',
      age: 30
    }
  },
  setup () {
    const isshow = ref(true)
    const obj = reactive({
      titles: 'black cat police'
    })
    const mess = ref('hello kitty')
    const homefunc = (a) => {
      console.log(a)
      mess.value = a
      obj.titles = a
      isshow.value = !isshow.value
    }

    return {
      mess,
      homefunc,
      isshow,
      obj
    }
  },
  components: {
    HelloView
  },

  // 指令写法模板
  directives: {
    hello: {
      mounted (el) {
        console.log('hekkkkkk', el)
        el.style.color = 'red'
      }
    },

    good: {
      mounted (el) {
        el.style.color = 'green'
      }
    }
  }
}
</script>
