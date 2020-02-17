<template>
  <div id="UserForm">
    <h1>User Form</h1>
    <b-row class="mt-1 mb-1">
      <b-col cols="5">
        <b-form>
           <b-form-group label="Username">
            <b-input id="username" placeholder="Username" v-model="state.user.username"></b-input>
           </b-form-group >
           <b-form-group label="Password" v-if="state.mode">
            <b-input id="password" placeholder="Password" v-model="state.user.password"></b-input>
           </b-form-group>
          <b-form-group label="Confirm Password" v-if="state.mode">
            <b-input id="confirmPassword" placeholder="Confirm Password" v-model="state.user.confirmPassword" ></b-input>
          </b-form-group>
          <b-form-group label="Roles" class="mt-3">
            <b-form-checkbox-group v-model="state.roles" :options="options" value-field="item" text-field="name" stacked ></b-form-checkbox-group>
          </b-form-group>

          <div class="mt-3">
            Selected:
            <strong>{{ state.roles }}</strong>
          </div>

          <div class="form-group">
            <b-save :click="saveUser" :disabled="!disableSave" />&nbsp;
            <b-back :click="back" />
          </div>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import swal from "sweetalert";
import router from "../../router";
import AxiosService from "../../common/service/axios-service";
const axios = new AxiosService();
export default {
  name: "UserForm",
  data() {
    return {
      disableSave: true,           
      options:[],
      // roles: []
    };
  },
  methods: {
    ...mapActions({
      createUser: 'user/createUser',
      setForm: 'user/setForm'
    }),
    saveUser() {
      if (!this.state.user.username) {
        swal("Validate", "Enter Username", "warning");
        return;
      }
      if (!this.state.user.password&&this.state.mode) {
        swal("Validate", "Enter Password", "warning");
        return;
      }
      if (this.state.user.password != this.state.user.confirmPassword && this.state.mode) {
        swal("Validate", "Check Password", "warning");
        return;
      }
      if (!this.state.roles) {
        swal("Select role.", "", "warning");
        return;
      }
      this.createUser({
        user: this.state.user,
        roleIds: this.state.roles
      });
    },
    back() {
      router.push({ path: "/user" });
    },
    getRoleAll() {
      axios.doGet("/api/role/").then(res => {        
        this.options = [];
        res.data.forEach(element => {
          let role = {};
          role = { item: element.id, name: element.roleName };
          this.options.push(role);
        });
      });
    },
    getState(){
      console.log("this state => ", this.state)
    }
  },
  created() {
    this.getRoleAll();
  },
  mounted() {    
    this.form = {
      username: this.state.user.username,
      password: this.state.user.password
    };
  },
  updated(){
    this.getState()
  },
  computed: {
    ...mapGetters({
      state: "user/getUser"
    }),            
  }
};
</script>

<style scoped>
</style>