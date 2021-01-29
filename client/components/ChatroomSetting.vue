<template>
  <v-menu
    offset-y
    bottom
    left
    :nudge-bottom="15"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        color="primary"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon dense>{{ mdiDotsHorizontal }}</v-icon>
      </v-btn>
    </template>
    <v-list dense class="accent">
      <v-list-item
        v-for="item in settingList"
        :key="item.label"
        @click="item.cb"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon" color="primary"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.label"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  mdiDotsHorizontal,
  mdiFileEditOutline,
  mdiInformationOutline,
  mdiBellOffOutline,
  mdiArchiveArrowDownOutline,
  mdiUpdate,
  mdiBroom,
  mdiTrashCanOutline
} from '@mdi/js'
export default Vue.extend({
  name: 'ChatroomSetting',
  data () {
    return {
      mdiDotsHorizontal,
      settingList: [
        {
          icon: mdiFileEditOutline,
          label: 'edit',
          cb: () => {}
        },
        {
          icon: mdiInformationOutline,
          label: 'info',
          cb: () => {}
        },
        {
          icon: mdiBellOffOutline,
          label: 'mute',
          cb: () => {}
        },
        {
          icon: mdiArchiveArrowDownOutline,
          label: 'archive',
          cb: () => {}
        },
        {
          icon: mdiUpdate,
          label: 'scheduled massages',
          cb: () => {}
        },
        {
          icon: mdiBroom,
          label: 'clear chat history',
          cb: () => {}
        },
        {
          icon: mdiTrashCanOutline,
          label: 'delete and leave',
          cb: () => {}
        }
      ]
    }
  }
})
</script>