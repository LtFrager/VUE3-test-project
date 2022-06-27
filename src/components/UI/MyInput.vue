<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" soped>
input{
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
