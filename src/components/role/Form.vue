<template>
  <div>
    <h1>Create Role</h1>
    <b-raw>
      <b-col cols="5">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">          
          <b-form-group id="input-group-roleCode" label="Role Code:" label-for="roleCode">
            <b-form-input id="roleCode" v-model="form.roleCode" required placeholder="Enter role code"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-roleName" label="Role Name:" label-for="input-roleName">
            <b-form-input id="roleName" v-model="form.roleName" required placeholder="Enter role name"></b-form-input>            
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-col>
    </b-raw>
  </div>
</template>

<script>
export default {
  name: "role-form",
   data() {
      return {
        form: {
          roleName: '',
          roleCode: '',
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
  methods: {}
};
</script>