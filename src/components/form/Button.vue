<template>
  <div>
    <button :style="styl" @click="closeDialog">{{ name }}</button>
  </div>
</template>
<style scoped>
  button {
    border-radius: 5px;
    width: 80%;
    height: 40px;
    line-height: 40px;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
  }
</style>
<script>
  import bus from '../../assets/eventBus'

  export default {
    name: 'buttonList',
    props: {
      name: String,
      styl: Object
    },
    data () {
      return {
        quantity: 1
      }
    },
    mounted () {
      bus.$on('quantity', msg => {
        this.quantity = msg
      })
    },
    methods: {
      closeDialog () {
        this.$emit('closeDialog', [this.name, this.quantity])
      }
    }
  }
</script>