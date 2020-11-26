<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col v-for="field in fields" :key="field.name" cols="12" md="4">
          <v-text-field
            :label="field.name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
/* eslint-disable */
export default {
  name: "formBasic",
  props: ["fields"],
  // data() {
  //   return {

  //   }
  // },
};
</script>
