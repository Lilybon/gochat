<template>
  <div class="panel">
    <div class="panel__header panel__header--wrap">
      <div>
        <v-btn
          class="text-capitalize primary--text"
          text
          nuxt
          @click="$router.go(-1)"
          depressed
        >
          <v-icon dense>{{ mdiChevronLeft }}</v-icon>
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

<style lang="scss">
.settings {
  margin: 0 auto;
  padding: 1.875rem 1.25rem;
  width: 37.5rem;
  @include xs-only {
    width: 100%;
  }
  & > div:not(:last-child) {
    margin-bottom: 1.5625rem;
  }
}
</style>