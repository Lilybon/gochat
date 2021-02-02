<template>
  <div>
    <settings-group
      v-for="type in shortcuts"
      :key="type.label"
      :title="type.label"
    >
      <settings-row
        v-for="command in type.list"
        :key="command.label"
        :title="command.label"
      >
        <v-btn
          :id="`settings__${ command.label.replace(/\s/g, '-') }`"
          class="text-capitalize info--text text--darken-1"
          text
          small
          depressed
        >
          {{ command.value }}
        </v-btn>
      </settings-row>
    </settings-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SettingsGroup from '~/components/wrapper/SettingsGroup.vue'
import SettingsRow from '~/components/wrapper/SettingsRow.vue'
export default Vue.extend({
  name: 'KeyboardShortcuts',
  components: {
    SettingsGroup,
    SettingsRow
  },
  data () {
    return {
      shortcuts: [
        {
          label: 'chat',
          list: [
            { label: 'open info', value: '→' },
            { label: 'select message to reply', value: '⌘↑/⌘↓' },
            { label: 'edit lasst message', value: '↑' },
            { label: 'record voice/video message', value: '⌘R' },
            { label: 'search messages', value: '⌘F' }
          ]
        },
        {
          label: 'search',
          list: [
            { label: 'quick search', value: '⌘K' },
            { label: 'global search', value: '⇧⌘F' }
          ]
        },
        {
          label: 'markdown',
          list: [
            { label: 'bold', value: '⌘B/**' },
            { label: 'italic', value: '⌘I/_' },
            { label: 'monospace', value: '⇧⌘K/`' },
            { label: 'hyperlink', value: '⌘U' },
            { label: 'strikethrough', value: '~~' }
          ]
        },
        {
          label: 'others',
          list: [
            { label: 'lock on passcode', value: '⌘L' }
          ]
        },
        {
          label: 'mouse',
          list: [
            { label: 'fast reply', value: 'double click' },
            { label: 'schedule a message', value: 'option click on \'send message\'' }
          ]
        },
        {
          label: 'gesture',
          list: [
            { label: 'reply', value: 'swipe from right to left' },
            { label: 'chat list actions', value: 'swipe left or right' },
            { label: 'navigation back', value: 'swipe from left to right' },
            { label: 'sticker/emoji/GIF panel', value: 'swipe left or right' },
          ]
        }
      ]
    }
  }
})
</script>