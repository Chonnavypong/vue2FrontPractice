<template>
  <div>
    <basic-form :fields="fields"></basic-form>
  </div>
</template>

<script>
import BasicForm from "../components/form/basic";
export default {
  name: "Category",
  components: {
    BasicForm,
  },
  data() {
    return {
      fields: [
        {
          name: "firstName",
        },
        {
          name: "lastName",
        },
        {
          name: "Email",
        },
      ],
    };
  },
};
</script>

<style></style>
