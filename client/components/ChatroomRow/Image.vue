<template>
  <v-img
    class="border--radius-lg"
    max-width="200"
    max-height="200"
    :src="message.imageUrl"
  >
  </v-img>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'ChatroomImage',
  props: {
    message: {
      required: true,
      type: Object
    }
  }
})
</script>