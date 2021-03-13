<template>
  <div>
    <v-list class="accent">

      <v-list-item class="pr-0 mb-3" color="primary" :to="{ name: 'settings-edit-profile' }">
        <v-list-item-avatar width="60" height="60">
          <v-img :src="user.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content class="d-flex no-wrap">
          <v-list-item-title class="info--text font-weight-bold" v-text="user.name"></v-list-item-title>
          <v-list-item-subtitle class="caption font-weight-medium info--text text--darken-1" v-text="user.phone"></v-list-item-subtitle>
          <v-list-item-subtitle class="caption font-weight-medium info--text text--darken-1" v-text="user.tag"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-icon class="my-5">
          <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item class="pr-0" color="primary" :to="{ name: 'settings-add-account' }">
        <v-list-item-icon class="ml-1 mr-6">
          <v-icon color="primary" dense>{{ mdiAccountPlusOutline }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="primary--text" v-text="'Add Account'"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider :class="['mb-6', `border--${ $route.name === 'settings-add-account' ? 'transparent' : 'accent-lighten-1' }`]" inset></v-divider>

      <template v-for="link in links">
        <v-list-item
          :key="`link-${ link.name }`"
          class="caption pr-0"
          color="primary"
          :to="{ name: link.route }"
          nuxt
          dense
        >
          <v-list-item-avatar width="25" height="25" min-width="25" tile :class="['border--radius-sm', link.background]">
            <v-icon small :color="link.iconColor">{{ link.icon }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="info--text" v-html="link.name"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-divider :class="`border--${ $route.name === link.route ? 'transparent' : 'accent-lighten-1' }`" inset :key="`divider-${ link.name }`"></v-divider>
      </template>

      <div class="mt-8"></div>

      <template v-for="help in helps">
        <v-list-item
          :key="`help-${ help.name }`"
          class="pr-0"
          dense
        >
          <v-list-item-avatar width="25" height="25" min-width="25" tile :class="['border--radius-sm', help.background]">
            <v-icon small :color="help.iconColor">{{ help.icon }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="info--text" v-html="help.name"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-divider class="border--accent-lighten-1" inset :key="`divider-${ help.name }`"></v-divider>
      </template>

      <div class="mt-8"></div>

    </v-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import {
  mdiAccountPlusOutline,
  mdiChevronRight,
  mdiCog,
  mdiLock,
  mdiDatabase,
  mdiLaptop,
  mdiFountainPen,
  mdiWeb,
  mdiStickerOutline,
  mdiFolder,
  mdiHelpCircle,
  mdiDotsHorizontalCircle
} from '@mdi/js'
export default defineComponent({
  name: 'SettingsList',
  setup () {
    const user = reactive({
      avatar: 'https://cdn2.ettoday.net/images/404/d404061.jpg',
      name: 'Jason Chang',
      phone: '+886 XXX XXX XXX',
      tag: '@Lilybon'
    })
    const links = [
      {
        icon: mdiCog,
        iconColor: 'primary darken-2',
        name: 'General',
        route: 'settings-general-settings',
        background: 'info'
      },
      {
        icon: null,
        iconColor: 'info',
        name: 'Notification and Sounds',
        route: 'settings-notifications',
        background: 'error'
      },
      {
        icon: mdiLock,
        iconColor: 'info',
        name: 'Privacy and Security',
        route: 'settings-privacy-and-security',
        background: 'primary darken-1'
      },
      {
        icon: mdiDatabase,
        iconColor: 'info',
        name: 'Data and Storage',
        route: 'settings-data-and-storage',
        background: 'success'
      },
      {
        icon: mdiLaptop,
        iconColor: 'info',
        name: 'Active Sessions',
        route: 'settings-active-sessions',
        background: 'warning'
      },
      {
        icon: mdiFountainPen,
        iconColor: 'info',
        name: 'Appearance',
        route: 'settings-appearance',
        background: 'primary lighten-1'
      },
      {
        icon: mdiWeb,
        iconColor: 'info',
        name: 'Language',
        route: 'settings-language',
        background: 'secondary'
      },
      {
        icon: mdiStickerOutline,
        iconColor: 'info',
        name: 'Stickers',
        route: 'settings-stickers',
        background: 'warning'
      },
      {
        icon: mdiFolder,
        iconColor: 'info',
        name: 'Chat Folders',
        route: 'settings-chat-folders',
        background: 'secondary'
      }
    ]
    const helps = [
      {
        icon: mdiHelpCircle,
        iconColor: 'info',
        name: 'GoChat FAQ',
        background: 'primary lighten-1'
      },
      {
        icon: mdiDotsHorizontalCircle,
        iconColor: 'info',
        name: 'Ask a Question',
        background: 'info darken-2'
      }
    ]

    return {
      mdiAccountPlusOutline,
      mdiChevronRight,
      user,
      links,
      helps
    }
  },
})
</script>