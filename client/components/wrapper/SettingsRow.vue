<template>
  <div class="d-flex justify-between align-center py-2">
    <label class="flex-grow--1" :for="labelFor">
      <h5 class="text-capitalize">{{ title }}</h5>
      <p v-if="subtitle.length" class="font--sm info--text text--darken-1">{{ subtitle }}</p>
    </label>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
export default  defineComponent({
  name: 'SettingsRowWrapper',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
      default: ''
    },
    labelPrefix: {
      type: String,
      required: false,
      default: 'settings'
    },
    labelSuffix: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup (props) {
    const labelFor = computed((): string => {
      let label = props.labelPrefix + '__' + props.title.replace(/\s/g, '-')
      if (props.labelSuffix.length) label += '__' + props.labelSuffix
      return label
    })
    return {
      labelFor
    }
  }
})
</script>