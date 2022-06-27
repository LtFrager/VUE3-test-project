<template>
    <div class="partner">
        <img :src="this.data.url" alt="partner" width="200" height="200">
        <h4>{{this.data.title}}</h4>
    </div>
</template>

<script>
    export default {
        props:['data']
    }
</script>

<style lang="scss" scoped>
.partner{
    img{
       object-fit: contain;
       aspect-ratio: 1 / 1;
       max-width: 200px;
       max-height: 200px; 
       width: 100%;
       height: 100%;
    }
    h4{
       text-align: center;
       max-width: 200px;
        
    }
}
</style>