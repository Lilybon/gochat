<template>
  <div class="panel">
    <div class="panel__header panel__header--wrap">
      <div class="d-flex">
        <v-btn
          link
          :to="{ name: 'index' }"
          nuxt
          icon
          color="primary"
        >
          <v-icon class="rotate--180" dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
        <nuxt-link class="d-flex flex-grow--1 align-center" tag="div" :to="{ name: 'chatroom-id-info' }">
          <v-avatar width="35" height="35">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
          </v-avatar>
          <div>
            <h4 class="subtitle-2 info--text">Front-end</h4>
            <p class="caption info--text text--darken-2">last seen recently</p>
          </div>
        </nuxt-link>
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
    <div ref="scrollRef" class="panel__main d-flex flex-column px-4">
      <component
        v-for="(message, index) in messages"
        :key="index"
        :is="message.type === 'time-bar' ? 'time-bar' : 'row'"
        :message="message"
        class="mb-2"
        myName="Jason"
      />
    </div>
    <div class="position--relative panel__footer panel__footer--wrap">
      <div class="position--absolute edge--right edge--top" :style="{ transform: 'translate(-50%, -150%)' }">
        <v-btn
          class="rotate--90 border--all border--accent-lighten-1"
          icon
          color="info darken-1"
          @click="scrollToBottom"
        >
          <v-icon dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </div>
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
import { defineComponent, reactive, ref, useAsync } from '@nuxtjs/composition-api'
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
export default defineComponent({
  name: 'Chatroom',
  components: {
    SearchBar,
    Setting,
    Row,
    TimeBar,
    Upload,
    StickerMenu
  },
  setup () {
    const scrollRef = ref(null)
    const message = ref('')
    const visible = reactive({
      searchBar: false
    })
    const messages = useAsync(() => getChatroomMessages())

    // TODO: fix element refs type check
    const scrollToBottom = () => {
      // scrollRef.value instanceof HTMLElement && (scrollRef.value.scrollTop = scrollRef.value.scroll.height)
    }

    return {
      mdiChevronRight,
      mdiMagnify,
      mdiSend,
      mdiMicrophoneOutline,
      message,
      messages,
      scrollRef,
      visible,
      scrollToBottom
    }
  }
})
</script>