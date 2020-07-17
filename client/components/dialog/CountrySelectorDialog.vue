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
import Vue from 'vue'
import { getCountryOptions } from '~/mocks'
interface Option {
  name: string
  value: string
}
interface CountrySelectorDialog {
  search: string
  selected: string
  options: Array<Option>
}
export default Vue.extend({
  name: 'CountrySelectorDialog',
  props: {
    value: Boolean,
    country: String,
    code: String
  },
  data () {
    return {
      search: '',
      selected: '',
      options: []
    } as CountrySelectorDialog
  },
  watch: {
    code (text: string) {
      let country = ''
      if (text.length) {
        let target: Option | undefined = this.options.find(option => option.value.includes(text))
        country = target?.name || ''
      }
      this.$emit('update:country', country)
    }
  },
  computed: {
    show: {
      get (): Boolean {
        return this.value
      },
      set (value: Boolean): void {
        this.$emit('input', value)
      }
    },
    searchOptions (): Array<Option> {
      return this.options
    }
  },
  methods: {
    select (item: Option) {
      this.$emit('update:country', item.name)
      this.$emit('update:code', item.value)
      this.show = false
    }
  },
  async fetch () {
    this.options = await getCountryOptions()
  },
  fetchOnServer: false
})
</script>

<style lang="scss" scoped>
.panel {
  &__wrapper {
    padding: 12px 12px 15px;
  }
}
.list {
  &__wrapper {
    max-height: 300px;
    overflow-y: scroll;
  }
  &__item {
    padding: 8px 26px;
    height: 18px;
  }
}
</style>