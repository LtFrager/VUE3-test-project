<template>
    <MySlider />

    <div class="promo-elements">
      <ContentPromoElement 
      style="grid-area: 1 / 1 / 3 / 2;"
      :bgImage="'https://ld-wp.template-help.com/woocommerce_prod-20719/v2/wp-content/uploads/2018/11/bg1.png'" 
      :title="'Title 1'" 
      :underTitle="'Subtitle 1'" 
      :link="'/'" />

      <ContentPromoElement
      style="grid-area: 1 / 2 / 2 / 3;" 
      :bgImage="'https://ld-wp.template-help.com/woocommerce_prod-20719/v2/wp-content/uploads/2018/11/bg2.png'" 
      :title="'Title 2'" 
      :underTitle="'Subtitle 2'" 
      :link="'/'" />

      <ContentPromoElement 
      style="grid-area: 2 / 2 / 3 / 3;"
      :bgImage=" 'https://ld-wp.template-help.com/woocommerce_prod-20719/v2/wp-content/uploads/2018/11/bg3.png'" 
      :title="'Title 3'" 
      :underTitle="'Subtitle 3'" 
      :link="'/'" />
    </div>
    
   <div class="container">
      <section class="news-section">
        <h2 class="element-title">latest news <my-button :link="'/news'">check all news</my-button></h2> 

        <NewsList :isLoading="newsLoading" :data="news" />
      </section>
    </div>
</template>

<script>
import MySlider from '@/components/MySlider.vue'
import ContentPromoElement from '@/components/ContentPromoElement.vue'
import NewsList from '@/components/news/NewsList.vue'

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default{
  components:{
    MySlider,
    ContentPromoElement,
    NewsList
  },
  data(){
    return{
    } 
  },
  methods:{
    ...mapMutations({
      setLimit: 'news/setLimit',
    }),
    ...mapActions({
      initNews: 'news/initNews',
      loadMoreNews: 'news/loadMoreNews',
    }),
  },
  mounted(){
    this.setLimit(4)
    this.initNews()
    this.loadMoreNews()
  },
  computed:{
    ...mapState({
      news: state => state.news.news,
      newsLoading: state => state.news.isLoading
    })
  }
}
</script>

<style lang="scss" scoped>
.element-title{
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}
.news-section{
  position: relative;
  margin-top: 62px;
}
.promo-elements{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media (max-width: 940px){
    display: block;
  }
}
</style>