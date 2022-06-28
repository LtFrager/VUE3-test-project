<template>
    <ContentPromoElement
        class="promo"
        :bgImage="'https://ld-wp.template-help.com/woocommerce_prod-20719/v2/wp-content/uploads/2018/11/bg2.png'" 
        :title="post.title">
            <template v-slot:upper-heading>
                <span style="color:red">Это страница поста с ID = {{ $route.params.id }}</span>
            </template>
            <template v-slot:actions>
                <my-button @click="goBack()">go back</my-button>
            </template>
    </ContentPromoElement>

    <div class="container">
        <main>
            <article>
                <header>
                    <h1 class="element-title">{{post.title}}</h1>
                    Опубликованно <time :datetime="Date.now()">{{time}}</time>
                </header>
                <div class="post-content">
                    {{post.body}}
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni a, maxime pariatur accusamus nisi veritatis, totam architecto reprehenderit minus quaerat commodi, cum labore consequuntur ullam dolore ipsa ratione nulla.
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, enim voluptatibus quisquam magnam quam provident necessitatibus consectetur sunt sequi voluptates dolorum cumque dolor? Dolor saepe soluta perferendis voluptatum doloremque asperiores!
                    <br />
                    Possimus quisquam iste molestiae quae ab repellendus id asperiores, sint et esse modi. Aperiam asperiores quam suscipit, maiores a mollitia, laboriosam in ratione cupiditate, sunt numquam! Hic officiis atque autem?
                    Tenetur adipisci fuga ut, vitae quod aut illo quam fugit quae excepturi saepe iure dolor esse fugiat nostrum aliquam, earum voluptates reprehenderit. Ullam saepe est reprehenderit, ad reiciendis hic voluptatem!
                    Aut, temporibus praesentium. Officiis atque, dicta quasi numquam aperiam distinctio earum amet eos inventore aspernatur vitae accusamus sit praesentium. Rerum unde adipisci repudiandae consectetur nulla est repellat dignissimos tempora illum.
                    <br />
                    Voluptate aut provident ratione. Dolore quis ea explicabo illo dolor molestiae autem, animi quos repellat? Minima facere quidem enim repellendus, harum error expedita odit tenetur accusamus possimus! Minus, molestiae laborum!
                    Architecto pariatur, eos ullam nihil debitis nobis quasi numquam iusto aliquid soluta voluptates, eius totam voluptatem laudantium beatae iure, expedita atque cum dolorum. Corporis quaerat consectetur animi nemo corrupti? Facere?
                    <br />
                </div>
            </article>
        </main>

        <NewsAside />
    </div>
</template>

<script>
import NewsAside from '@/components/news/NewsAside.vue'
import ContentPromoElement from '@/components/ContentPromoElement.vue'
import axios from 'axios'
    export default {
        components:{
            ContentPromoElement,
            NewsAside
        },
        data(){
            return{
                sidebarIsOpen:false,
                time:new Date('2015-05-15 19:00').toLocaleDateString('ru', { month: 'long', day: 'numeric' }),
                post:{
                    id:'',
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            goBack() {
                window.history.state.back ? this.$router.go(-1) : this.$router.push('/news')
            },
            async fetchPost(){
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts' , {
                    params:{
                        _page: this.$route.params.id,
                        _limit: 1
                    }
                    })
                    this.post = response.data[0]
                } catch (error) {
                    console.log(error);
                }
            },
        },
        mounted(){
            this.fetchPost()
        }
    }
</script>

<style lang="scss" scoped>
.promo{
    min-height: 33vh;
}
.container{
  display: flex;
  flex-wrap: wrap;
  main{
      margin-top: 20px;
      flex: 0 0 75%;
      @media (max-width: 940px){
        flex: 0 0 100%;
      }
      .post-content{
        font-size: 1.125rem;
      }
    } 
    aside{
        flex: 0 0 25%;
        @media (max-width: 940px){
            flex: 0 0 100%;
        }
    }
}
</style>