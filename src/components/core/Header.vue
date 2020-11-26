<template>
  <v-card color="grey lighten-1">
    <v-app-bar app>
      <v-toolbar flat>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

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
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" expand-on-hover app>
      <v-list-item>
        <v-list-item-avatar> </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>MENU</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="([icon, text, route], i) in menus"
          :key="i"
          link
          @click="onClickMenu(route)"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: null,
      selectedMenu: 0,
      menus: [
        ["mdi-apps-box", "Home", "/"],
        ["mdi-apps-box", "Stock", "/stock"],
        ["mdi-apps-box", "Product", "/product"],
        ["mdi-apps-box", "Category", "/category"],
      ],
    };
  },
  components: {},
  methods: {
    onClickMenu(path) {
      if (this.$route.path !== path) this.$router.push(path);
    },
  },
  computed: {
    version() {
      return process.env.VUE_APP_VERSION;
    },
    capitalize() {
      const text = this.$route.path.slice(1);
      let char;
      if (text.length != 0) {
        const firstChar = text[0].toUpperCase();
        const restChar = text.slice(1, text.length);
        char = `${firstChar}${restChar}`;
      }
      return char;
    },
  },
};
</script>

<style></style>
