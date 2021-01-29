<template>
  <v-dialog v-model="show" width="400">
    AddContactDialog
  </v-dialog>
</template>

<script>
export default {
  name: 'AddContactDialog',
  props: {
    value: {
      required: true,
      type: Boolean
    }
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>