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
            :key="`contact-${ contact.id }`"
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
                v-text="contact.lastSeen"
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
import { defineComponent, reactive, computed, useAsync } from '@nuxtjs/composition-api'
import { getContacts } from '~/mocks'
import { mdiAccountPlusOutline } from '@mdi/js'
import AddContactDialog from '~/components/dialog/AddContactDialog.vue'
import { Contact } from '~/mocks/types'
export default defineComponent({
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
  setup (props, { emit }) {
    const contacts = useAsync(() => getContacts())
    const visible = reactive({ addContact: false })

    const activeChatroomId = computed({
      get: (): number | string => props.chatroomId,
      set: (chatroomId: number | string) => { emit('update:chatroomId', chatroomId) }
    })

    return {
      contacts,
      visible,
      mdiAccountPlusOutline,
      activeChatroomId
    }
  }
})
</script>