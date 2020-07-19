<template>
  <div>Language</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Language',
  data () {
    return {
      langs: [
        {
          name: 'English',
          local: 'English'
        },
        {
          name: 'Catalan',
          local: 'Catalan'
        },
        {
          name: 'Dutch',
          local: 'Nederlands'
        },
        {
          name: 'French',
          local: 'French'
        }
      ]
    }
  }
})
</script>

<style>

</style>