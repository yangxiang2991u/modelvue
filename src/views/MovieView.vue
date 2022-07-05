<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <div v-for="item in moviedata" :key="item.id" class="movie-item">
      <div class="movie-item-img"><img :src="item.img" alt="" srcset=""/></div>
      <div class="movie-item-content">
        <div><b class="moviename">{{item.nm}}<i :class="item.ver"></i></b></div>
        <div><span>评分： <b class="sc">{{item.sc}}</b></span></div>
        <div><span> {{item.desc}}</span></div>
        </div>
      <div class="movie-item-buy" ><button :style="{'background':item.showStateButton.color}">{{item.showStateButton.content}}</button></div>

      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import { ref, onMounted } from 'vue'
export default {
  name: 'MovieView',
  setup () {
    const moviedata = ref([])
    onMounted(() => {
      axios.get('/moy/api/mmdb/movie/v3/list/hot.json?ct=%E6%B7%B1%E5%9C%B3&ci=30&channelId=4')
        .then(res => {
          console.log(res)
          moviedata.value = res.data.data.hot
        })
    })

    return {
      moviedata
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-item{
 height: 120px;
width: 100%;
display: flex;
margin-top:5px;
border-bottom: 1px solid #cfcbcb;

}
.movie-item-img{
width: 80px;
height: 118px;
overflow: hidden;

  img{
    width: 80px;
  }
}

.movie-item-buy{

  width: 80px;
  height: 120px;
  right: 0;
  button{
    width: 50px;
    height: 30px;
    color: #f6f6f6;
    border-radius: 15px;
    border: 0 solid white;
    margin-top:95% ;
  }
}
.movie-item-content{
flex: 1;
text-align: left;
margin: 0 5px;
span{
  font-size: 14px;
  color:darkgray

}
}
  .sc{
    color: #f5ca0a;
    font-size: 18px;
  }

  .IMAX{
    display: inline-block;
    width: 43px;
    height: 14px;
    margin-left: 10px;
    background-image: url(//s0.meituan.net/bs/myfe/canary/file/touchnode/images/dpmmweb/hot-tab/img/base64/v3dimax.png);
    background-size: cover;
  }
  .moviename{
    display: inline-block;
    font-size: 18px;
    line-height: 40px;
    white-space:nowrap;
    overflow: hidden;
    width: 200px;
    text-overflow: ellipsis;
  }
</style>
