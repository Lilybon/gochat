<template>
  <div>
    <settings-group>
      <settings-row
        v-for="lang in langs"
        :key="lang.title"
        :title="lang.title"
        :subtitle="lang.subtitle"
      >
        <settings-radio
          :id="`settings__${ lang.subtitle.replace(/\s/g, '-') }`"
          v-model="control.lang"
          :option-value="lang.value"
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
  name: 'Language',
  components: {
    SettingsGroup,
    SettingsRow,
    SettingsRadio
  },
  data () {
    return {
      control: {
        lang: 'english'
      },
      langs: [
        {
          title: 'english',
          subtitle: 'english',
          value: 'english'
        },
        {
          title: 'catalan',
          subtitle: 'catalan',
          value: 'catalan'
        },
        {
          title: 'dutch',
          subtitle: 'dutch',
          value: 'dutch'
        },
        {
          title: 'french',
          subtitle: 'french',
          value: 'french'
        },
        {
          title: 'german',
          subtitle: 'german',
          value: 'german'
        },
        {
          title: 'italian',
          subtitle: 'italian',
          value: 'italian'
        },
        {
          title: 'malay',
          subtitle: 'malay',
          value: 'malay'
        },
        {
          title: 'portuguese (brazil)',
          subtitle: 'portuguese (brazil)',
          value: 'portuguese (brazil)'
        },
        {
          title: 'russian',
          subtitle: 'russian',
          value: 'russian'
        },
        {
          title: 'spanish',
          subtitle: 'spanish',
          value: 'spanish'
        },
        {
          title: 'turkish',
          subtitle: 'turkish',
          value: 'turkish'
        },
        {
          title: 'ukarainian',
          subtitle: 'ukarainian',
          value: 'karainian'
        }
      ]
    }
  }
})
</script>

<style>

</style>