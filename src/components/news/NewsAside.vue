<template>
    <aside>
        <hr>
        <VerticalLinksList :title="recentPosts.title" :list="recentPosts.list" />
        <hr>
        <VerticalLinksList :title="categories.title" :list="categories.list" />
        <hr>
        <VerticalLinksList :title="arcives.title" :list="arcives.list" />
    </aside>
</template>

<script>
import VerticalLinksList from '@/components/VerticalLinksList.vue'
export default {
    components:{
        VerticalLinksList
    },
    data(){
        return{
            recentPosts:{
                title:'RECENT POSTS',
                list:[
                {text:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', link:'/'},
                {text:'qui est esse', link:'/'},
                {text:'ea molestias quasi exercitationem repellat qui ipsa sit aut', link:'/'},
                {text:'eum et est occaecati', link:'/'}
                ]
            },
            categories:{
                title:'CATEGORIES',
                list:[{text:'Category 1', link:'/'}]
            },
            arcives:{
                title:'ARCHIVES',
                list:[
                {text:'January - 2022', link:'/'},
                {text:'February - 2022', link:'/'},
                {text:'March - 2022', link:'/'},
                {text:'April - 2022', link:'/'},
                {text:'May - 2022', link:'/'},
                {text:'June - 2022', link:'/'},
                {text:'July - 2022', link:'/'},
                {text:'August - 2022', link:'/'},
                ]
            }
        } 
    },
}
</script>

<style lang="scss" scoped>
  aside{
    padding: 0 20px;
    box-sizing: border-box;
    overflow: hidden;
  }
  hr{
      margin: 40px 0;
      opacity: .5;
    }
</style>