<template>
  <div class="home">
    <div class="row furry">
      <div class="col-12">
        <form @submit.prevent="searchMusic">
          <input type="text" name="search" placeholder="Search..." v-model="artist">
          <button class="search" type="submit">Search</button>
        </form>
      </div>
      <results class="col-6"></results>
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
  .furry {
    background-image: url('../assets/furryphones.jpg');
    height: 100vh;
    width: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>