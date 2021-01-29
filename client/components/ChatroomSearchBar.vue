<template>
  <div class="search-bar">
    <v-btn
      class="rotate--270"
      text
      icon
    >
      <v-icon color="info darken-1" dense>{{ mdiChevronRight }}</v-icon>
    </v-btn>
    <v-btn
      class="rotate--90"
      text
      icon
    >
      <v-icon color="info darken-1" dense>{{ mdiChevronRight }}</v-icon>
    </v-btn>
    <v-text-field
      v-model="search"
      class="mx-1 field"
      placeholder="Search"
      rounded
      solo
      background-color="accent lighten-1"
      color="info"
      :prepend-inner-icon="mdiMagnify"
      filled
      clearable
      flat
      dense
      hide-details
    ></v-text-field>
    <v-btn
      class="mx-2"
      text
      icon
    >
      <v-icon color="primary" dense>{{ mdiAccountOutline }}</v-icon>
    </v-btn>
    <v-btn
      class="mx-2"
      text
      icon
    >
      <v-icon color="primary" dense>{{ mdiCalendarTextOutline }}</v-icon>
    </v-btn>
    <v-btn
      class="mx-2 rotate--90"
      text
      icon
      @click="$emit('update:visible', false)"
    >
      <v-icon color="primary" dense>{{ mdiCloseCircleOutline }}</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  mdiChevronRight,
  mdiMagnify,
  mdiAccountOutline,
  mdiCalendarTextOutline,
  mdiCloseCircleOutline
} from '@mdi/js'

export default Vue.extend({
  name: 'ChatroomToolBar',
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      mdiChevronRight,
      mdiMagnify,
      mdiAccountOutline,
      mdiCalendarTextOutline,
      mdiCloseCircleOutline,
      search: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.search-bar {
  position: absolute;
  z-index: map-get($z-layers, "chatroom-search-bar");
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: inherit;
  border: .0625rem solid var(--v-accent-lighten1);
  background-color: var(--v-accent-base);
  transform: translateY(100%);
}
.field {
  flex-grow: 1;
}
</style>