<template>
    <div>
        <h1>Это страница поста с ID = {{ $route.params.id }}</h1>
        <button @click="goBack()">go back</button> 

        <div>
            <h2>
                {{post.title}}
            </h2>
            <div>
                {{post.body}}
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                post:[]
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

</style>