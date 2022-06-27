<template>
    <header :class="navIsOpen ? 'visible-mobile' : ''" >
        <router-link to="/" class="header-logo">
            <img src="http://ld-wp.template-help.com/woocommerce_prod-20719/v2/wp-content/uploads/2018/11/Vector-8.svg" width="72" height="22" alt="logo">
        </router-link>

        <nav>
            <button @click="navIsOpen = !navIsOpen" 
            style="position: absolute;left: 0px;transform: translateX(-100%);" 
            v-html="navIsOpen ? 'close nav' : 'open nav'">
            </button>
            <ul class="nav-ul">
                <li class="nav-li dropdown-li">
                    <router-link class="nav-a" to="/">Home \/</router-link>

                    <div class="dropdown-nav">
                        <div class="dropdown-nav__content">
                            <VerticalLinksList v-for="item in navigationDropdown" :title="item.title" :list="item.list" />
                        </div>
                        <div class="dropdown-nav__media">
                            <img src="https://ld-wp.template-help.com/woocommerce_prod-20719/v2/wp-content/uploads/2018/11/01-1.png" alt="">
                        </div>
                    </div>
                    
                </li>
                <li class="nav-li" v-for="item in navigation">
                    <router-link class="nav-a" :to="item.link" v-text="item.text" />
                </li>
            </ul>
        </nav>
        <div @click="navIsOpen = !navIsOpen" class="mobile-menu-cover"></div>
    </header>
</template>

<script>
import VerticalLinksList from '@/components/VerticalLinksList.vue'
export default {
    components:{
        VerticalLinksList
    },
    data(){
        return{
            navIsOpen:false,
            navigation:[
                {text:'News', link:'/news'},
                {text:'Partners', link:'/partners'},
                {text:'Tabels', link:'/tabel' }
            ],
            navigationDropdown:[
                {
                    title:'Trololo',
                    list:[{text:'Text', link:'/'}]
                },
                {
                    title:'Trololo 2',
                    list:[
                        {text:'Text', link:'/' },
                        {text:'Text', link:'/' },
                        {text:'Text', link:'/' },
                        {text:'Text', link:'/' },
                    ]
                },
                {
                    title:'Trololo 3',
                    list:[
                        {text:'Text', link:'/'},
                        {text:'Text', link:'/'}
                    ]
                },
                 {
                    title:'Trololo 2',
                    list:[
                        {text:'Text', link:'/' },
                        {text:'Text', link:'/' },
                        {text:'Text', link:'/' },
                        {text:'Text', link:'/' },
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.mobile-menu-cover{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: rgba(0,0,0,0.44);
    display: none;
}
header{
    background-color: $main-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-logo{
        padding: 10px;
    }
    nav{
        padding-right: 40px;
        .nav-ul{ 
            position: relative;
            display: flex;
            flex-direction: row;
            .nav-li{ 
                &.dropdown-li:hover{
                    .dropdown-nav{
                        visibility: inherit;
                        opacity: 1;
                        transform: translateY(0%);
                    }
                }
                .dropdown-nav{
                    transition: opacity .5s;
                    visibility: hidden;
                    opacity: 0;
                    transform: translateY(-120%);

                    display: flex;
                    position: absolute;
                    width: max-content;
                    max-width: 720px;
                    top: 100%;
                    left: -50%;
                    box-shadow: 2px 2px 5px rgb(0 0 0 / 20%);
                    z-index: 999;
                    background: #fff;

                    &__content{
                        gap: 10px;
                        padding: 16px;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;  
                    }
                    &__media{
                        img{                   
                            object-fit: cover;
                            width: 100%;
                            max-width: 200px;
                            height: 100%;
                        }
                        
                    }
                }
                .nav-a{  
                    display: block;
                    font-family: "Roboto", Sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                    text-transform: uppercase;
                    border-style: solid;
                    border-width: 3px 0px 0px 0px;
                    border-color: transparent;
                    padding: 25px 0px 25px 0px;
                    margin: 0px 0px 0px 30px;
                    color:#fff;
                    &:hover{
                        border-color: #ffffff;
                    }
                }
            }
        }
    }

    @media (max-width: 768px){
        &.visible-mobile{
            nav{
                transform: translateX(0);
                z-index: 1;
            }
            .mobile-menu-cover{
                display: block;
            }
        }  
        nav{
            padding: 0;
            position: absolute;
            top: 0;
            right: 0;
            background: $main-color; 
            transform: translateX(100%);
            transition: .5s;
            .nav-ul{ 
                flex-direction: column;
                .nav-li{ 
                    .dropdown-nav{
                        visibility: visible;
                        opacity: 1;
                        position: static;
                        transform: translateY(0%);
                        width: 100%;
        
                    }
    
                }
            }
        }
    }
}


</style>