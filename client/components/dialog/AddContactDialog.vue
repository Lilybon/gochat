<template>
  <v-dialog v-model="show" width="400">
    AddContactDialog
  </v-dialog>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
export default {
  name: 'AddContactDialog',
  props: {
    value: {
      required: true,
      type: Boolean
    }
  },
  setup (props, { emit }) {
    const show = computed({
      get: () => props.value,
      set: value => { emit('input', value) }
    })
    return {
      show
    }
  }
}
</script>