<template>
  <div :class="['chatroom-message border--radius-lg', { 'chatroom-message--from-me': fromMe }]">
    <div class="chatroom-message__name">{{ message.name }}</div>
    <p>
      {{ message.content }}
      <span class="info--text text--darken-1">{{ '10:23 AM' }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'ChatroomMessage',
  props: {
    message: {
      type: Object,
      required: true
    },
    fromMe: {
      type: Boolean,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.chatroom-message {
  padding: .125rem .75rem;
  max-width: calc(#{map-get($main-width, "sm-down")} - 6rem);
  background-color: var(--v-accent-lighten1);
  box-sizing: border-box;
  font-size: .75rem;
  word-break: break-all;
  &--from-me {
    background-color: var(--v-primary-darken2);
  }
  &__name {
    font-weight: 600;
    color: var(--v-primary-darken1)
  }
}
</style>