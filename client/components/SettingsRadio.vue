<template>
  <div>
    <v-icon
      class="mx-2"
      :color="value === optionValue ? 'primary' : 'accent'"
      @click="selected = optionValue"
    >{{ mdiCheckCircle }}</v-icon>
    <input
      :id="id ? id : null"
      class="hidden"
      v-model="selected"
      type="radio"
      :value="optionValue"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiCheckCircle } from '@mdi/js'
export default Vue.extend({
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
  data () {
    return {
      mdiCheckCircle
    }
  },
  computed: {
    selected: {
      get (): number | string | boolean {
        return this.value
      },
      set (val: number | string | boolean) {
        this.$emit('input', val)
      }
    }
  }
})
</script>