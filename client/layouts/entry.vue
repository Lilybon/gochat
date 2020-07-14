<template>
  <v-app dark>
    <div class="accent lighten-1 entry__header"></div>
    <v-content class="entry__container">
      <v-container pa-0 fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style lang="scss">
$entry-bar-height-sm-down: 56px;
$entry-bar-height-md-up: 226px;
@mixin entry ($header-height, $container-offset) {
  .entry {
    &__header {
      height: $header-height;
    }
    &__container {
      transform: translateY(-$container-offset);
    }
  }
}
@include entry($entry-bar-height-md-up, $entry-bar-height-md-up / 2);
@media #{map-get($display-breakpoints, 'sm-and-down')} {
  @include entry($entry-bar-height-sm-down, $entry-bar-height-sm-down);
}
</style>
