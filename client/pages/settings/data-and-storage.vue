<template>
  <div>
    <settings-group>
      <settings-row title="storage usage">
        <v-btn
          id="settings__storage-usage"
          class="pr-0"
          text
          small
          icon
          @click="$router.push({ name: 'settings-storage-usage' })"
        >
          <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </settings-row>
      <settings-row title="network usage">
        <v-btn
          id="settings__network-usage"
          class="pr-0"
          text
          small
          icon
          @click="$router.push({ name: 'settings-network-usage' })"
        >
          <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </settings-row>
    </settings-group>

    <settings-group title="automatic media download">
      <settings-row title="auto-download media">
        <v-switch
          id="settings__auto-download-media"
          color="primary darken-1"
          class="ma-0"
          v-model="control.autoDownloadMedia"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="photos" subtitle="On for all chats">
        <v-btn
          id="settings__photos"
          class="pr-0"
          text
          small
          icon
          @click="$router.push({ name: 'settings-photos' })"
        >
          <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </settings-row>
      <settings-row title="videos" subtitle="Up to 10MB for all chats" label-suffix="1">
        <v-btn
          id="settings__videos__1"
          class="pr-0"
          text
          small
          icon
          @click="$router.push({ name: 'settings-videos' })"
        >
          <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </settings-row>
      <settings-row title="files" subtitle="Off for all chats">
        <v-btn
          id="settings__files"
          class="pr-0"
          text
          small
          icon
          @click="$router.push({ name: 'settings-files' })"
        >
          <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </settings-row>
      <settings-row title="reset auto-download settings">
      </settings-row>
    </settings-group>

    <settings-group>
      <settings-row title="download folder">
        <v-btn
          id="settings__download-folder"
          class="px-1 text-transform-none info--text text--darken-1"
          color="accent darken-2"
          depressed
        >
          /User/lichang/Library/Containers...
        </v-btn>
      </settings-row>
    </settings-group>

    <settings-group title="auto-play media">
      <settings-row title="GIFs">
        <v-switch
          id="settings__GIFs"
          color="primary darken-1"
          class="ma-0"
          v-model="control.gifs"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
      <settings-row title="videos" label-suffix="2">
        <v-switch
          id="settings__videos__2"
          color="primary darken-1"
          class="ma-0"
          v-model="control.videos"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
    </settings-group>

    <settings-group title="connection type">
      <settings-row title="use proxy" label-for="use-proxy">
        <v-btn
          id="settings__use-proxy"
          class="pr-0 text-capitalize info--text text--darken-1"
          color="accent darken-2"
          small
          depressed
          @click="$router.push({ name: 'settings-use-proxy' })"
        >
          disabled
          <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </settings-row>
    </settings-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import SettingsGroup from '~/components/wrapper/SettingsGroup.vue'
import SettingsRow from '~/components/wrapper/SettingsRow.vue'
import { mdiChevronRight } from '@mdi/js'
export default defineComponent({
  name: 'DataAndStorage',
  components: {
    SettingsGroup,
    SettingsRow
  },
  setup () {
    const control = reactive({
      autoDownloadMedia: true,
      gifs: true,
      videos: true
    })

    return {
      mdiChevronRight,
      control
    }
  }
})
</script>