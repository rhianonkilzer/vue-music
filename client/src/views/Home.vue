<template>
  <div class="home">
    <div class="row furry">
      <div class="col-12 search-bar">
        <form @submit.prevent="searchMusic">
          <input type="text" name="search" placeholder="Search..." v-model="artist">
          <button class="search" type="submit">Search</button>
        </form>
        <hr>
        <hr>
      </div>
      <results class="col-6 justify-content-center"></results>

      <playlist class="col-6"></playlist>

    </div>
  </div>
</template>

<script>
  import Results from "@/components/Results";
  import Playlist from "@/components/Playlist"

  export default {
    name: 'Home',
    data() {
      return {
        artist: ''
      }
    },
    computed: {
      songs() {
        this.$store.state.songs
      },
      playlist() {
        return this.$store.state.playlist
      }
    },
    methods: {
      addToPlaylist(song) {
        this.$store.dispatch('addToPlaylist')
      },
      searchMusic() {
        this.$store.dispatch('searchMusic', this.artist)
      }
    },
    components: {
      Playlist,
      Results
    }
  }
</script>

<style>
</style>