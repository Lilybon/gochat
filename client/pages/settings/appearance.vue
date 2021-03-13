<template>
  <div>
    <settings-group title="color theme">
    </settings-group>

    <settings-group>
      <settings-row title="buble mode">
        
      </settings-row>
      <settings-row title="chat background">
        <v-btn
          id="settings__chat-background"
          class="pr-0"
          text
          small
          icon
          @click="$router.push({ name: 'index' })"
        >
          <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </settings-row>
    </settings-group>

    <settings-group title="text size">
    </settings-group>

    <settings-group title="auto-night mode">
      <settings-row title="auto-night mode">
        <v-btn
          id="settings__auto-night-mode"
          class="pr-0 text-capitalize info--text text--darken-1"
          text
          small
          depressed
          @click="$router.push({ name: 'index' })"
        >
          disabled
          <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </settings-row>
    </settings-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import SettingsGroup from '~/components/wrapper/SettingsGroup.vue'
import SettingsRow from '~/components/wrapper/SettingsRow.vue'
import { mdiChevronRight } from '@mdi/js'
export default defineComponent({
  name: 'Appearance',
  components: {
    SettingsGroup,
     SettingsRow
  },
  setup () {
    return {
      mdiChevronRight
    }
  }
})
</script>