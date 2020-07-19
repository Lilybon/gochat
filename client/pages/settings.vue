<template>
  <div class="panel">
    <div class="panel__header panel__header--wrap">
      <div>
        <v-btn class="text-capitalize primary--text" color="accent" :to="{ name: 'index' }">
          <v-icon dense>{{ mdiChevronLeft }}</v-icon>
          back
        </v-btn>
        <div>{{ tabName | sentence-capitalize }}</div>
        <div :style="{ width: '95px' }"></div>
      </div>
    </div>
    <div class="panel__main accent darken-1">
      <nuxt-child />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiChevronLeft } from '@mdi/js'
export default Vue.extend({
  name: 'Settings',
  data () {
    return {
      headKey: 'settings',
      mdiChevronLeft
    }
  },
  computed: {
    tabName (): string {
      return (this.$route.name || '')
        .replace(/\-/g, ' ')
        .slice(this.headKey.length + 1)
    }
  }
})
</script>