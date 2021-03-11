<template>
  <v-list dense class="accent">
    <v-list-item-group color="primary darken-1" v-model="activeChatroomId">
      <template v-for="chatroom in chatrooms">
        <v-list-item
          :key="`chatroom-${ chatroom.id }`"
          :value="chatroom.id"
          class="caption pr-0"
        >
          <v-list-item-avatar size="50">
            <v-img :src="chatroom.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="subtitle-2 font-weight-black info--text" v-text="chatroom.name"></v-list-item-title>
            <v-list-item-subtitle class="info--text" v-text="chatroom.last_message.sender"></v-list-item-subtitle>
            <v-list-item-subtitle :class="['info--text', { 'text--darken-2': activeChatroomId !== chatroom.id } ]" v-text="chatroom.last_message.content"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action class="mr-3">
            <v-list-item-action-text v-text="chatroom.last_message.time"></v-list-item-action-text>
            <v-icon color="grey lighten-1"></v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-divider
          :key="`divider-${ chatroom.id }`"
          :class="`border--${ activeChatroomId === chatroom.id ? 'transparent' : 'accent-lighten-1' }`"
          inset
        ></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
import { getChatrooms } from '~/mocks'
import { Chatroom } from '~/mocks/types'
interface ChatroomNavigator {
  chatrooms: Array<Chatroom>
}
export default Vue.extend({
  name: 'MessagesList',
  props: {
    chatroomId: {
      type: [ Number, String ],
      required: true
    }
  },
  data () {
    return {
      chatrooms: []
    } as ChatroomNavigator
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
    this.chatrooms = await getChatrooms()
  }
})
</script>