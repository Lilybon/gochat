<template>
  <v-menu
    offset-y
    top
    left
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
        <v-icon dense>{{ mdiStickerEmoji }}</v-icon>
      </v-btn>
    </template>
    <div>
      EmojiMenu
    </div>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiStickerEmoji } from '@mdi/js'
export default Vue.extend({
  name: 'ChatroomStickerMenu',
  data () {
    return {
      mdiStickerEmoji
    }
  }
})
</script>

<style>

</style>