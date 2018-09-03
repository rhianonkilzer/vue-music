<template>
    <div class="results">
        <div v-for="song in songResults">
            <p>{{song.album}}</p>
            <button type="button" @click="addSong(song)">
                Add Song
            </button>
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