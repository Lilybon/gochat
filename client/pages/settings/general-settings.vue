<template>
  <div>
    <settings-group title="emoji & stickers">
      <settings-row title="show sticker sidebar">
        <v-switch
          id="settings__show-sticker-sidebar"
          color="primary darken-1"
          class="ma-0"
          v-model="control.showStickerSidebar"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="replace emoji automatically">
        <v-switch
          id="settings__replace-emoji-automatically"
          color="primary darken-1"
          class="ma-0"
          v-model="control.replaceEmojiAuto"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="large emoji">
        <v-switch
          id="settings__large-emoji"
          color="primary darken-1"
          class="ma-0"
          v-model="control.largeEmoji"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
    </settings-group>

    <settings-group title="interface">
      <settings-row title="show calls tab">
        <v-switch
          id="settings__show-calls-tab"
          color="primary darken-1"
          class="ma-0"
          v-model="control.showCallsTab"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="show icon in menu bar">
        <v-switch
          id="settings__show-icon-in-menu-bar"
          color="primary darken-1"
          class="ma-0"
          v-model="control.showIconsInMenuBar"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="in-app sounds">
        <v-switch
          id="settings__in-app-sounds"
          color="primary darken-1"
          class="ma-0"
          v-model="control.inAppSounds"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
    </settings-group>

    <settings-group title="shortcuts">
      <settings-row title="keyboard shortcuts">
        <v-btn
          id="settings__keyboard-shortcuts"
          class="pr-0 text-capitalize info--text text--darken-1"
          text
          small
          depressed
          @click="$router.push({ name: 'settings-keyboard-shortcuts' })"
        >
          ⌘ + ?
          <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </settings-row>
    </settings-group>

    <settings-group title="advanced">
      <settings-row title="copy text formatting">
        <v-switch
          id="settings__copy-text-formatting"
          color="primary darken-1"
          class="ma-0"
          v-model="control.copyTextFormat"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="accept secret chats">
        <v-switch
          id="settings__accept-secret-chats"
          color="primary darken-1"
          class="ma-0"
          v-model="control.acceptSecretChats"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
    </settings-group>

    <settings-group title="force touch action">
      <settings-row
        v-for="action in forceTouchActions"
        :key="action.label"
        :title="action.label"
      >
        <settings-radio
          :id="`settings__${ action.label.replace(/\s/g, '-') }`"
          v-model="control.forceTouchAction"
          :option-value="action.value"
        ></settings-radio>
      </settings-row>
    </settings-group>

    <settings-group title="input settings">
      <settings-row
        v-for="setting in inputSettings"
        :key="setting.label"
        :title="setting.label"
      >
        <settings-radio
          :id="`settings__${ setting.label.replace(/\s/g, '-') }`"
          v-model="control.inputSettings"
          :option-value="setting.value"
        ></settings-radio>
      </settings-row>
    </settings-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SettingsGroup from '~/components/wrapper/SettingsGroup.vue'
import SettingsRow from '~/components/wrapper/SettingsRow.vue'
import SettingsRadio from '~/components/SettingsRadio.vue'
import { mdiChevronRight } from '@mdi/js'
export default Vue.extend({
  name: 'GeneralSettings',
  components: {
    SettingsGroup,
    SettingsRow,
    SettingsRadio
  },
  data () {
    return {
      mdiChevronRight,
      control: {
        showStickerSidebar: true,
        replaceEmojiAuto: false,
        largeEmoji: true,
        showCallsTab: true,
        showIconsInMenuBar: false,
        inAppSounds: false,
        copyTextFormat: true,
        acceptSecretChats: true,
        forceTouchAction: 0,
        inputSettings: 0
      },
      forceTouchActions: [
        { label: 'reply on message', value: 0 },
        { label: 'edit message', value: 1 },
        { label: 'forward message', value: 2 }
      ],
      inputSettings: [
        { label: 'send with enter', value: 0 },
        { label: 'send with ⌘ + enter', value: 1 }
      ]
    }
  }
})
</script>