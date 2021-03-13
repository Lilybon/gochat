<template>
  <div>
    <settings-group>
      <settings-row title="blocked users">
        <v-btn
          id="settings__blocked-users"
          class="pr-0"
          text
          small
          icon
          @click="$router.push({ name: 'settings-blocked-users' })"
        >
          <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </settings-row>
      <settings-row title="passcode">
        <v-btn
          id="settings__passcode"
          class="pr-0 text-capitalize info--text text--darken-1"
          text
          small
          depressed
          @click="$router.push({ name: 'settings-passcode' })"
        >
          off
          <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </settings-row>
      <settings-row title="two-step vertification">
        <v-btn
          id="settings__two-step-vertification"
          class="pr-0 text-capitalize info--text text--darken-1"
          text
          small
          depressed
          @click="$router.push({ name: 'settings-two-step-validation' })"
        >
          off
          <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </settings-row>
    </settings-group>

    <settings-group title="privacy">
      <settings-row
        v-for="privacy in privacies"
        :key="privacy.title"
        :title="privacy.title"
        label-for="phone-number"
      >
        <v-btn
          :id="`settings__${ privacy.title.replace(/\s/g, '-') }`"
          class="pr-0 text-capitalize info--text text--darken-1"
          text
          small
          depressed
          @click="$router.push({ name: `settings-${ privacy.title.replace(/\s/g, '-') }` })"
        >
          {{ privacy.subtitle }}
          <v-icon color="info darken-2" dense>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </settings-row>
    </settings-group>

    <settings-group title="delete my account" hint="If you do not come online at least once within this period, your account will be deleted along with all messages and contacts.">
      <settings-row title="if away for">
        <div class="tiny-select">
          <v-select
            v-model="control.deleteMyAccount"
            :items="deleteMyAccountOptions"
            id="settings__delete-my-account"
            class="mt-0 pt-0 aa"
            color="accent darken-2"
            background-color="accent darken-2"
            hide-details
            flat
            dense
            solo
          ></v-select>
        </div>
      </settings-row>
    </settings-group>

    <settings-group hint="Display people you message frequently at the top of the search section for quick access.">
      <settings-row title="suggest frequent contacts">
        <v-switch
          id="settings__suggest-frequent-contacts"
          color="primary darken-1"
          class="ma-0"
          v-model="control.suggestFrequentContacts"
          hide-details
          dense
          inset
        >
        </v-switch>
      </settings-row>
    </settings-group>

    <settings-group title="chats">
      <settings-row title="delete all cloud drafts">
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
  name: 'PrivacyAndSecurity',
  components: {
    SettingsGroup,
    SettingsRow
  },
  setup () {
    const control = reactive({
      suggestFrequentContacts: true,
      deleteMyAccount: 0
    })
    const privacies = [
      { title: 'phone number', subtitle: 'my contacts' },
      { title: 'last seen', subtitle: 'everybody' },
      { title: 'groups and channels', subtitle: 'everybody' },
      { title: 'voice calls', subtitle: 'everybody' },
      { title: 'profile photo', subtitle: 'everybody' },
      { title: 'forwarded messages', subtitle: 'everybody' }
    ]
    const deleteMyAccountOptions = [
      { text: '1 month', value: 0 },
      { text: '3 months', value: 1 },
      { text: '9 months', value: 2 },
      { text: '1 year', value: 3 }
    ]

    return {
      mdiChevronRight,
      control,
      privacies,
      deleteMyAccountOptions
    }
  }
})
</script>