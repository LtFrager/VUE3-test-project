<template>
    <article class="news-promo">
        <picture>
            <source media="(min-width:480px)" srcset="https://ld-wp.template-help.com/woocommerce_prod-20719/v2/wp-content/uploads/2018/11/01-1.png">
            <img class="news-promo__baner" src="https://wallpapershome.ru/images/pages/pic_h/21485.jpg" alt="" width="200" height="250">
        </picture>
        <div class="news-promo__content">
            <header class="news-promo__header">
                <div class="news-promo__header-published">
                    Опубликовано
                    <time :datetime="time">{{time}}</time>
                </div>
                <h4 class="news-promo__header-title">
                    <router-link :to="`/news-post/${data.id}`">
                        (id = {{data.id}}) {{data.title}}
                    </router-link>
                </h4> 
            </header>
            <div class="news-promo__animated">
                <div class="news-promo__post">{{data.body}}</div>
                <footer class="news-promo__actions">
                    <my-button :link="`/news-post/${data.id}`" @click="ololo()">Read MORE</my-button>
                </footer>
            </div>
        </div>
    </article>
</template>   
<script>
export default{
    name:"news-promo",
    props:['data'],
    data(){
        return{
            link:'/',
            time:new Date('2015-05-15 19:00').toLocaleDateString('ru', { month: 'long', day: 'numeric' })
        }
    },
    methods:{
        ololo(){
            console.log('ololo');
        }
    }
}
</script>

<style lang="scss" scoped>

.news-promo{
    max-width: calc(100%/2 - 20px);
    width: calc(100%/2 - 20px);
    flex: 0 0 calc(100%/2);
    position: relative;
    margin: auto;
    @media (max-width: 940px){
        max-width: calc(100% - 20px);
        width: calc(100% - 20px);
        flex: 0 0 calc(100%);
    }
    &__baner{
        width: 100%;
        height: auto;
        object-fit: cover;
        height: 433px;
        border-radius: 4px;
    }
    &__content{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 20px;
        border-radius: 4px;
        background-color: rgba(255,255,255,.9);
        overflow: hidden;
        padding: 18px 29px 3px;
        transition: all .25s cubic-bezier(.165,.84,.44,1);
    }
    &__header{
        display: flex;
        flex-wrap: wrap;
        &-title{
            width: 100%;
        }
        &-published{
            color: $color-extraLight;

            time{

            }
        }
    }
      &__animated{
        line-height: 0;
        opacity: 0;
        transition: all .42s cubic-bezier(.68,.125,0,.995);
        transition-delay: .22s;
    }
    &__post{
        max-height: 220px;
        white-space: break-spaces;
    }
    &:hover{
        .news-promo{
            &__animated{
                line-height: 1.58;
                opacity: 1;
                transition: all .35s cubic-bezier(.265,.84,.44,1);
            }
        }
        
        footer{
            margin-top: 20px;
            transform: translate(0, 0);
            margin-bottom: 26px;
        }
    }
    footer{
        transition: all .42s cubic-bezier(.68,.125,0,.995);
        transform: translate(0, 60px);
        &__actions{
            *{
                transition-delay: .18s;
            }
        }
    }
}
</style>