<template>
  <v-layout>
    <v-flex xs4>
      <panel
        title="Song Metadata"
        class="ml-5 mr-2"
      >
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title"
        />

        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist"
        />

        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre"
        />

        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album"
        />

        <v-text-field
          label="Album Image URL"
          required
          :rules="[required]"
          v-model="song.albumImageUrl"
        />

        <v-text-field
          label="YouTube ID"
          required
          :rules="[required]"
          v-model="song.youtubeId"
        />
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Song Structure"
             class="ml-2 mr-5"
      >
        <v-textarea
          label="Lyrics"
          multi-line
          required
          :rules="[required]"
          v-model="song.lyrics"
        />

        <v-textarea
          label="Tab"
          multi-line
          required
          :rules="[required]"
          v-model="song.tab"
        />
      </panel>

      <v-btn
        class="green lighten-1 black--text mt-5"
        dark
        @click="create"
      >
        Add Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongService';
import Panel from '@/components/Panel';

export default {
    name: 'AddSong',

    data() {
        return {
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyrics: null,
                tab: null
            },

            required: (value) => !!value || 'Required'
        };
    },

    components: {
        Panel
    },

    methods: {
        async create() {
            try {
                await SongService.post(this.song);
                await this.$router.push({ name: 'songs' });
            } catch (e) {
                console.log(e);
            }
        }
    }
};
</script>

<style scoped>

</style>
