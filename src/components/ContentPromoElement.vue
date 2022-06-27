<template>
  <section :style="`background-image: url(${bgImage})`">
    <div class="content">
        <div class="content__heading">
            <span v-if="underTitle" v-text="underTitle"></span>
            <h3 v-text="title"></h3>
        </div>
        <div v-if="text" class="content__text" v-text="text"></div>
        <my-button v-if="link" class="button">Read more</my-button>
    </div>
  </section>
</template>

<script>

export default{
    props:{
        bgImage:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        underTitle:{
            type:String
        },
        text:{
            type:String
        },
        link:{
            type:String
        },
    }
}
</script>

<style lang="scss" scoped>
section{
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    padding: 52px 0px 57px 50px;
    display: flex;
    align-items: flex-end;
    .content{
        max-width: 360px;
        &__heading{
           
            span{
                font-size: 18px;
                font-weight: 300;
                color: $color-light;
            }
            h3{
                font-size: 42px;
                font-weight: 400;
                text-transform: uppercase;
                line-height: 56px;
                letter-spacing: -3px;
                color: $color-medium;
            }
        }
        &__text{
            color: $color-light;
            font-size: 16px;
            font-weight: 300;
            line-height: 28px;
            letter-spacing: 0.3px;
        }
        .button{
            margin-top: 62px;
        }
    }
}
</style>