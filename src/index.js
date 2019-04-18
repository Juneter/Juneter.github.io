import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

import router from './route.js'
import app from './app.vue'
import {
  TabItem,
  Swipe,
  SwipeItem
} from 'mint-ui'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.component(TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

let store = new Vuex.Store({
  state: {
    audio: {
      index: 0,
      id: '',
      name: '暂无播放音乐',
      singer: '',
      pic: '../src/images/defaultPIC.png',
      src: ''
    },
    playing: false,
    index: 0,
    musicList: [{
      index: '',
      id: '',
      name: '',
      singer: '',
      pic: '../src/images/defaultPIC.png',
      src: ''
    }]
  },
  mutations: {
    Playing: state => {
      state.playing = true
    },
    pause: state => {
      state.playing = false
    },
    getSong: (state, music) => {
      state.audio = music
    },
    prevPlay: state => {
      state.index = state.audio.index
      state.audio = state.musicList[state.audio.index - 1]
      if (state.index < 1) {
        state.audio = state.musicList[state.musicList.length - 1]
      };
    },

    nextPlay: state => {
      state.index = state.audio.index + 1
      state.audio = state.musicList[state.audio.index + 1]
      if (state.index === state.musicList.length) {
        state.audio = state.musicList[0]
      };
    }
  },
  actions: {
    getMusicList (context) {
      axios.get('https://api.itooi.cn/music/netease/songList?key=579621905&id=2481538169&limit=10&offset=0').then(response => {
        if (response.data.code === 200) {
          context.state.musicList = response.data.data.songs
          for (let i = 0; i < context.state.musicList.length; i++) {
            context.state.musicList[i].src = `https://api.itooi.cn/music/netease/url?key=579621905&id=${context.state.musicList[i].id}&br=999000`
            context.state.musicList[i].index = i
          }
        }
      })
    }
  }
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  data: {
  },
  render: c => c(app),
  router,
  store
})
