<template>
  <div>
    <settings-group title="emoji & stickers">
      <settings-row title="show sticker sidebar" label-for="show-sticker-sidebar">
        <v-switch
          id="show-sticker-sidebar"
          color="primary darken-1"
          class="ma-0"
          v-model="control.showStickerSidebar"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="replace emoji automatically" label-for="replace-emoji-automatically">
        <v-switch
          id="replace-emoji-automatically"
          color="primary darken-1"
          class="ma-0"
          v-model="control.replaceEmojiAuto"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="large emoji" label-for="large-emoji">
        <v-switch
          id="large-emoji"
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
      <settings-row title="show calls tab" label-for="show-calls-tab">
        <v-switch
          id="show-calls-tab"
          color="primary darken-1"
          class="ma-0"
          v-model="control.showCallsTab"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="show icon in menu bar" label-for="show-icons-in-menu-bar">
        <v-switch
          id="show-icons-in-menu-bar"
          color="primary darken-1"
          class="ma-0"
          v-model="control.showIconsInMenuBar"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="in-app sounds" label-for="in-app-sounds">
        <v-switch
          id="in-app-sounds"
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
        <v-btn x-small depressed color="accent lighten-1" :to="{ name: 'index' }">⌘ + ?</v-btn>
      </settings-row>
    </settings-group>

    <settings-group title="advanced">
      <settings-row title="copy text formatting" label-for="copy-text-formatting">
        <v-switch
          id="copy-text-formatting"
          color="primary darken-1"
          class="ma-0"
          v-model="control.copyTextFormat"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="accept secret chats" label-for="accept-secret-chats">
        <v-switch
          id="accept-secret-chats"
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
        :label-for="`force-touch-action-${ action.value }`"
      >
        <settings-radio
          :id="`force-touch-action-${ action.value }`"
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
        :label-for="`input-settings-${ setting.value }`"
      >
        <settings-radio
          :id="`input-settings-${ setting.value }`"
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