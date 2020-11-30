<template>
  <basic-form :fields="inp"> </basic-form>
</template>

<script>
import BasicForm from "../components/form/basic";
export default {
  name: "Category",
  components: { BasicForm },
  data() {
    return {
      inp: [
        {
          name: "firstName",
          lable: "First Name",
        },
        {
          name: "lastName",
          lable: "Last name",
        },
        {
          name: "email",
          lable: "Email",
        },
        {
          name: "add",
          lable: "Address",
        },
      ],
    };
  },
};
</script>

<style></style>
