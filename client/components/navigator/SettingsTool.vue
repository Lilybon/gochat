<template>
  <div>
    <v-text-field
      id="settings-search"
      v-model="search"
      placeholder="Search"
      solo
      background-color="accent lighten-1"
      color="info"
      :prepend-inner-icon="mdiMagnify"
      filled
      clearable
      flat
      dense
      hide-details
    ></v-text-field>
    <v-btn
      class="ml-3 text-capitalize primary--text"
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
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { mdiMagnify } from '@mdi/js'
export default defineComponent({
  name: 'SettingsTool',
  setup () {
    const search = ref('')

    return {
      mdiMagnify,
      search
    }
  }
})
</script>