<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Song List">
        <v-btn slot="action"
               class="mr-8 green lighten-1"
               fab
               small
               absolute
               right
               middle
               light
               @click="navigateTo({name: 'add-song'})"
        >
          <v-icon>add</v-icon>
        </v-btn>

        <div v-for="song in songs" :key="song.id">
          {{ song.title }} - {{ song.artist }} - {{ song.album }}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongService';
import Panel from '@/components/Panel';

export default {
    name: 'Songs',

    data() {
        return {
            songs: null
        };
    },

    components: {
        Panel
    },

    methods: {
        navigateTo(route) {
            this.$router.push(route);
        }
    },

    async mounted() {
    // Do a request to the backend for all the songs
        this.songs = (await SongService.index()).data; // This is how Axios return data
    }
};
</script>

<style scoped>
.songs-card {
  font-size: 23px;
}
</style>
