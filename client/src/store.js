import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Song from './models/song.js'

let musicApi = Axios.create({
  baseURL: 'https://itunes.apple.com/',
  timeout: 3000
})

let playlistApi = Axios.create({
  baseURL: '//localhost:3000/api',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlist: [],
    songs: [],
  },
  mutations: {
    setSongs(state, songs) {
      state.songs = songs
    },
    setPlaylist(state, playlist) {
      state.playlist = playlist
    }
  },
  actions: {
    getSongs({ commit, dispatch }) {
      playlistApi.get('/songs')
        .then(res => {
          commit('setPlaylist', res.data)
        })
    },

    searchMusic({ dispatch, commit }, artist) {
      musicApi.get(`search?term=${artist}`)
        .then(res => {
          var songList = res.data.results.map(s => new Song(s))
          commit('setSongs', songList)
        })
    },
    addSong({ dispatch, commit }, song) {
      playlistApi.post('/songs', song)
        .then(res => {
          console.log("added song ", res)
          dispatch('getSongs')
        })
    },
    deleteSong({ dispatch, commit }, song) {
      playlistApi.delete('/songs/' + song._id)
        .then(res => {
          console.log('deleted', res)
          dispatch('getSongs')
        })
    }
  }


})
