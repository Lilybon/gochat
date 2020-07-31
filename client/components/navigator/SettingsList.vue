<template>
  <div>
    <div v-for="link in links" :key="link.name">
      <nuxt-link :to="{ name: link.route  }">{{ link.name }}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SettingsList',
  data () {
    return {
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
        {
          icon: null,
          name: 'GoChat FAQ',
          route: 'index',
          background: ''
        },
        {
          icon: null,
          name: 'Ask a Question',
          route: 'index',
          background: ''
        }
      ]
    }
  }
})
</script>