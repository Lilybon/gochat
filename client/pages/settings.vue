<template>
  <div class="panel">
    <div class="panel__header panel__header--wrap">
      <div class="d-flex justify-between align-center">
        <v-btn
          class="text-capitalize primary--text"
          text
          nuxt
          @click="$router.go(-1)"
          depressed
        >
          <v-icon class="rotate--180" dense>{{ mdiChevronRight }}</v-icon>
          back
        </v-btn>
        <h2 class="subtitle-1 font-weight-black text-capitalize">{{ tabName }}</h2>
        <div :style="{ width: '5.9375rem' }"></div>
      </div>
    </div>
    <div ref="scroll" class="panel__main accent darken-1">
      <nuxt-child class="settings" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiChevronRight } from '@mdi/js'
import '~/styles/settings-page.scss'
export default Vue.extend({
  name: 'Settings',
  data () {
    return {
      headKey: 'settings',
      mdiChevronRight
    }
  },
  computed: {
    tabName (): string {
      return (this.$route.name || '')
        .replace(/\-/g, ' ')
        .slice(this.headKey.length + 1)
    }
  },
  watch: {
    async $route () {
      await this.$nextTick()
      this.$refs.scroll instanceof HTMLElement && (this.$refs.scroll.scrollTop = 0)
    }
  },
  created () {
    if (this.$route.name === 'settings') {
      this.$router.replace({ name: 'settings-general-settings' })
    }
  }
})
</script>