<template>
  <div class="card">
    <b-form-group id="input-group-{id}" :label="label" :label-for="id">
      <b-form-input :id="id"  :placeholder="placeholder"></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "base-card",
  props: {
    id: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
</style>