<template>
  <v-list dense class="accent">
    <template v-for="recentCall in recentCalls">
      <v-list-item
        :key="`recent-call-${ recentCall.id }`"
        :value="recentCall.id"
        class="caption pr-0"
      >
        <v-list-item-avatar>
          <v-img :src="recentCall.contact.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title :class="recentCall.status === 'outgoing' ? 'info--text' : 'error--text text--lighten-1'" v-text="recentCall.contact.name"></v-list-item-title>
          <v-list-item-subtitle
            class="info--text text--darken-2"
            v-text="recentCall.status"
          ></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="mr-3">
          <v-list-item-action-text v-text="recentCall.time" class="py-1"></v-list-item-action-text>
          <v-icon color="grey lighten-1"></v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider
        :key="`divider-${ recentCall.id }`"
        class="accent-lighten-1"
        inset
      ></v-divider>
    </template>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api'
import { getRecentCalls } from '~/mocks'
export default defineComponent({
  name: 'RecentCallsList',
  setup () {
    const recentCalls = useAsync(() => getRecentCalls())
    return {
      recentCalls
    }
  }
})
</script>