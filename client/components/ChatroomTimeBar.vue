<template>
  <div class="chatroom-time-bar border--radius-lg">{{ message.time | date-month }}</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'ChatroomTimeBar',
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  filters: {
    dateMonth (d: Date): string {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const month: number = d.getMonth()
      return `${ d.getDate() } ${ monthNames[d.getMonth()] }`
    }
  }
})
</script>

<style lang="scss" scoped>
.chatroom-time-bar {
  align-self: center;
  padding: .125rem .3125rem;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  background-color: var(--v-accent-base);
  font-size: .75rem;
  text-align: center;
  font-weight: 900;
  color: var(--v-info-darken1);
}
</style>