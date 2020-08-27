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
import Vue from 'vue'
export default Vue.extend({
  name: 'ChatroomImage',
  props: {
    message: {
      required: true,
      type: Object
    }
  }
})
</script>