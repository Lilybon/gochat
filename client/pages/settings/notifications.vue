<template>
  <div>
    <settings-group title="notifications">
      <settings-row title="notifications" label-for="notifications">
        <v-switch
          id="notifications"
          color="primary darken-1"
          class="ma-0"
          v-model="control.notifications"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="message preview" label-for="message-preview">
        <v-switch
          id="message-preview"
          color="primary darken-1"
          class="ma-0"
          v-model="control.messagePreview"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="notification tone" label-for="notification-tone">
        <v-switch
          id="notification-tone"
          color="primary darken-1"
          class="ma-0"
          v-model="control.notificationTone"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="bounce docker icon" label-for="bounce-docker-icon">
        <v-switch
          id="bounce-docker-icon"
          color="primary darken-1"
          class="ma-0"
          v-model="control.bounceDockerIcon"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="reset notification" label-for="reset-notification">
        <v-switch
          id="reset-notification"
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
      <settings-row title="enabled" label-for="enabled">
        <v-switch
          id="enabled"
          color="primary darken-1"
          class="ma-0"
          v-model="control.enabled"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="include groups" label-for="include-groups">
        <v-switch
          id="include-groups"
          color="primary darken-1"
          class="ma-0"
          v-model="control.includeGroups"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="include channels" label-for="include-channels">
        <v-switch
          id="include-channels"
          color="primary darken-1"
          class="ma-0"
          v-model="control.includeChannels"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="count unread messages" label-for="count-unread-messages">
        <v-switch
          id="count-unread-messages"
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
      <settings-row title="new contacts" label-for="new-contacts">
        <v-switch
          id="new-contacts"
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
      <settings-row title="show notifications" label-for="show-notifications">
        <v-switch
          id="show-notifications"
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
import Vue from 'vue'
import SettingsGroup from '~/components/wrapper/SettingsGroup.vue'
import SettingsRow from '~/components/wrapper/SettingsRow.vue'
import SettingsRadio from '~/components/SettingsRadio.vue'
export default Vue.extend({
  name: 'GeneralSettings',
  components: {
    SettingsGroup,
    SettingsRow,
    SettingsRadio
  },
  data () {
    return {
      control: {
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
      }
    }
  }
})
</script>