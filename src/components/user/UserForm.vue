<template>
  <div id="UserForm">
    <h1>User Form</h1>
    <b-row class="mt-1 mb-1">
      <b-col cols="5">
        <b-form>
          <div class="form-group">
            <b-input id="username" placeholder="Username" v-model="data.username"></b-input>
          </div>
          <div class="form-group">
            <b-input id="password" placeholder="Password" v-model="data.password"></b-input>
          </div>
          <b-form-group label="Form-checkbox-group stacked checkboxes">
            <b-form-checkbox-group
              v-model="roles"
              :options="options"
              value-field="item"
              text-field="name"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>

          <div class="mt-3">
            Selected:
            <strong>{{ roles }}</strong>
          </div>

          <div class="form-group">
            <b-save :click="saveUser" />&nbsp;
            <b-back :click="back" />
          </div>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import router from "../../router";
import AxiosService from "../../common/service/axios-service";
const axios = new AxiosService();
export default {
  name: "UserForm",
  data() {
    return {
      data: {
        id: "",
        username: "",
        password: "",
        confirmPassword: ""
      },
      roles: [],
      options: [
        { item: "A", name: "Option A" },
        { item: "B", name: "Option B" },
        { item: "D", name: "Option C", notEnabled: true },
        { item: { d: 1 }, name: "Option D" }
      ]
    };
  },
  methods: {
    ...mapActions({
      createUser: "user/createUser"
    }),
    saveUser() {
      if (this.data.username.length == 0) {
        alert("Enter Username");
        return;
      }
      if (this.data.password.length == 0) {
        alert("Enter Password");
        return;
      }
      this.createUser(this.data);
    },
    back() {
      router.push({ path: "/user" });
    },
    getRoleAll() {
      axios.doGet("/api/role/").then(res => {
        console.log("getRoleAll: ", res);
        this.options = [];
        res.data.forEach(element => {
          let role = {};
          role = { item: element.id, name: element.roleName };
          this.options.push(role);
        });
      });
    }
  },
  created() {
    this.getRoleAll();
  },
  mounted() {
    console.log("state: ", this.state.user);
    this.data = {
      username: this.state.user.username,
      password: this.state.user.password
    };
  },
  computed: {
    ...mapGetters({
      state: "user/getUser"
    })
  }
};
</script>

<style scoped>
</style>