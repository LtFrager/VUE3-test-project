<template>
    <fieldset>
        <legend>
            <slot name="table-legend"></slot>
        </legend>

        <table>
            <thead>
                <tr>
                    <th v-for="item in headers">{{item.text}}</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row,i) in rows" :key="i">
                    <td v-for="item in printRow(row)">{{item}}</td>
                    <td>
                        <div class="row-actions">
                            <my-button class="icon-button" @click="editRow(i)">
                                <icon :name="'edit'"></icon>
                            </my-button>
                            <my-button class="icon-button" @click="removeRow(i)">
                                <icon :name="'delete'"></icon>
                            </my-button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        {{}}

        <Pagination @newPage="newPage" :page="pagination.page" :total="pagination.total" />
    </fieldset>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import Pagination from '../Pagination.vue';
export default {
    components:{
        Pagination
    },
    props:{
        headers:{
            type:Array,
            required:true,
        },
        rows:{
            type:Array,
            required:true,
        },
        pagination:{
            type:Object
        }
    },
    methods: {
        ...mapMutations({
            setTablePage:'tabel/setPage',
        }),
        ...mapActions({
            fetchTable: 'tabel/fetchTable',
        }),
        newPage(page){
            this.setTablePage(page)
            this.fetchTable()
            console.log(page);
        },
        editRow(i) {
            this.$emit("editRow", this.rows[i]);
        },
        printRow(row) {
            let rowHtml = [];
            this.headers.forEach(element => {
                rowHtml.push(row[element.type] ? row[element.type] : "NO_DATA");
            });
            return rowHtml;
        },
        removeRow(i) {
            this.$emit("removeRow", this.rows[i]);
        }
    },
}
</script>

<style lang="scss" scoped>
fieldset{
    padding: 1em;
    legend{
        border: 1px solid;
        padding: 0.5em;
    }
    table{
        thead{
            background-color: #1f2225;
            color: #fff;
        }
        width: 100%;
        border-spacing: 0;
        border: 1px solid;
        tr{
            &:nth-child(2n){
                background: #ebebeb;
            }
            th{
                padding: 1em;
            }
            td{
                padding: 1em;
                .row-actions{
                display: flex;
                gap: 10px;
                }
            }
        }
    }
}
  
</style>