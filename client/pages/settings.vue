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
    <div ref="scrollRef" class="panel__main accent darken-1">
      <nuxt-child class="settings" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref, useRoute, useRouter, watch } from '@nuxtjs/composition-api';
import { mdiChevronRight } from '@mdi/js'
import '~/styles/settings-page.scss'
export default defineComponent({
  name: 'Settings',
  setup () {
    const headKey = 'settings'
    const router = useRouter()
    const route = useRoute()
    const scrollRef = ref(null)

    const tabName = computed(() =>
      (route.value.name || '')
        .replace(/\-/g, ' ')
        .slice(headKey.length + 1)
    )

    // TODO: fix element refs type check
    watch(route, async () => {
      await nextTick()
      // scrollRef.value.scroll instanceof HTMLElement && (scrollRef.value.scroll.scrollTop = 0)
    })

    if (route.value.name === 'settings') {
      router.replace({ name: 'settings-general-settings' })
    }

    return {
      scrollRef,
      mdiChevronRight,
      tabName
    }
  }
})
</script>