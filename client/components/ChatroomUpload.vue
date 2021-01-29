<template>
  <v-menu
    offset-y
    top
    :nudge-top="15"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn 
        class="mr-2"
        icon
        color="info darken-2"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon dense color="info darken-2">{{ mdiPaperclip }}</v-icon>
      </v-btn>
    </template>
    <v-list dense class="accent">
      <v-list-item
        v-for="item in uploadList"
        :key="item.label"
        @click="item.cb"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon" color="primary"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.label"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  mdiPaperclip,
  mdiImageOutline,
  mdiCameraOutline,
  mdiPollBoxOutline,
  mdiFileOutline,
  mdiMapMarkerOutline,
} from '@mdi/js'
export default Vue.extend({
  name: 'ChatroomUpload',
  data () {
    return {
      mdiPaperclip,
      uploadList: [
        {
          icon: mdiImageOutline,
          label: 'photo or video',
          cb: () => {}
        },
        {
          icon: mdiCameraOutline,
          label: 'camera',
          cb: () => {}
        },
        {
          icon: mdiPollBoxOutline,
          label: 'poll',
          cb: () => {}
        },
        {
          icon: mdiFileOutline,
          label: 'file',
          cb: () => {}
        },
        {
          icon: mdiMapMarkerOutline,
          label: 'location',
          cb: () => {}
        }
      ]
    }
  }
})
</script>