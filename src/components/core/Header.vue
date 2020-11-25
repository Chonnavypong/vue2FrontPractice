<template>
  <v-card color="grey lighten-4" flat height="200px" tile>
    <v-toolbar extended>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title
        >Web Application V. {{ version }} {{ capitalize }}</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "Header",
  computed: {
    version() {
      return process.env.VUE_APP_VERSION;
    },
    capitalize() {
      return this.$route.path.slice(1)
    }
  },
};
</script>

<style></style>
