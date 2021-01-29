<template>
  <div>
    <settings-group>
      <settings-row title="suggest stickers by emoji">
        <v-btn
          id="settings__suggest-stickers-by-emoji"
          class="px-1 text-transform-none info--text text--darken-1"
          text
          depressed
        >
          All Sets
        </v-btn>
      </settings-row>
      <settings-row title="trending stickers">
        <v-btn
          id="settings__trending-stickers"
          class="px-1 text-transform-none info--text text--darken-1"
          text
          depressed
        >
          17
        </v-btn>
      </settings-row>
      <settings-row title="archived stickers">
        <v-btn
          id="settings__archived-stickers"
          class="pr-0"
          text
          small
          icon
          @click="$router.push({ name: 'index' })"
        >
          <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </settings-row>
      <settings-row title="loop animated stickers">
        <v-switch
          id="settings__loop-animated-stickers"
          color="primary darken-1"
          class="ma-0"
          v-model="control.loopAnimatedStickers"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
    </settings-group>
    <settings-group title="sticker sets" hint="Create your own sticker sets using @stickers bot.">
      <settings-row
        v-for="sticker in stickerList"
        :key="sticker.id"
        :title="sticker.name"
        :subtitle="`${ sticker.count } stickers`"
      >
        <v-btn class="mr-1" icon color="primary">
          <v-icon dense>{{ mdiTrashCanOutline }}</v-icon>
        </v-btn>
      </settings-row>
    </settings-group>
    <p class="mt-1 px-3 info--text text--darken-1 font--xs">Click on a sticker to view and add the whole set.</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SettingsGroup from '~/components/wrapper/SettingsGroup.vue'
import SettingsRow from '~/components/wrapper/SettingsRow.vue'
import { mdiChevronRight, mdiTrashCanOutline } from '@mdi/js'
export default Vue.extend({
  name: 'Stickers',
  components: {
    SettingsGroup,
    SettingsRow
  },
  data () {
    return {
      mdiChevronRight,
      mdiTrashCanOutline,
      control: {
        loopAnimatedStickers: true
      },
      stickerList: [
        {
          id: 1,
          name: '杰哥不要啦',
          count: 120
        },
        {
          id: 2,
          name: 'igotallday_fans',
          count: 28
        },
        {
          id: 3,
          name: 'Peepo pepe',
          count: 30
        },
        {
          id: 4,
          name: 'Bobby Hill',
          count: 22
        },
        {
          id: 5,
          name: 'PEPEtopAnim',
          count: 50
        }
      ]
    }
  }
})
</script>