<template>
  <div>
    <div class="book-list">
      <div class="header">
        <div class="heading">{{ heading }}</div>
        <div class="more">更多...</div>
      </div>
      <div class="book-items">
        <div class="book" v-for="book in books" @click="$emit('onBookSelect', book)">
          <router-link class="cover" tag="div" :to="{name: 'BookDetails', params: {id: book.id} }">
            <img :src="book.img_url" />
          </router-link>
          <div class="title">{{ book.title }}</div>
          <div class="authors">{{ book.authors | join }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .header {
    overflow: hidden;
  }
  .heading {
    float: left;
  }
  .more {
    float: right;
  }
  .book {
    width: 48%;
    height: 200px;
    background: #fff;
    margin: 5px 0;
  }
  .book img {
    width: 100%;
    height: 150px;
  }
  .book-items {
    overflow: hidden;
  }
  .book:nth-child(2n+1) {
    float: left;
  }
  .book:nth-child(2n) {
    float: right;
  }
</style>
<script>
  export default {
    name: 'booklist',
    props: {
      heading: String,
      books: Array
    },
    data () {
      return {}
    },
    filters: {
      join (args) {
        return args.join('，')
      }
    },
    methods: { }
  }
</script>