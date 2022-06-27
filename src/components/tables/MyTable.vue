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
                        <button @click="editRow(i)">edit</button>
                        <button @click="removeRow(i)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        
        <div class="pagination">
            <button>Prev</button>

            <!-- <button v-for="item in b"></button> -->

            <button>Next</button>
        </div>
    </fieldset>
</template>

<script>
export default {
    props:['headers', 'rows'],
    methods:{
        editRow(i){
            this.$emit('editRow', this.rows[i])
        },
        printRow(row){
           let rowHtml = []
           this.headers.forEach(element => {
                rowHtml.push(row[element.type] ? row[element.type] : 'NO_DATA')
            });
            return rowHtml
        },
        removeRow(i){
            this.$emit('removeRow', this.rows[i])
        }
    }
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
        width: 100%;
        border-spacing: 0;
        border: 1px solid;
        tr{
            &:nth-child(2n){
                background: #fff;
            }
            th{
                padding: 1em;
            }
            td{
                padding: 1em;
            }
        }
    }
}
  
</style>