<template>
  <div>
    <h3 v-if="title.length" class="mb-1 px-3 text-uppercase info--text text--darken-1 subtitle-2">{{ title }}</h3>
    <div class="px-3 accent border--radius-md setting-groups font-sm">
      <slot></slot>
    </div>
    <div v-if="hint.length" class="mt-1 px-3 info--text text--darken-1 font--xs">{{ hint }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'SettingsGroupWrapper',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    hint: {
      type: String,
      required: false,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.setting-groups {
  & > div:not(:last-child) {
    border-bottom: .0625rem solid var(--v-accent-lighten1);
  }
}
</style>