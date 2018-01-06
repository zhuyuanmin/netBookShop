<template>
  <div>
    <div class="swiper-container" ref="slider">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->            
        <div class="swiper-slide" v-for="slide in slides" @click="$emit('onBookSelect', slide)">
          <div>
            <img :src="slide.img_url" />
          </div>
        </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination" ref="pagination"></div>
    </div>
    <!-- 快讯 -->
    <div class="announcement">
      <label>快讯</label>
      <span>{{ announcement }}</span>
    </div>
  </div>
</template>
<style scoped>
  .swiper-container {
    width: 100%;
    height: 200px;
    margin: 20px auto;
    margin-bottom: 10px;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide img {
    height: 200px;
  }
  .announcement {
    text-align: left;
    border-bottom: 2px solid #ccc;
    padding-bottom: 5px;
  }
  .announcement label {
    background: #000;
    color: #fff;
    padding: 2px;
  }
</style>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  
  export default {
    name: 'slider',
    props: {
      announcement: String,
      slides: Array
    },
    data () {
      return { }
    },
    updated () {
      new Swiper(this.$refs.slider, {
        pagination: {
          el: this.$refs.pagination
        },
        loop: false,
        paginationClickable: true,
        spaceBetween: 20,
        slidesPerView: 'auto',
        centeredSlides: false,
        autoplay: {
          delay: 2500
        },
        autoplayDisableOnInteraction: false
      })
    }
  }
</script>