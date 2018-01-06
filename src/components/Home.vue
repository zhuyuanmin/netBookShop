<template>
  <div>
    <div class="section">
      <!-- 热门推荐 -->
      <slider :slides="slides" :announcement="announcement" @onBookSelect="preview($event)"></slider>
    </div>
    <div class="section">
      <div>
        <!-- 新书上架 -->
        <booklist :books="latestUpdated" heading="最新更新" @onBookSelect="preview($event)"></booklist>
      </div>
    </div>
    <div class="section">
      <div>
        <!-- 编辑推荐 -->
        <booklist :books="recommended" heading="编辑推荐" @onBookSelect="preview($event)"></booklist>
      </div>
    </div>

    <modal-dialog ref="dialog">
      <div slot="heading">
        <div class="dismiss" @click="$refs.dialog.close()">
          <span>×</span>
        </div>
      </div>
      <div class="book_info">
        <img :src="selected.img_url">
        <div class="info">
          <p>作者：{{ selected.authors }}</p>
          <p>页数：{{ selected.pages }}</p>
          <p>书号：{{ selected.serial_number }}</p>
          <p>出版日期：{{ selected.online_time }}</p>
          <div>更多 ></div>
        </div>
      </div>
      <div class="title">{{ selected.title }}</div>
      <div class="describe">{{ selected.describe }}</div>

      <amount></amount>
      <button-list name="立即购买" :styl="style" class="btn" @closeDialog="closeDialog"></button-list>
      <button-list name="加入购物车" :styl="style2" @closeDialog="closeDialog"></button-list>
    </modal-dialog>
  </div>
</template>
<style scoped>
  .dismiss {
    height: 40px;
    text-align: right;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  .dismiss span {
    margin-right: 20px;
    font-size: 35px;
  }
  .book_info {
    display: flex;
    padding: 10px;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .book_info img {
    width: 100px;
    height: 120px;
    float: left;
  }
  .book_info .info {
    flex: 1;
    padding-left: 10px;
    float: right;
  }
  .book_info .info p {
    margin: 0;
    text-align: left;
  }
  .book_info .info div {
    text-align: right;
    margin-top: 10px;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
  }
  .describe {
    padding: 0 10px;
    font-size: 14px;
    text-align: left;
    line-height: 22px;
  }
  .btn {
    margin: 30px 0 10px 0;
  }
</style>
<script>
  import Slider from './home/Slider.vue'
  import Booklist from './home/Booklist.vue'
  import ModalDialog from './dialog.vue'
  import Amount from './form/Amount.vue'
  import buttonList from './form/Button.vue'

  import bus from '../assets/eventBus'

  export default {
    name: 'home',
    data () {
      return {
        announcement: '',
        slides: [],
        latestUpdated: [],
        recommended: [],
        selected: {},
        style: {
          color: '#fff',
          backgroundColor: 'red'
        },
        style2: {
          color: '#000',
          backgroundColor: 'white',
          border: '1px solid #ccc'
        }
      }
    },
    components: {
      Slider,
      Booklist,
      ModalDialog,
      Amount,
      buttonList
    },
    filters: {
      join (args) {
        return args.join('，')
      }
    },
    methods: {
      preview (book) {
        // alert('显示图书详情\n' + JSON.stringify(book))
        this.selected = book
        this.$refs.dialog.open()
      },
      closeDialog (msg) {
        this.$refs.dialog.close()
        if (msg[0] === '加入购物车') {
          bus.$emit('sendMsg', msg[1])
        }
      }
    },
    created () {
      this.$http.get('./static/data.json').then(res => {
        // this.announcement = res.body.announcement
        // this.slides = res.body.slides
        // this.latestUpdated = res.body.latestUpdated
        // this.recommended = res.body.recommended

        // for (let key in res.body) {
        //   this[key] = res.body[key]
        // }

        // forEach只用于数组遍历，可以如下变形
        Object.keys(res.body).forEach(key => {
          this[key] = res.body[key]
        })
      }, error => {
        console.log(`获取数据${error.status}：${error.statusText}`)
      })
    }
  }
</script>