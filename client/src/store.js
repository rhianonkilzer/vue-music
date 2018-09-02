import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let musicApi = Axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlist: [],
    song: {},
    mySong: {}
  },
  mutations: {

  },

  actions: {
    getSongs({ commit, dispatch }, songId) {
      musicApi.get('/' + songId)
        .then(res => {
          commit('setSong', res.data.data)
        })
    }
  }
})
