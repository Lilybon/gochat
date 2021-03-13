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
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { Message } from '~/mocks/types'
const ChatroomMessage = () => import('~/components/ChatroomRow/Message.vue')
const ChatroomImage = () => import('~/components/ChatroomRow/Image.vue')
const ChatroomSticker = () => import('~/components/ChatroomRow/Sticker.vue')

export default defineComponent({
  name: 'ChatroomRow',
  components: {
    ChatroomMessage,
    ChatroomImage,
    ChatroomSticker
  },
  props: {
    message: {
      type: Object as () => Message,
      required: true
    },
    myName: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const renderComponent = computed(() => {
      const prefix = 'chatroom'
      return prefix + '-' + props.message.type
    })
    const fromMe = computed((): boolean => props.myName === props.message.name)

    return {
      renderComponent,
      fromMe
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