<template>
  <div class="panel">
    <div class="panel__header panel__header--wrap">
      <div class="d-flex justify-between align-center">
        <div class="d-flex align-center">
          <v-btn
            link
            :to="{ name: 'index' }"
            nuxt
            icon
            color="primary"
          >
            <v-icon class="rotate--180" dense>{{ mdiChevronRight }}</v-icon>
          </v-btn>
          <div class="d-flex align-center">
             <v-avatar width="35" height="35">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-avatar>
            <div>
              <h4 class="subtitle-2 info--text">Front-end</h4>
              <p class="caption info--text text--darken-2">last seen recently</p>
            </div>
          </div>
        </div>
        <div class="mr-2">
          <v-btn class="mr-1" icon color="primary" @click="visible.searchBar = !visible.searchBar">
            <v-icon dense>{{ mdiMagnify }}</v-icon>
          </v-btn>
          <setting />
        </div>
      </div>
      <search-bar
        v-show="visible.searchBar"
        :visible.sync="visible.searchBar"
      />
    </div>
    <div class="panel__main d-flex flex-column px-4">
      <component
        v-for="(message, index) in messageList"
        :key="index"
        :is="message.type === 'time-bar' ? 'time-bar' : 'row'"
        :message="message"
        class="mb-2"
        myName="Jason"
      />
    </div>
    <div class="panel__footer panel__footer--wrap">
      <div>
        <upload />
        <v-textarea
          v-model="message"
          background-color="transparent"
          auto-grow
          placeholder="Write a message..."
          solo
          flat
          dense
          rows="1"
          row-height="16"
          hide-details
        ></v-textarea>
        <sticker-menu />
        <v-btn class="mr-2" icon :color="message.length ? 'primary' : 'info darken-2'">
          <v-icon dense>{{ message.length ? mdiSend : mdiMicrophoneOutline }}</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  mdiChevronRight,
  mdiMagnify,
  mdiSend,
  mdiMicrophoneOutline
} from '@mdi/js'
import { getChatroomMessages } from '~/mocks'
import SearchBar from '~/components/ChatroomSearchBar.vue'
import Setting from '~/components/ChatroomSetting.vue'
import Row from '~/components/ChatroomRow/index.vue'
import TimeBar from '~/components/ChatroomTimeBar.vue'
import Upload from '~/components/ChatroomUpload.vue'
import StickerMenu from '~/components/ChatroomStickerMenu.vue'
export default Vue.extend({
  name: 'Chatroom',
  components: {
    SearchBar,
    Setting,
    Row,
    TimeBar,
    Upload,
    StickerMenu
  },
  data () {
    return {
      mdiChevronRight,
      mdiMagnify,
      mdiSend,
      mdiMicrophoneOutline,
      message: '',
      messageList: [],
      visible: {
        searchBar: false
      }
    }
  },
  async asyncData () {
    const messageList = await getChatroomMessages()
    return {
      messageList
    }
  }
})
</script>