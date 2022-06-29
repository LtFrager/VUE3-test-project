<template>
    <ContentPromoElement
        class="page-promo"
        :bgImage="'https://ld-wp.template-help.com/woocommerce_prod-20719/v2/wp-content/uploads/2018/11/bg2.png'" 
        :title="'Partners'">
            <template v-slot:upper-heading>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci expedita iste voluptatem ipsam suscipit exercitationem?</span>
            </template>
    </ContentPromoElement>

    <main class="partners-grid container">
        <PartnersItem :data="item" v-for="item in partners" :key="item.id" />
    </main>
</template>

<script>
import ContentPromoElement from '@/components/ContentPromoElement.vue'
import PartnersItem from '@/components/partners/PartnersItem.vue'
import axios from 'axios'
export default {
    components:{
        PartnersItem,
        ContentPromoElement
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
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    justify-content: space-around;
    gap: 20px;
}
</style>