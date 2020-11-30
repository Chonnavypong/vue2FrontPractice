<template>
  <v-container>
    <v-form ma="20" pd="10" @submit.prevent="onSubmit" ref="myForm">
      <p>Work with Form</p>
      <v-row v-for="(field, index) in fields" :key="index">
        <input type="text" v-model.trim="field.name" name="field.name" placeholder="field.name"/>
        <p>{{ field.name }}</p>
      </v-row>
      <v-btn type="submit"> submit </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "basicForm",
  props: ["fields"],
  methods: {
    onSubmit() {
      console.log("Has Submit Already");
      console.log("xxxx", Object.values(this.fields));
      for (const val of this.fields) {
        console.log("Name value is : ", val.name);
      }
    },
    info() {
      for (const field of this.fields) {
        console.log("value :", field.name);
      }
    },
  },
};
</script>

<style></style>
