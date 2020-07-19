<template>
  <div class="panel">
    <div class="panel__header panel__header--wrap">
      <div>
        <div>
          <v-btn :to="{ name: 'index' }" class="mr-1" icon color="primary">
            <v-icon dense>{{ mdiChevronLeft }}</v-icon>
          </v-btn>
        </div>
        <div class="mr-2">
          <v-btn class="mr-1" icon color="primary">
            <v-icon dense>{{ mdiMagnify }}</v-icon>
          </v-btn>
          <v-btn icon color="primary">
              <v-icon dense>{{ mdiDotsHorizontal }}</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="panel__main">
      <component
        class="mb-1"
        v-for="i in 30" 
        :key="i"
        :is="'ChatroomMessage'"
      ></component>
    </div>
    <div class="panel__footer panel__footer--wrap">
      <div>
        <v-btn class="mr-2" icon color="info darken-2">
          <v-icon dense color="info darken-2">{{ mdiPaperclip }}</v-icon>
        </v-btn>
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
        <v-btn class="mr-2" icon color="info darken-2">
          <v-icon dense>{{ mdiStickerEmoji }}</v-icon>
        </v-btn>
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
  mdiChevronLeft,
  mdiMagnify,
  mdiDotsHorizontal,
  mdiPaperclip,
  mdiStickerEmoji,
  mdiSend,
  mdiMicrophoneOutline
} from '@mdi/js'
const ChatroomMessage = () => import('~/components/chatroom/ChatroomMessage.vue')
export default Vue.extend({
  name: 'Chatroom',
  components: {
    ChatroomMessage
  },
  data () {
    return {
      message: '',
      mdiChevronLeft,
      mdiMagnify,
      mdiDotsHorizontal,
      mdiPaperclip,
      mdiStickerEmoji,
      mdiSend,
      mdiMicrophoneOutline
    }
  }
})
</script>