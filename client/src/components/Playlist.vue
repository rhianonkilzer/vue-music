<template>
    <div class="playlist">
        <h1>Playlist</h1>
        <div class="song" v-for="song in playlist">
            <button type="button" @click="deleteSong(song)">
                Delete
            </button>
            <audio controls>
                <source :src="song.preview">
            </audio>
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
        name: 'playlist',
        data() {
            return {}
        },
        mounted() {
            this.$store.dispatch('getSongs')
        },
        computed: {
            playlist() {
                return this.$store.state.playlist
            }
        },
        methods: {
            deleteSong(song) {
                this.$store.dispatch('deleteSong', song)
            }
        },
        components: {

        }
    }
</script>


<style scoped>
</style>