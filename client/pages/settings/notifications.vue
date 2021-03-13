<template>
  <div>
    <settings-group title="notifications">
      <settings-row title="notifications">
        <v-switch
          id="settings__notifications"
          color="primary darken-1"
          class="ma-0"
          v-model="control.notifications"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="message preview">
        <v-switch
          id="settings__message-preview"
          color="primary darken-1"
          class="ma-0"
          v-model="control.messagePreview"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="notification tone">
        <v-switch
          id="settings__notification-tone"
          color="primary darken-1"
          class="ma-0"
          v-model="control.notificationTone"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="bounce docker icon">
        <v-switch
          id="settings__bounce-docker-icon"
          color="primary darken-1"
          class="ma-0"
          v-model="control.bounceDockerIcon"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="reset notification">
        <v-switch
          id="settings__reset-notification"
          color="primary darken-1"
          class="ma-0"
          v-model="control.resetNotification"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
    </settings-group>

    <settings-group title="badge counter" hint="Switch off to show the number of unread chats instead of messages.">
      <settings-row title="enabled">
        <v-switch
          id="settings__enabled"
          color="primary darken-1"
          class="ma-0"
          v-model="control.enabled"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="include groups">
        <v-switch
          id="settings__include-groups"
          color="primary darken-1"
          class="ma-0"
          v-model="control.includeGroups"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="include channels">
        <v-switch
          id="settings__include-channels"
          color="primary darken-1"
          class="ma-0"
          v-model="control.includeChannels"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="count unread messages">
        <v-switch
          id="settings__count-unread-messages"
          color="primary darken-1"
          class="ma-0"
          v-model="control.countUnreadMessage"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
    </settings-group>

    <settings-group hint="Receive notifications when one of your contacts becomes available on Gochat.">
      <settings-row title="new contacts">
        <v-switch
          id="settings__new-contacts"
          color="primary darken-1"
          class="ma-0"
          v-model="control.newContacts"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
    </settings-group>

    <settings-group title="when app is in focus" hint="Turn this on if you want to always receive notifications.">
      <settings-row title="show notifications">
        <v-switch
          id="settings__show-notifications"
          color="primary darken-1"
          class="ma-0"
          v-model="control.showNotifications"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
    </settings-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import SettingsGroup from '~/components/wrapper/SettingsGroup.vue'
import SettingsRow from '~/components/wrapper/SettingsRow.vue'
export default defineComponent({
  name: 'Notifications',
  components: {
    SettingsGroup,
    SettingsRow
  },
  setup () {
    const control = reactive({
      notifications: true,
      messagePreview: false,
      notificationTone: true,
      bounceDockerIcon: true,
      resetNotification: false,
      enabled: false,
      includeGroups: true,
      includeChannels: true,
      countUnreadMessage: false,
      newContacts: true,
      showNotifications: false
    })

    return {
      control
    }
  }
})
</script>