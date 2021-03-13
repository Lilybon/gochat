<template>
  <div>
    <v-icon
      class="mx-2"
      :color="value === optionValue ? 'primary' : 'accent'"
      @click="selected = optionValue"
    >{{ mdiCheckCircle }}</v-icon>
    <input
      v-show="false"
      :id="id ? id : null"
      v-model="selected"
      type="radio"
      :value="optionValue"
    >
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { mdiCheckCircle } from '@mdi/js'
export default defineComponent({
  name: 'SettingsRadio',
  props: {
    id: {
      required: false,
      type: String
    },
    value: {
      required: true,
      type: [Number, String, Boolean]
    },
    optionValue: {
      required: true,
      type: [Number, String, Boolean]
    }
  },
  setup (props, { emit }) {
    const selected = computed({
      get: (): number | string | boolean => props.value,
      set: (newValue: number | string | boolean) => { emit('input', newValue) }
    })

    return {
      mdiCheckCircle,
      selected
    }
  }
})
</script>