<template>
    <section class="news">
      <div v-show="isLoading">
        LOADING!!!!
      </div>

      <TransitionGroup v-show="!isLoading" name="news-promo" tag="div" class="news__container">
        <NewsPromo :data="item" :key="item.id" v-for="item in data" />
      </TransitionGroup> 
    </section>
</template>

<script>
import NewsPromo from '@/components/news/NewsPromo.vue'
export default{
  props:['data', 'isLoading'],
  components:{ 
    NewsPromo
  },
}
</script>

<style lang="scss" scoped>
.news{
    &__container{
      overflow: hidden;
      display: flex;
      flex-direction: row;
      gap: 20px;
      flex-wrap: wrap;
    }
}
</style>
<style>
.news-promo-item {
  display: inline-block;
  margin-right: 10px;
}
.news-promo-enter-active,
.news-promo-leave-active {
  transition: all 1s ease;
}
.news-promo-enter-from,
.news-promo-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.news-promo-move {
  transition: transform 0.4s ease;
}
</style>