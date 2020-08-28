<template>
  <div class="panel">
    <div class="panel__header panel__header--wrap">
      <div>
        <div>
          <v-btn
            @click="$router.go(-1)"
            icon
            color="primary"
          >
            <v-icon class="rotate--180" dense>{{ mdiChevronRight }}</v-icon>
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
    <div class="panel__main d-flex flex-column px-4">
      <component
        v-for="(message, index) in messageList"
        :key="index"
        :is="message.type === 'time-bar' ? 'time-bar' : 'chatroom-row'"
        :message="message"
        class="mb-2"
        myName="Jason"
      />
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
  mdiChevronRight,
  mdiMagnify,
  mdiDotsHorizontal,
  mdiPaperclip,
  mdiStickerEmoji,
  mdiSend,
  mdiMicrophoneOutline
} from '@mdi/js'
import { getChatroomMessages } from '~/mocks'
import ChatroomRow from '~/components/ChatroomRow/index.vue'
import TimeBar from '~/components/ChatroomTimeBar.vue'
export default Vue.extend({
  name: 'Chatroom',
  components: {
    ChatroomRow,
    TimeBar
  },
  data () {
    return {
      message: '',
      messageList: [],
      mdiChevronRight,
      mdiMagnify,
      mdiDotsHorizontal,
      mdiPaperclip,
      mdiStickerEmoji,
      mdiSend,
      mdiMicrophoneOutline
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