<template>
  <v-layout
    column
    justify-start
    align-center
  >

    <div>
      <v-toolbar color="accent lighten-1" dark flat>
        <v-icon></v-icon>
        <v-toolbar-title class="caption">GoChat</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text class="text-capitalize" @click="login">
          next
        </v-btn>
      </v-toolbar>
      <v-card class="accent" flat>
        <v-form class="login__wrapper">
          <h3 class="mb-5">Sign in</h3>
          <p class="caption">Please choose your country and enter your full phone number.</p>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="user.country"
                label="Country"
                dense
                @click="show.country = true"
              ></v-text-field>
            </v-col> 
          </v-row>
            <v-row>
              <v-col cols="3">
                <v-text-field
                  v-model="user.code"
                  label="Code"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="9">
                <v-text-field
                  v-model="user.phone"
                  label="Phone number"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
        </v-form>
      </v-card>
    </div>

    <template v-if="show.more === false">
      <p class="caption text-center">Welcome to the official GoChat web-client.</p>
      <a class="caption font-weight-bold" @click="show.more = true">Learn more</a>
    </template>

    <v-card v-else class="accent login__wrapper">
      <h3 class="mb-5">
        <span>About</span>
        <a @click="show.more = false">hide</a>
      </h3>
      <p class="caption">The GoChat web-client is a tiny chatroom application built by nuxt and go.</p>
      <p class="caption">Feel free to enjoy online demo and view code on github.</p>
    </v-card>

    <country-selector-dialog
      v-model="show.country"
      :country.sync="user.country"
      :code.sync="user.code"
    />

  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import CountrySelectorDialog from '~/components/dialog/CountrySelectorDialog.vue'
interface User {
  country: string,
  code: string,
  phone: string
}
interface Show {
  country: Boolean
  more: Boolean
}
interface Data {
  user: User,
  show: Show
}
export default Vue.extend({
  name: 'login',
  layout: 'simple',
  components: {
    CountrySelectorDialog
  },
  data () {
    return {
      user: {
        country: '',
        code: '',
        phone: ''
      },
      show: {
        country: false,
        more: false
      }
    }
  },
  methods: {
    login (): void {
      this.$router.push('/')
    }
  }
})
</script>

<style lang="scss">
.login {
  &__wrapper {
    margin-bottom: 20px;
    padding: 44px 65px;
    max-width: 400px;
  }
}
</style>