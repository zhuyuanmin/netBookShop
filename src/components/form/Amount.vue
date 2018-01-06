<template>
  <div class="box">
    <div class="total">￥ <span>{{ total }}</span></div>
    <div class="amount" @click="open">
      <span v-text="result"></span>
      <span>∨</span>
    </div>
    <ul class="show" v-show="show">
      <li v-for="(item, index) in amounts" @click="select(index)" ref="menuItem">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
  import bus from '../../assets/eventBus'

  export default {
    name: 'amount',
    data () {
      return {
        total: 69,
        result: '1 本',
        show: false,
        amounts: ['1 本', '2 本', '3 本', '5 本', '10 本']
      }
    },
    methods: {
      open () {
        this.show = !this.show
      },
      select (index) {
        this.result = this.$refs.menuItem[index].innerText
        this.show = !this.show
        this.total = 69 * parseInt(this.$refs.menuItem[index].innerText)

        bus.$emit('quantity', parseInt(this.$refs.menuItem[index].innerText))
      }
    }
  }
</script>
<style scoped>
  li {
    list-style: none;
  }
  .box {
    height: 40px;
    margin-top: 60px;
    position: relative;
  }
  .box .total, .box .amount {
    width: 50%;
    height: 40px;
    line-height: 40px;
    float: left;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
  .box .show {
    position: absolute;
    width: 50%;
    left: 50%;
    top: 40px;
    padding: 0;
    margin: 0;
    background: #fff;
    border: 1px solid gray;
    box-sizing: border-box;
  }
  .box .show li {
    height: 26px;
    line-height: 26px;
  }
  .box .show li:last-child {
    border-bottom: none;
  }
</style>