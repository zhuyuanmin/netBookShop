<template>
  <div>
    <div class="tabs">
      <ul>
        <router-link :to="{name: 'Home'}" tag="li" exact>
          <div>首页</div>
        </router-link>
        <router-link :to="{name: 'Category'}" tag="li">
          <div>分类</div>
        </router-link>
        <router-link :to="{name: 'Cart'}" tag="li" >
          <div class="cart"><span v-if="show" v-text="showCount"></span>购物车</div>
        </router-link>
        <router-link :to="{name: 'Me'}" tag="li">
          <div>我</div>
        </router-link>
      </ul>
    </div>
    <div class="content">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<style>
  .tabs li {
    list-style: none;
    float: left;
    width: 25%;
    height: 50px;
    line-height: 50px;
  }
  .tabs {
    position: fixed;
    bottom: -1px;
    left: 0;
    width: 100%;
    background: #ccc;
  }
  .tabs ul {
    width: 100%;
    padding: 0;
    margin: 0;
    border-radius: 5px; 
    overflow: hidden;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave {
    transform: translateX(430px);
    opacity: 0;
  }
  .active {
    color: #fff;
    font-weight: bold;
    background-color: blue;
  }
  .cart {
    position: relative;
  }
  .cart span {
    position: absolute;
    display: block;
    font-size: 14px;
    width: 20px;
    height: 20px;
    background: red;
    color: #fff;
    line-height: 20px;
    border-radius: 50%;
    top: 0;
    right: 10px;
    text-align: center;
  }
</style>
<script>
  import bus from '../assets/eventBus'

  export default {
    name: 'mainComponent',
    data () {
      return {
        show: false,
        showCount: ''
      }
    },
    mounted () {
      bus.$on('sendMsg', msg => {
        this.show = true
        this.showCount = msg
      })
    }
  }
</script>