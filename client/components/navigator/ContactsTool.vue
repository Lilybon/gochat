<template>
  <div>
    <v-text-field
      id="contact-search"
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
    <v-btn class="ml-3" icon color="primary">
      <v-icon dense>{{ mdiPencil }}</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  mdiMagnify,
  mdiPencil
} from '@mdi/js'
export default Vue.extend({
  name: 'ContactsTool',
  data () {
    return {
      search: '',
      mdiMagnify,
      mdiPencil
    }
  }
})
</script>