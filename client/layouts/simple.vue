<template>
  <v-app dark>
    <div class="accent lighten-1 simple__header"></div>
    <v-main class="simple__container">
      <v-container pa-0 fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Simple'
})
</script>

<style lang="scss" scoped>
@mixin entry ($header-height, $container-offset) {
  .simple {
    &__header {
      height: $header-height;
    }
    &__container {
      transform: translateY(-$container-offset);
    }
  }
}
@include entry(
  map-get($simple-bar-height, "md-up"),
  map-get($simple-bar-height, "md-up") / 2
);
@include sm-and-down {
  @include entry(
    map-get($simple-bar-height, "sm-down"),
    map-get($simple-bar-height, "sm-down")
  );
}
</style>
