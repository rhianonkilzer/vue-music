<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/furryphones.jpg">
    <form action="search">
      <input type="text" name="search" placeholder="Search...">
    </form>
  </div>
</template>

<script>
  import MySong from "@/components/MySong";
  import Song from "@/components/Song";
  import Home from '@/views/Home'

  export default {
    name: 'Home',
    data() {
      return {
        mySong: {},
        song: {},
        playlist: []
      }
    },
    components: {
      Home
    }
  }
</script>