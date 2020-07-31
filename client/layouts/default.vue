<template>
  <v-app dark>
    <div class="d-flex justify-center">
      <div class="app">
        <div class="app__header">
          <app-header></app-header>
        </div>
        <div class="app__aside">
          <div class="panel">
            <div :class="[
              'panel__header',
              'panel__header--wrap',
              { 'panel__header--transparent': toolIndex % 2 === 0 }]">
              <component
                class="d-flex space-between"
                :is="currentTool.tool"
              ></component>
            </div>
            <div class="panel__main">
               <component
                  :is="currentTool.list"
                  :contactId.sync="contactId"
                ></component>
            </div>
            <div class="panel__footer">
              <div>
                <v-tabs
                  v-model="toolIndex"
                  grow
                  background-color="accent"
                  slider-color="transparent"
                >
                  <v-tab v-for="(tool, index) in tools" :key="tool.name">
                    <v-icon :color="toolIndex === index ? 'primary' : 'info-darken-1'">{{ tool.icon }}</v-icon>
                  </v-tab>
                </v-tabs>
              </div>
            </div>
          </div>
        </div>
        <div :class="{
          'app__main': true,
          'app__main--out': $route.name === 'index'
        }">
          <nuxt />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '~/components/Header.vue'
import {
  mdiAccountCircle,
  mdiPhone,
  mdiChat,
  mdiCog
} from '@mdi/js'

interface Tool {
  name: string,
  icon: string,
  tool: Function,
  list: Function,
  path?: string,
  hiddenToolBottom: Boolean
}
export default Vue.extend({
  components: {
    AppHeader
  },
  data () {
    return {
      isHydrated: false,
      toolIndex: 0,
      contactId: '',
      tools: [
        {
          name: 'contacts',
          icon: mdiAccountCircle,
          tool: () => import('~/components/navigator/ContactsTool.vue'),
          list: () => import('~/components/navigator/ContactsList.vue'),
          hiddenToolBottom: true
        },
        {
          name: 'recent-calls',
          icon: mdiPhone,
          tool: () => import('~/components/navigator/RecentCallsTool.vue'),
          list: () => import('~/components/navigator/RecentCallsList.vue'),
          hiddenToolBottom: false
        },
        {
          name: 'messages',
          icon: mdiChat,
          navHeader: 'Hello',
          tool: () => import('~/components/navigator/MessagesTool.vue'),
          list: () => import('~/components/navigator/MessagesList.vue'),
          hiddenToolBottom: true
        },
        {
          name: 'settings',
          icon: mdiCog,
          navHeader: 'Hello',
          tool: () => import('~/components/navigator/SettingsTool.vue'),
          list: () => import('~/components/navigator/SettingsList.vue'),
          route: 'settings',
          hiddenToolBottom: false
        }
      ]
    }
  },
  computed: {
    currentTool (): Tool | undefined {
      return this.tools[this.toolIndex]
    }
  },
  watch: {
    currentTool (tool) {
      let next = tool.route || 'index'
      if (next !== this.$route.name) this.$router.push({ name: next })
    },
    contactId (id) {
      this.$router.push({
        name: 'chatroom-id',
        params: { id: this.contactId }
      })
    }
  }
})
</script>

<style lang="scss">
.app {
  display: grid;
  grid-gap: 1px;
  grid-template-rows: $header-height auto;
  grid-template-columns: map-get($main-width, "sm-down") minmax(#{map-get($main-width, "sm-down")}, #{map-get($main-width, "md-up")});
  grid-template-areas:
    "header header"
    "aside main";
  @include sm-and-down {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main";
    width: 100%;
  }
  margin: 0;
  padding: 1px;
  height: map-get($app-height, "md-up");
  @include sm-and-down {
    height: map-get($app-height, "sm-down");
  }
  background-color: var(--v-accent-lighten1);
  &__header {
    grid-area: header;
    background-color: var(--v-accent-lighten1);
  }
  &__aside {
    grid-area: aside;
    @include sm-and-down {
      grid-area: main;
    }
    & > div {
      height: 100%;
    }
    background-color: var(--v-accent-base);
  }
  &__main {
    grid-area: main;
    background-color: var(--v-accent-base);
    transition: transform 0s;
    transform: translateX(0);
    & > div {
      height: 100%;
    }
    @include sm-and-down {
      transition: transform .25s;
      &--out {
        position: relative;
        transform: translateX(calc(100% + 1px));
      }
    }
  }
}
</style>
