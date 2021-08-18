<template>
  <v-container>
    <v-row no-gutters align="center" justify="center">
      <v-col/>

      <v-col>
        <v-layout column>
          <v-flex>
            <Panel title="Songs">
              <div v-for="song in songs" :key="song.title">
                {{ song.title }} -
                {{ song.artist }} -
                {{ song.album }}
              </div>
            </Panel>
          </v-flex>
        </v-layout>
      </v-col>

      <v-col/>
    </v-row>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel';
import SongService from '@/services/SongService';

export default {
  components: {
    Panel
  },

  data() {
    return {
      songs: null
    };
  },

  async mounted() {
    // Do a request to the backend for all the songs
    this.songs = await SongService.index();
  }
};
</script>

<style scoped>
.songs-card {
  font-size: 23px;
}
</style>
