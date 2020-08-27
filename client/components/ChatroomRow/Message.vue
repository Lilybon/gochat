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
export default {
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
}
</script>

<style lang="scss">
.chatroom-message {
  padding: .125rem .75rem;
  max-width: map-get($main-width, "sm-down");
  background-color: var(--v-accent-lighten1);
  font-size: .75rem;
  &--from-me {
    background-color: var(--v-primary-darken2);
  }
  &__name {
    font-weight: 600;
    color: var(--v-primary-darken1)
  }
}
</style>