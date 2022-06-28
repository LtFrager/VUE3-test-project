<template>
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
      <div ref="observer" class="observer"></div>
    </div>

    <NewsAside :class="sidebarIsOpen ? 'opened' : ''" />
    <!-- <my-button @click="scrollToTop()" class="to-top">To top</my-button> -->
  </div>
</template>

<script>
import NewsAside from '@/components/news/NewsAside.vue'
import NewsList from '@/components/news/NewsList.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default{
  components:{
    NewsList,
    NewsAside
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
      loadMoreNews: 'news/loadMoreNews',
    }),
    scrollToTop(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  mounted(){
    this.setLimit(10)
    this.initNews()
    this.loadMoreNews()

    const options = {
    rootMargin: '0px',
    threshold: 1.0
    }
    const callback = (entries, observer) => {
      console.log('observer');
        if(entries[0].isIntersecting && this.page < this.totalPages){
          this.loadMoreNews()
        }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
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
}
</style>