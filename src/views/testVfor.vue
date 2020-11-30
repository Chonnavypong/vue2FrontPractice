<template>
  <div>
    <basic-form :fields="fieldsList"></basic-form>
  </div>
</template>

<script>
import BasicForm from "../components/form/formVuetify";
export default {
  name: "Category",
  components: {
    BasicForm,
  },
  data() {
    return {
      fieldsList: [
        {
          type: "text",
          name: "firstName",
          label: "V For first name",
          placeholder: "First Name",
          value: "",
        },
        {
          type: "text",
          name: "lastName",
          label: "V For last name",
          placeholder: "Last Name",
          value: "",
        },
        {
          type: "number",
          name: "Email",
          label: "V for Email",
          placeholder: "First Name",
          value: "",
        },
      ],
    };
  },
};
</script>

<style></style>
