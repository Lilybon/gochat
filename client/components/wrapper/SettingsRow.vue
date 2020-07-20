<template>
  <div class="settings-row d-flex justify-between py-2 text-capitalize">
    <label class="settings-row__label" :for="labelFor">{{ title }}</label>
    <slot></slot> 
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SettingsRowWrapper',
  props: {
    title: {
      type: String,
      required: true
    },
    labelFor: {
      type: String,
      required: false
    }
  }
})
</script>

<style lang="scss">
.settings-row {
  &__label {
    flex-grow: 1;
  }
}
</style>