<template>
  <div>
    <v-list dense class="accent">
      <v-list-item class="caption pr-0" @click="visible.addContact = true">
        <v-list-item-icon class="ml-1 mr-6">
          <v-icon color="primary" dense>{{ mdiAccountPlusOutline }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="primary--text" v-text="'Add contact'"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="border--accent-lighten-1" inset></v-divider>
      <v-list-item-group color="primary darken-1" v-model="activeChatroomId">
        <template v-for="contact in contacts">
          <v-list-item
            :key="`list-item-${ contact.chatroom.id }`"
            :value="contact.chatroom.id"
            class="caption pr-0"
          >
            <v-list-item-avatar>
              <v-img :src="contact.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="info--text" v-text="contact.name"></v-list-item-title>
              <v-list-item-subtitle
                :class="[
                  'info--text',
                  { 'text--darken-2': activeChatroomId !== contact.chatroom.id }
                ]"
                v-text="contact.last_seen"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider
            :key="`divider-${ contact.chatroom.id }`"
            :class="`border--${ activeChatroomId === contact.chatroom.id ? 'transparent' : 'accent-lighten-1' }`"
            inset
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <add-contact-dialog
      v-model="visible.addContact"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getContacts } from '~/mocks'
import { mdiAccountPlusOutline } from '@mdi/js'
import AddContactDialog from '~/components/dialog/AddContactDialog.vue'
interface Contact {
  id: number,
  chatroom: Chatroom,
  name: string,
  avatar: string,
  last_seen: string
}
interface Chatroom {
  id: number
}
interface ContactsNavigator {
  contacts: Array<Contact>,
  mdiAccountPlusOutline: string,
  visible: Record<string, boolean>
}
export default Vue.extend({
  name: 'ContactsNavigator',
  components: {
    AddContactDialog
  },
  props: {
    chatroomId: {
      type: [ Number, String ],
      required: true
    }
  },
  data () {
    return {
      contacts: [],
      mdiAccountPlusOutline,
      visible: {
        addContact: false
      }
    } as ContactsNavigator
  },
  computed: {
    activeChatroomId: {
      get (): number | string {
        return this.chatroomId
      },
      set (chatroomId: number) {
        this.$emit('update:chatroomId', chatroomId)
      }
    }
  },
  async fetch () {
    this.contacts = await getContacts()
  }
})
</script>