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
    <div
      class="border-radius--md overflow--auto accent"
      :style="{ width: '290px' }"
    >
      <div class="d-flex pa-2 border--bottom border--accent-lighten-1 overflow--auto">
        <v-img
          v-for="i in 30"
          :key="`slide-${ i }`"
          class="mr-1"
          aspect-ratio="1"
          width="32"
          height="32"
          src="https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440.jpg"
        ></v-img>
      </div>
      <v-text-field
        v-model="search"
        class="mx-2 py-2 flex-grow--1"
        placeholder="Search"
        solo
        background-color="accent lighten-1"
        color="info"
        :prepend-inner-icon="mdiMagnify"
        filled
        clearable
        flat
        dense
        hide-details
      ></v-text-field>
      <div class="overflow--auto" :style="{ height: '280px' }">
        <div
          v-for="i in 5"
          :key="`sticker-set-${ i }`"
          class="px-2"
        >
          <p class="mb-1">sticker set name</p>
          <div class="sticker-list">
            <v-img
              v-for="j in 20"
              :key="`sticker-${ j }`"
              aspect-ratio="1"
              src="https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440.jpg"
            ></v-img>
          </div>
        </div>
      </div>
      <div class="d-flex justify-center align-center pa-2">
        <v-btn
          v-for="tab in tabs"
          :key="`tab-${ tab.label }`"
          class="mr-2"
          icon
          color="info darken-2"
        >
          <v-icon>{{ tab.icon }}</v-icon>
        </v-btn>
      </div>
    </div>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  mdiStickerEmoji,
  mdiMagnify,
  mdiEmoticonHappyOutline,
  mdiStickerOutline,
  mdiGif
} from '@mdi/js'
export default Vue.extend({
  name: 'ChatroomStickerMenu',
  data () {
    return {
      mdiStickerEmoji,
      mdiMagnify,
      mdiEmoticonHappyOutline,
      mdiStickerOutline,
      mdiGif,
      search: '',
      tabs: [
        {
          label: 'emoji',
          icon: mdiEmoticonHappyOutline
        },
        {
          label: 'sticker',
          icon: mdiStickerOutline
        },
        {
          label: 'gif',
          icon: mdiGif
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.sticker-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  grid-gap: 10px;
}
</style>