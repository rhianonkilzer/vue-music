<template>
    <div class="results">
        <h1>Search Results</h1>
        <div v-for="song in songResults">
            <button type="button" @click="addSong(song)">
                Add Song
            </button>
            <img :src="song.albumArt" alt="albumArt" width="130" height="130">
            <p>Artist: {{song.artist}}</p>
            <p>Song Title: {{song.title}}</p>
            <p>Album: {{song.album}}</p>
            <p>Price: ${{song.price}}</p>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'results',
        data() {
            return {}
        },
        computed: {
            songResults() {
                return this.$store.state.songs
            }
        },
        methods: {
            addSong(song) {
                this.$store.dispatch("addSong", song)
            }
        },
        components: {}
    }
</script>


<style scoped>
</style>