<template>
  <div class="panel">
    <div class="panel__header panel__header--wrap">
      <div class="d-flex justify-between align-center">
        <v-btn
          class="text-capitalize primary--text"
          text
          nuxt
          @click="$router.go(-1)"
          depressed
        >
          <v-icon class="rotate--180" dense>{{ mdiChevronRight }}</v-icon>
          back
        </v-btn>
        <h2 class="subtitle-1 font-weight-black text-capitalize">info</h2>
        <v-btn
          class="text-capitalize primary--text"
          text
          nuxt
          @click="() => {}"
          depressed
        >
          edit
        </v-btn>
      </div>
    </div>
    <div class="panel__main accent darken-1">
      <div class="settings">
        <div class="d-flex justify-center">
          <div>
            <v-avatar width="120" height="120">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-avatar>
            <h5 class="subtitle-1 font-weight-black text-center">Front-End</h5>
            <p class="caption text-center info--text text--darken-1">last seen recently</p>
          </div>
        </div>
        <div class="d-flex">
          <div
            v-for="(action, index) in actions"
            :key="`action-${ action.label }`"
            class="flex-grow--1 d-flex flex-column align-center px-5 py-2 accent border--radius-md font-sm"
            :class="{ 'mr-3': index !== actions.length - 1 }"
          >
            <v-icon color="primary" dense>{{ action.icon }}</v-icon>
            <p class="caption primary--text text-capitalize">{{ action.label }}</p>
          </div>
        </div>
        <div class="border--radius-md accent">
          <v-tabs
            grow
            background-color="transparent"
            slider-color="primary"
          >
            <v-tab
              v-model="activeTab"
              v-for="tab in tabs"
              :key="tab"
              active-class="primary--text"
              class="caption text-capitalize"
            >{{ tab }}</v-tab>
          </v-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  mdiChevronRight,
  mdiAccountPlus,
  mdiBellOff,
  mdiExitToApp,
  mdiInformation
} from '@mdi/js'
import '~/styles/settings-page.scss'
export default Vue.extend({
  name: 'ChatroomInfo',
  transition: {
    name: 'slide-left',
    mode: 'out-in'
  },
  data () {
    const tabs = [
      'members',
      'media',
      'files',
      'links',
      'GIFs'
    ]
    return {
      mdiChevronRight,
      activeTab: tabs[0],
      actions: [
        {
          label: 'add',
          icon: mdiAccountPlus,
          cb: () => {}
        },
        {
          label: 'mute',
          icon: mdiBellOff,
          cb: () => {}
        },
        {
          label: 'leave',
          icon: mdiExitToApp,
          cb: () => {}
        },
        {
          label: 'report',
          icon: mdiInformation,
          cb: () => {}
        }
      ],
      tabs
    }
  }
})
</script>