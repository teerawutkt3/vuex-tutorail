<template>
  <div>
    <h1>Role</h1>
    <b-card>
      <template v-slot:header>Result</template>
      <template v-slot:body>
        <RoleList />
      </template>
    </b-card>
  </div>
</template>

<script>
import RoleList from "../components/role/List";
const $ = require("jquery");
export default {
  name: "role",
  components: {
    RoleList
  },
  mounted(){
      $("#table-user").dataTable();
  }
};
</script>

<style lang="scss" scoped>
</style>