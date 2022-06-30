<template>
     <div class="pagination">
        <my-button :value="1" 
            v-show="page > 1" 
            class="icon-button" 
            @click="goToPage"
        >
            First
        </my-button>
        <my-button v-show="page > 1" 
            class="icon-button" 
            @click="prevPage"
        >
            Prev
        </my-button>

        <my-button v-show="item < page + 4 && item > page - 4" class="icon-button" 
            :value="item" 
            v-for="item in total" 
            :class="{ active: (page == item) }" 
            @click="goToPage"
        >
            {{item}}
        </my-button>

        <my-button v-show="page < total" 
            class="icon-button" 
            @click="nextPage"
        >
            Next
        </my-button>
         <my-button :value="total" 
            v-show="page < total"  
            class="icon-button" 
            @click="goToPage"
        >
            Last
        </my-button>
    </div>
</template>

<script>
export default {
    props:{
        page:{
            type:Number,
            required:true
        },
        total:{
            type:Number,
            required:true
        }
    },
    methods:{
        goToPage(event) {
            this.$emit('newPage', +event.target.value)
        },
        nextPage(){
            this.$emit('newPage', this.page + 1)
        },
        prevPage(){
            this.$emit('newPage', this.page - 1)
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination{
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 20px;
}
.icon-button{
    background: #fff;
    border: 2px solid $main-color;
    color: $main-color;
    min-width: 40px;
    padding: 4px;
    min-height: 40px;
    justify-content: center;
    display: flex;
    align-items: center;
    &:hover{
        color: #ffffff;
        background-color: $main-color;
    }
}
.active{
    color: #fff;
    background: $main-color;
}
</style>