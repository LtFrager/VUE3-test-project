<template>
    <div class="dialog" v-if="show" @click="close()">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'my-dialog',
    props:{
        show:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        close(){
            this.$emit('update:show' , false)
        }
    }
}
</script>

<style lang="scss" scoped>
.dialog{
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0, .5);
    position: fixed;
    display: flex;
    &__content{
        margin: auto;
        background: #fff;
        border-radius: 12px;
        padding: 20px;
    }
}
</style>