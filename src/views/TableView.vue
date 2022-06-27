<template>
    <my-dialog v-model:show="CreateTableItemDialog">
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
            <button type="submit" @click="addDataToTable()">Save</button>
        </form>
    </my-dialog>

    <MyTable :headers="TableData.headers" :rows="TableData.rows" @editRow="editRow" @removeRow="removeRow">
        <template v-slot:table-legend>
            Table name | 
            <button @click="CreateTableItemDialog = true, this.clearForm">Add data to table</button> 
        </template>
    </MyTable>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import MyTable from "@/components/tables/MyTable.vue"
import axios from "axios"
export default {
    components:{
        MyTable
    },
    data(){
        return{
            CreateTableItemDialog: false,
            TableData: {
                headers:[
                    { type:'name', text:'User' },
                    { type:'email', text:'E-mail' },
                    { type:'body', text:'Message' },
                ],
            },
            TablePage: 1,
            TablePagesTotal: 0
        }
    },
    methods:{
        ...mapMutations({
            setId: 'tabelForm/setId',
            setName: 'tabelForm/setName',
            setEmail: 'tabelForm/setEmail',
            setBody: 'tabelForm/setBody',
        }),
        ...mapActions({
            clearForm: 'tabelForm/clearForm',
        }),
        async fetchTable(){
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
                    params:{
                        _page: 1,
                        _limit: 10,
                    }
                })
                this.TableData.rows = response.data
            } catch (error) {
                console.log(error);
            }
        },

        addDataToTable(){
            const rowData = {
                    id: null ? this.formId : Date.now(),
                    name: this.formName,
                    email: this.formEmail,
                    body: this.formBody
            }
            const rowIndex = this.TableData.rows.findIndex(x => x.id == this.formId)
            if(rowIndex !== -1){
                this.TableData.rows[rowIndex] = rowData
            } else {
                this.TableData.rows.push(rowData)
            }
            this.CreateTableItemDialog = false
        },

        removeRow(row) {
            this.TableData.rows = this.TableData.rows.filter(r => r.id !== row.id)
        },

        editRow(row){
            this.setId(row.id)
            this.setName(row.name)
            this.setEmail(row.email)
            this.setBody(row.body)
            this.CreateTableItemDialog = true
        }
    },
    mounted(){
        this.fetchTable()
    },
    computed:{
        ...mapState({
            formId: state => state.tabelForm.id,
            formName: state => state.tabelForm.name,
            formEmail: state => state.tabelForm.email,
            formBody: state => state.tabelForm.body,
        }),
    },
    watch: {
        CreateTableItemDialog(newValue, oldValue) {
            if(!newValue) return this.clearForm()
        }
    },
}
</script>

<style lang="scss" scoped>

</style>