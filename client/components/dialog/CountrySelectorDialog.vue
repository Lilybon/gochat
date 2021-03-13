<template>
  <v-dialog v-model="show" width="400">
    <v-toolbar color="accent lighten-1" dark flat>
      <v-toolbar-title class="caption">Country</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        small
        color="white"
        class="text-capitalize"
        @click="show = false"
      >Close</v-btn>
    </v-toolbar>
    <v-card class="accent panel__wrapper">
      <v-text-field
        v-model="search"
        outlined
        dense
        label="Search"
        prepend-inner-icon=""
      ></v-text-field>
      <v-list dense class="accent list__wrapper">
        <v-list-item-group v-model="selected">
          <v-list-item
            v-for="item in searchOptions"
            :key="item.value"
            class="list__item caption"
            @click="select(item)"
          >
            <span>{{ item.name }}</span>
            <v-spacer></v-spacer>
            <span class="primary--text">{{ item.value }}</span>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref, useFetch, watch } from '@nuxtjs/composition-api'
import { getCountryOptions } from '~/mocks'
import { Option } from '~/mocks/types'

export default  defineComponent({
  name: 'CountrySelectorDialog',
  fetchOnServer: false,
  props: {
    value: {
      type: Boolean,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    code: {
      type: String,
      requird: true
    }
  },
  setup (props, { emit }) {
    const search = ref('')
    const selected = ref('')
    let options: Ref<Array<Option>> = ref([])

    const show = computed({
      get: (): Boolean => props.value,
      set: (value: Boolean): void => { emit('input', value) }
    })
    // TODO: filter search options
    const searchOptions = computed((): Array<Option> => options.value)

    // TODO: guess user location
    const setDefaultCountryAndCode = () => {}

    const select = (item: Option) => {
      emit('update:country', item.name)
      emit('update:code', item.value)
      show.value = false
    }

    useFetch(async () => {
      options.value = await getCountryOptions()
      setDefaultCountryAndCode()
    })

    return {
      search,
      selected,
      searchOptions,
      show,
      select
    }
  }
})
</script>

<style lang="scss" scoped>
.panel {
  &__wrapper {
    padding: .75rem .75rem 1rem;
  }
}
.list {
  &__wrapper {
    max-height: 18.75rem;
    overflow-y: scroll;
  }
  &__item {
    padding: .5rem 1.625rem;
    height: 1.125rem;
  }
}
</style>