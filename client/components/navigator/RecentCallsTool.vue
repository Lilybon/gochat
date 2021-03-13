<template>
  <div>
    <v-btn
      class="text-capitalize primary--text"
      text
      nuxt
      @click="$router.go(-1)"
      depressed
    >
      <v-icon dense>{{ mdiCogOutline }}</v-icon>
    </v-btn>
    <h2 class="subtitle-1 font-weight-black text-capitalize">recent calls</h2>
    <v-btn
      class="text-capitalize primary--text"
      text
      nuxt
      @click="() => {}"
      depressed
    >
      edit
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mdiCogOutline } from '@mdi/js'
export default defineComponent({
  name: 'RecentCallsTool',
  setup () {
    return {
      mdiCogOutline
    }
  }
})
</script>