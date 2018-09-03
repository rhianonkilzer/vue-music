<template>
    <div class="playlist">
        <div v-for="song in playlist">
            <p>{{song.album}}</p>
            <button type="button" @click="deleteSong(song)">
                Delete
            </button>
            <audio controls>
                <source :src="song.preview">
            </audio>
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