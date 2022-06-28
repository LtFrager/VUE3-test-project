<template>
     <ul class="vertical-list">
        <li v-if="title" class="vertical-list__title">
            <h3 v-text="title"></h3>
        </li>
        <li class="vertical-list__item"  v-for="item in list">
            <router-link :to="item.link" v-text="item.text" />
        </li>
    </ul>
</template>

<script>
export default {
   props:{
        title:{
            type:String
        },
        list:{
            type:Array,
            required: true
        }
   }
}
</script>

<style lang="scss" scoped>
.vertical-list{
    &__title{
        margin-bottom: 26px;
        h3{ 
            color:$color-medium;
            font-size: 16px;
            font-weight: 400;
            text-transform: uppercase;
            line-height: 24px;
            letter-spacing: -0.5px;
        }
    }
    &__item{
        a{  
            color: $color-light;
            font-size: 14px;
            font-weight: 300;
            line-height: 31px;
            display: block;
            &:hover{
                color: $main-color;
            }
        }
    }
}

</style>