<template>
    <div class="根标签">
    <div>HelloView</div>
    <button @click="handclick">点击</button>
    <h3>{{msg}}</h3>
    </div>
</template>
<script>
export default {
  name: 'HelloView',
  props: {
    msg: String
  },
  // ① 若子组件中拥有根标签，则不需要通过emits属性声明自定义事件
  // ② 若子组件中没有根标签，则需要通过emits属性来声明自定义事件
  // emits: ['change'],
  setup (props, { emit }) {
    const handclick = () => {
      console.log(props)
      emit('change', props.msg)
    }
    return {
      handclick
    }
  }

}

</script>

<style scoped>
.根标签{
  background: red;
}
</style>
