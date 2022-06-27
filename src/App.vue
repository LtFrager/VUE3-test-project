<template>
  <MyHeader />
  <router-view/>

  <footer>

  </footer>
</template>

<script>
import MyHeader from '@/components/layouts/MyHeader.vue'
export default{
  components:{
    MyHeader
  }
}
</script>

<style lang="scss">

</style>
