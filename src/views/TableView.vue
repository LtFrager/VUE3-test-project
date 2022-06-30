<template>
    <ContentPromoElement
        class="page-promo"
        :bgImage="'https://ld-wp.template-help.com/woocommerce_prod-20719/v2/wp-content/uploads/2018/11/bg2.png'" 
        :title="'Table'">
    </ContentPromoElement>

    <div class="container">
        <MyTable :headers="tableHeaders" 
            :rows="tableRows"
            :pagination="{
                page:tablePage,
                total:tableTotalPages
            }"
            @editRow="editRow" 
            @removeRow="removeRow"
        >
        </MyTable>
    </div>
    <my-dialog v-model:show="createTableItemDialog">
        <form @submit.prevent>
            <my-input placeholder="Name" 
                :model-value="formName"
                @update:model-value="setName"
            />
             <my-input placeholder="Email" 
                :model-value="formEmail"
                @update:model-value="setEmail"
            />
             <my-input placeholder="Body" 
                :model-value="formBody"
                @update:model-value="setBody"
            />
            <my-button type="submit" 
                @click="addUpdateRow()"
            >
                Save
            </my-button>
        </form>
    </my-dialog>
</template>

<script>
import ContentPromoElement from '@/components/ContentPromoElement.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import MyTable from "@/components/tables/MyTable.vue"
import axios from "axios"
export default {
    components:{
        MyTable,
        ContentPromoElement
    },
    data(){
        return{
            createTableItemDialog: false,
            TableHeaders:[
                { type:'id', text:'id' },
                { type:'name', text:'User' },
                { type:'email', text:'E-mail' },
                { type:'body', text:'Message' }
            ],
        }
    },
    methods:{
        ...mapMutations({
            setId: 'tabelForm/setId',
            setName: 'tabelForm/setName',
            setEmail: 'tabelForm/setEmail',
            setBody: 'tabelForm/setBody',

            setTableHeaders:'tabel/setTableHeaders',
            setTablePerpage:'tabel/setTablePerpage'
        }),
        ...mapActions({
            clearForm: 'tabelForm/clearForm',
            fetchTable: 'tabel/fetchTable',
            addUpdateRow: 'tabel/addUpdateRow',
            removeRow: 'tabel/removeRow'
        }),

        addUpdateRow(){
            this.setTableHeaders({
                id: (this.formId !== null) ? this.formId: Date.now(),
                name: this.formName,
                email: this.formEmail,
                body: this.formBody
            })
            this.createTableItemDialog = false
        },

        editRow(row){
            this.setId(row.id)
            this.setName(row.name)
            this.setEmail(row.email)
            this.setBody(row.body)
            this.createTableItemDialog = true
        }
    },
    mounted(){
        this.fetchTable()
        this.setTableHeaders(this.TableHeaders)
    },
    computed:{
        ...mapState({
            formId: state => state.tabelForm.id,
            formName: state => state.tabelForm.name,
            formEmail: state => state.tabelForm.email,
            formBody: state => state.tabelForm.body,

            tableHeaders: state => state.tabel.headers,
            tableRows: state => state.tabel.rows,
            tablePage: state => state.tabel.page,
            tableTotalPages: state => state.tabel.totalPages
        }),
    },
    // watch: {
    //     createTableItemDialog(newValue, oldValue) {
    //         if(!newValue) return this.clearForm()
    //     }
    // },
}
</script>

<style lang="scss" scoped>
.container{
}
</style>