<template>
  <v-app dark>
    <div class="d-flex">
      <div class="hidden"></div>
      <div class="app">
        <div class="app__header">
          <app-header></app-header>
        </div>
        <div class="app__aside">
          <div class="panel">
            <div :class="[
              'panel__header',
              'panel__header--wrap',
              { 'panel__header--transparent': navigateIndex % 2 === 0 }
            ]">
              <component
                class="d-flex justify-between align-center"
                :is="currentNavigation.tool"
              ></component>
            </div>
            <div class="panel__main">
              <component
                :is="currentNavigation.list"
                :chatroomId.sync="chatroomId"
              ></component>
            </div>
            <div class="panel__footer">
              <div>
                <v-tabs
                  v-model="navigateIndex"
                  grow
                  background-color="accent"
                  slider-color="transparent"
                >
                  <v-tab v-for="(navigation, index) in navigators" :key="navigation.name">
                    <v-icon :color="navigateIndex === index ? 'primary' : 'info-darken-1'">{{ navigation.icon }}</v-icon>
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
      <div class="hidden"></div>
    </div>
  </v-app>
</template>

<script lang="ts">
import { computed, defineComponent, ref, useRoute, useRouter, watch } from '@nuxtjs/composition-api'
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
  route?: string,
  hiddenToolBottom: Boolean
}
export default defineComponent({
  components: {
    AppHeader
  },
  setup () {
    const router = useRouter()
    const route = useRoute()
    const navigators = [
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
        tool: () => import('~/components/navigator/ContactsTool.vue'),
        list: () => import('~/components/navigator/ChatroomsList.vue'),
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
    const navigateIndex = ref(0)
    const chatroomId = ref('')

    const currentNavigation = computed((): Tool => navigators[navigateIndex.value])

    watch(currentNavigation, navigation => {
      let next = navigation.route || 'index'
      if (next !== route.value.name) router.push({ name: next })
    })
    watch(chatroomId, (id) => {
      router.push({
        name: 'chatroom-id',
        params: { id: chatroomId.value }
      })
    })

    return {
      navigateIndex,
      chatroomId,
      navigators,
      currentNavigation
    }
  }
})
</script>

<style lang="scss" scoped>
.app {
  display: grid;
  grid-gap: .0625rem;
  grid-template-rows: $header-height auto;
  grid-template-columns: map-get($main-width, "sm-down") minmax(#{map-get($main-width, "sm-down")}, #{map-get($main-width, "md-up")});
  grid-template-areas:
    "header header"
    "aside main";
  margin: 0;
  padding: .0625rem;
  height: map-get($app-height, "md-up");
  background-color: var(--v-accent-lighten1);
  @include sm-and-down {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main";
    width: 100%;
    height: map-get($app-height, "sm-down");
  }
  &__header {
    grid-area: header;
    background-color: var(--v-accent-lighten1);
  }
  &__aside {
    position: relative;
    z-index: map-get($z-layers, "aside-md-up");
    grid-area: aside;
    @include sm-and-down {
      z-index: map-get($z-layers, "aside-sm-down");
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
      transition: transform .3s ease-in-out;
      &--out {
        position: relative;
        transform: translateX(calc(100% + .0625rem));
      }
    }
  }
}
.hidden {
  position: relative;
  z-index: map-get($z-layers, "hidden");
  flex: 1 1 0;
  background-color: var(--v-accent-darken1);
}
</style>
