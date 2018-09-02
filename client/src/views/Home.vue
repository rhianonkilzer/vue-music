<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/furryphones.jpg">
    <form action="search">
      <input type="text" name="search" placeholder="Search...">
    </form>
  </div>
</template>

<script>
  import Song from "@/components/Song";
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
      searchMusic(event) {
        this.$store.dispatch('search', this.artist)
      }
    }
  }
</script>