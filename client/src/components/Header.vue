<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'home'})">
        Recipe Tracker
      </span>
    </v-toolbar-title>
    
    <!-- TODO: Implement Browse Functionality -->
    <!-- <v-toolbar-items>
        <v-btn flat dark>
        Browse
        </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn 
        flat 
        dark
        @click="navigateTo({name: 'login'})">
        Login
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn 
        flat 
        dark
        @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>
