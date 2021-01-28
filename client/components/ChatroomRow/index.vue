<template>
  <div :class="['chatroom-row', {'chatroom-row--from-me': fromMe }]">
    <v-avatar v-if="!fromMe" width="35" height="35">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
    </v-avatar>
    <component
      :is="renderComponent"
      :message="message"
      :fromMe="fromMe"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
const ChatroomMessage = () => import('~/components/ChatroomRow/Message.vue')
const ChatroomImage = () => import('~/components/ChatroomRow/Image.vue')
const ChatroomSticker = () => import('~/components/ChatroomRow/Sticker.vue')

interface Message {
  name: string,
  type: string,
  content?: string,
  imageUrl?: string,
  time: Date
}

export default Vue.extend({
  name: 'ChatroomRow',
  components: {
    ChatroomMessage,
    ChatroomImage,
    ChatroomSticker
  },
  props: {
    message: {
      type: Object,
      required: true
    } as PropOptions<Message>,
    myName: {
      type: String,
      required: true
    }
  },
  computed: {
    renderComponent (): string {
      const prefix = 'chatroom'
      return prefix + '-' + this.message.type
    },
    fromMe (): boolean {
      return this.myName === this.message.name
    }
  }
})
</script>

<style lang="scss" scoped>
.chatroom-row {
  align-self: flex-start;
  display: flex;
  align-items: flex-end;
  &--from-me {
    align-self: flex-end;
  }
}
</style>