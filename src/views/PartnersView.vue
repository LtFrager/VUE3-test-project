<template>
    <div>
        <h1>Partners</h1>

        <div class="partners-grid">
            <PartnersItem :data="item" v-for="item in partners" :key="item.id" />
        </div>
    </div>
</template>

<script>
import PartnersItem from '@/components/partners/PartnersItem.vue'
import axios from 'axios'
export default {
    components:{
        PartnersItem
    },
    data(){
        return{
            partners:[]
        }
    },
    methods:{
        async getPartners(){
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
                    params:{
                        _page: 1,
                        _limit: 12
                    } 
                })
                this.partners = response.data
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted(){
        this.getPartners()  
    }
}
</script>

<style lang="scss" scoped>
.partners-grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    justify-content: space-around;
    gap: 20px;
}
</style>