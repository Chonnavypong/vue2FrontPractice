<template>
  <v-form @submit.prevent="onSubmit">
    <v-container>
      <v-row>
        <v-col v-for="field in fields" :key="field.name" cols="12" md="4">
          <v-text-field
            :label="field.name"
            :type="field.type"
            :placeholder="field.placeholder"
            v-model="field.value"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-btn type="submit">Submit</v-btn>
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
  methods: {
    onSubmit() {
      for (const val of this.fields) {
        console.log("Name value is : ", val.name, ", Value is ", val.value);
        val.value = ''
      }
      console.log('this fields',this.fields)
    },
  },
};
</script>
