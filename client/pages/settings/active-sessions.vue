<template>
  <div>
    <settings-group title="current session">
      <settings-row title="???">
      </settings-row>
      <settings-row title="terminate all other sessions">
      </settings-row>
    </settings-group>
    <settings-group title="active sessions">
      <settings-row title="???">
      </settings-row>
    </settings-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import SettingsGroup from '~/components/wrapper/SettingsGroup.vue'
import SettingsRow from '~/components/wrapper/SettingsRow.vue'
export default defineComponent({
  name: 'ActiveSessions',
  components: {
    SettingsGroup,
    SettingsRow
  },
  setup () {
    const sessions = []

    return {
    }
  }
})
</script>