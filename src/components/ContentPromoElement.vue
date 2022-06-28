<template>
  <div class="promo-element" :style="`background-image: url(${bgImage})`">
    <div class="promo-element__content">
        <div class="promo-element__heading">
            <div class="upper-heading">
                <slot name="upper-heading"></slot>
            </div>
            <h3 v-text="title"></h3>
        </div>
        <div v-if="text" class="promo-element__text" v-text="text"></div>
        <div class="promo-element__actions">
            <slot name="actions"></slot>
        </div>
    </div>
  </div>
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
        text:{
            type:String
        },
    }
}
</script>

<style lang="scss" scoped>
.promo-element{
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    padding: 52px 0px 57px 50px;
    display: flex;
    align-items: flex-end;
    &__content{
        max-width: 360px;
    }
    &__heading{
        .upper-heading{
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

            // text-shadow: 2px 2px 5px rgb(0 0 0 / 35%);
            // color: #fff;
        }
    }
    &__text{
        color: $color-light;
        font-size: 16px;
        font-weight: 300;
        line-height: 28px;
        letter-spacing: 0.3px;
    }
    &__actions{
        margin-top: 62px;
    }
}
</style>