import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Song from './models/Song'

let musicApi = Axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlist: {},
    song: [],
  },
  mutations: {
    setSongs(state, song) {
      state.song = song
    },
    setPlaylist(state, playlist) {
      state.playlist = playlist
    }
  },
  actions: {
    getSongs({ commit, dispatch }) {
      musicApi.get('/songs')
        .then(res => {
          commit('setSongs', res.data)
        })
    },

    searchMusic({ dispatch, commit }, artist) {
      musicApi.get(`/${artist}`)
        .then(res => {
          let music = res.data.results.map(s => new Song(s))
          commit('setSongs', music)
        })
    }
  }


})
