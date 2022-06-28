<template>
    <router-link v-if="link" :to="link">
        <slot></slot>
    </router-link>
     <button v-else>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button',
        props: ['link']
    }
</script>

<style lang="scss" scoped>
.icon-button{
    padding: 11px;
    margin-left: 10px;
    font-size: 13px;
}
button, a{
    font-style: normal;
    font-weight: 900;
    font-size: 11px;
    line-height: 1;
    font-family: Roboto, sans-serif;
    letter-spacing: 1px;
    color: #ffffff;
    background-color: $main-color;
    display: inline-block;
    max-width: 100%;
    padding: 16px 34px;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
    text-overflow: ellipsis;
    text-decoration: none;
    border: none;
    border-radius: 4px;
    box-shadow: none;
    transition: all .5s;
    &:hover{
        color: #ffffff;
        background-color: $secon-color;
        box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 25%);
    }
}
</style>
