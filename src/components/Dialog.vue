<template>
  <div class="dialog-wrapper" :class="{'open': is_open}">
    <div class="overlay" @click="close"></div>
    <div class="dialog">
      <!-- 头部标题 -->
      <div class="heading">
        <slot name="heading"></slot>
      </div>
      <!-- 内容区域 -->
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
  .dialog-wrapper {
    height: 100%;
    display: none;
  }
  .dialog {
    position: fixed;
    top: 24px;
    left: 24px;
    right: 24px;
    bottom: 24px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    z-index: 10;
  }
  .overlay {
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .dialog-wrapper.open {
    display: block;
  }
</style>
<script>
  export default {
    name: 'modalDialog',
    data () {
      return {
        is_open: false
      }
    },
    methods: {
      open () {
        // if (!this.is_open) {
        //   this.$emit('dialogOpen')
        // }
        this.is_open = true
      },
      close () {
        // if (this.is_open) {
        //   this.$emit('dialogClose')
        // }
        this.is_open = false
      }
    }
  }
</script>