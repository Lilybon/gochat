<template>
  <div>
    <v-list dense class="accent">
      <v-list-item class="caption pr-0">
        <v-list-item-icon class="ml-1 mr-6">
          <v-icon color="primary" dense>{{ mdiAccountPlusOutline }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content class="border--bottom border--accent-lighten-1">
          <v-list-item-title class="primary--text" v-text="'Add contact'"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item-group color="primary darken-1" v-model="id">
        <v-list-item
          v-for="contact in contacts"
          :key="contact.id"
          :value="contact.id"
          class="caption pr-0"
        >
          <v-list-item-avatar>
            <v-img :src="contact.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content :class="['border--bottom', id === contact.id ? 'border--transparent' : 'border--accent-lighten-1']">
            <v-list-item-title class="info--text" v-text="contact.name"></v-list-item-title>
            <v-list-item-subtitle :class="['info--text', { 'text--darken-2': id !== contact.id } ]" v-text="contact.last_seen"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getContacts } from '~/mocks'
import {
  mdiAccountPlusOutline
} from '@mdi/js'
interface Contact {
  id: number,
  name: string,
  avatar: string,
  last_seen: string
}
interface ContactsNavigator {
  contacts: Array<Contact>,
  mdiAccountPlusOutline: string
}
export default Vue.extend({
  name: 'ContactsNavigator',
  props: {
    contactId: {
      type: [ Number, String ],
      required: true
    }
  },
  data () {
    return {
      contacts: [],
      mdiAccountPlusOutline
    } as ContactsNavigator
  },
  computed: {
    id: {
      get (): number | string {
        return this.contactId
      },
      set (id: number) {
        this.$emit('update:contactId', id)
      }
    }
  },
  async fetch () {
    this.contacts = await getContacts()
  }
})
</script>