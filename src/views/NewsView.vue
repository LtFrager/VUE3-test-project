<template>
  <div class="container">
    <div class="news">
      <NewsList :isLoading="newsLoading" :data="sortedAndSearchedNews" />

      <div ref="observer" class="observer"></div>
    </div>

    <aside>
      <my-input placeholder="Enter keyword search" 
        :model-value="searchValue" 
        @update:model-value="setSearchValue"
      />

      <my-select :options="selectOptions"
        :model-value="selectedSort" 
        @update:model-value="setSelectedSort"
      />

      <my-button @click="scrollToTop()" class="to-top">To top</my-button>
    </aside>
  </div>
  </template>

<script>
import NewsList from '@/components/news/NewsList.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default{
  components:{
    NewsList,
  },
  data(){
    return{
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
}

.news{
    flex: 0 0 75%;
     @media (max-width: 940px){
      flex: 0 0 100%;
    }
}

aside{
    flex: 0 0 25%;
    @media (max-width: 940px){
      flex: 0 0 100%;
    }
}
.to-top{
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.observer{
  width: 100%;
}
</style>