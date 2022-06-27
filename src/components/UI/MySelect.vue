<template>
    <select v-model="modelValue" @change="changeOptions">
        <option disabled value="">Select sort option</option>
        <option v-if="modelValue !== ''" value="">Clear</option>
        <option v-for="option in options" 
            :key="option.value" 
            :value="option.value"
            >{{option.name}}</option>
    </select>
</template>

<script>
    export default {
        name:'my-select',
        props:{
            modelValue:{
                type: String,

            },
            options:{
                type: Array,
                default: () => []
            }
        },
        methods:{
            changeOptions(event){
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
select{
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
    padding: 8px 12px;
    border: 1px solid #ebeced;
    background-color: #fff;
    border-radius: 4px;
    &:focus{
        outline: none;
        box-shadow: 0 5px 32px rgb(103 122 141 / 17%);
    }
}
</style>