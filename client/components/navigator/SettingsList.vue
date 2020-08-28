<template>
  <div>
    <v-list class="accent">

      <v-list-item class="caption pr-0">
        <v-list-item-icon class="ml-1 mr-6">
          <v-icon color="primary" dense>{{ mdiAccountPlusOutline }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="primary--text" v-text="'Add contact'"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="border--accent-lighten-1 mb-6" inset></v-divider>
      <template v-for="link in links">
        <v-list-item
          :key="`list-item-${ link.name }`"
          class="caption pr-0"
          :to="{ name: link.route }"
          nuxt
          dense
        >
          <v-list-item-avatar width="25" height="25" min-width="25" tile>
            <v-img src="https://en.meming.world/images/en/thumb/e/e2/Crying_Cat_with_paw_up.jpg/300px-Crying_Cat_with_paw_up.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="info--text" v-text="link.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider inset :key="`divider-${ link.name }`"></v-divider>
      </template>
      <div class="mt-8"></div>
      <template v-for="help in helps">
        <v-list-item
          :key="`list-item-${ help.name }`"
          class="caption pr-0"
          dense
        >
          <v-list-item-avatar width="25" height="25" min-width="25" tile>
            <v-img src="https://en.meming.world/images/en/thumb/e/e2/Crying_Cat_with_paw_up.jpg/300px-Crying_Cat_with_paw_up.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="info--text" v-text="help.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider inset :key="`divider-${ help.name }`"></v-divider>
      </template>
      <div class="mt-8"></div>
    </v-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiAccountPlusOutline } from '@mdi/js'
export default Vue.extend({
  name: 'SettingsList',
  data () {
    return {
      mdiAccountPlusOutline,
      links: [
        {
          icon: null,
          name: 'General',
          route: 'settings-general-settings',
          background: ''
        },
        {
          icon: null,
          name: 'Notification and Sounds',
          route: 'settings-notifications',
          background: ''
        },
        {
          icon: null,
          name: 'Privacy and Security',
          route: 'settings-privacy-and-security',
          background: ''
        },
        {
          icon: null,
          name: 'Data and Storage',
          route: 'settings-data-and-storage',
          background: ''
        },
        {
          icon: null,
          name: 'Active Sessions',
          route: 'settings-active-sessions',
          background: ''
        },
        {
          icon: null,
          name: 'Appearance',
          route: 'settings-appearance',
          background: ''
        },
        {
          icon: null,
          name: 'Language',
          route: 'settings-language',
          background: ''
        },
        {
          icon: null,
          name: 'Stickers',
          route: 'settings-stickers',
          background: ''
        },
        {
          icon: null,
          name: 'Chat Folders',
          route: 'settings-chat-folders',
          background: ''
        },
      ],
      helps: [
        {
          icon: null,
          name: 'GoChat FAQ',
          background: ''
        },
        {
          icon: null,
          name: 'Ask a Question',
          background: ''
        }
      ]
    }
  }
})
</script>