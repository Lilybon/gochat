<template>
  <div class="chatroom-message">
    <div class="chatroom-message__name">Jason</div>
    <div class="chatroom-message__content">這是一段測試訊息 這是一段測試訊息 這是一段測試訊息 這是一段測試訊息 這是一段測試訊息 這是一段測試訊息 這是一段測試訊息</div>
    <span class="chatroom-message__time">2:46 PM</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ChatroomMessage'
})
</script>

<style lang="scss">
.chatroom-message {
  padding: 2px 12px;
  max-width: map-get($main-width, "sm-down");
  border-radius: 10px;
  background-color: var(--v-accent-lighten1);
  font-size: 12px;
  &__name {
    font-weight: 600;
    color: var(--v-primary-darken1)
  }
  &__content {
    
    overflow-wrap: break-word;
  }
  &__time {
    color: var(--v-info-darken1)
  }
}
</style>