<template>
  <ContentPromoElement
      class="page-promo"
      :bgImage="'https://ld-wp.template-help.com/woocommerce_prod-20719/v2/wp-content/uploads/2018/11/bg2.png'" 
      :title="'News'">
  </ContentPromoElement>

  <div class="container">
    <div class="actions">
      <div style="width: 100%;display:flex;gap:20px">
        <my-input style="width:100%"
          :placeholder="'Enter keyword search'"
          :icon="'search'" 
          :model-value="searchValue" 
          @update:model-value="setSearchValue"
        />

        <my-select :options="selectOptions"
          :model-value="selectedSort" 
          @update:model-value="setSelectedSort"
        />
      </div>

      <my-button class="open-aside-btn icon-button" 
        @click="sidebarIsOpen = !sidebarIsOpen">
        <icon :name="'list-ul'" />
      </my-button>
    </div>

    <div class="news">
      <NewsList :isLoading="newsLoading" :data="sortedAndSearchedNews" />
    
    </div>

    <NewsAside :class="sidebarIsOpen ? 'opened' : ''" />
    <!-- <my-button @click="scrollToTop()" class="to-top">To top</my-button> -->
  </div>

  <div v-intersection="loadMoreNews" class="observer"></div>
</template>

<script>
import ContentPromoElement from '@/components/ContentPromoElement.vue'
import NewsAside from '@/components/news/NewsAside.vue'
import NewsList from '@/components/news/NewsList.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default{
  components:{
    NewsList,
    NewsAside,
    ContentPromoElement
  },
  data(){
    return{
      sidebarIsOpen:false,
      selectOptions:[
        { name:'title', value:'title' },
        { name:'body', value:'body' }
      ],
    } 
  },
  methods:{
    ...mapMutations({
      setSearchValue: 'news/setSearchValue',
      setSelectedSort: 'news/setSelectedSort',
      setLimit: 'news/setLimit',
    }),
    ...mapActions({
      initNews: 'news/initNews',
      fetchNews: 'news/loadMoreNews',
    }),
    scrollToTop(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    loadMoreNews(){
      if(this.page < this.totalPages){
        this.fetchNews()
      }
    }
  },
  mounted(){
    this.setLimit(10)
    this.initNews()
    this.fetchNews()
  },
  computed:{
     ...mapState({
        searchValue: state => state.news.searchValue,
        selectedSort: state => state.news.selectedSort,
        news: state => state.news.news,
        page: state => state.news.page,
        totalPages: state => state.news.totalPages,
        newsLoading: state => state.news.isLoading,
    }),
    ...mapGetters({
      sortedNews: 'news/sortedNews',
      sortedAndSearchedNews: 'news/sortedAndSearchedNews',
    }),
  },
}
</script>
<style lang="scss" scoped>
.container{
  display: flex;
  flex-wrap: wrap;
  .actions{
    display: flex;
    gap: 20px;
    margin-top: 20px;
    width: 100%;
    .open-aside-btn{
      display: none;
      @media (max-width: 940px){
        display: block;
      }
    }
  }
  .news{
      margin-top: 20px;
      flex: 0 0 75%;
      @media (max-width: 940px){
        flex: 0 0 100%;
        order: 2;
      }
  }

  aside{
    flex: 0 0 25%;
    transition: .5s;
    @media (max-width: 940px){
      flex: 0 0 100%;
      order: 1;
      opacity: 0;
      height: 0;
      &.opened{
        opacity: 1;
        height: 100%;
      }
    }
  }
}

.observer{
  width: 100%;
  height: 20px;
}
</style>