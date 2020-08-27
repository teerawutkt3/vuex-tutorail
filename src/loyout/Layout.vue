<template >
  <div>
    <!-- light -->
    <b-navbar toggleable="lg" type="light" variant="light" class="shadow-sm fixed-top">
      <b-navbar-brand to="/" href="javascript:void(0)">
        <img src="../assets/home.png" alt="logo" width="40px" >
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" href="javascript:void(0)">Home</b-nav-item>
          <b-nav-item to="/about" href="javascript:void(0)">About</b-nav-item>
          <b-nav-item to="/auth" v-if="validateRole(role.role.admin)" href="javascript:void(0)">Authentication</b-nav-item>
          <b-nav-item to="/page" v-if="validateRole(role.role.admin)" href="javascript:void(0)">Page children router</b-nav-item>
          <b-nav-item to="/components" v-if="validateRole(role.role.admin)"  href="javascript:void(0)">Components</b-nav-item>
          <b-nav-item to="/blog" v-if="validateRole(role.role.admin)" href="javascript:void(0)">Blog</b-nav-item>
          <b-nav-item to="/user" v-if="validateRole(role.role.admin)" href="javascript:void(0)">Users</b-nav-item>
          <b-nav-item to="/role" v-if="validateRole(role.role.admin)" href="javascript:void(0)">Role</b-nav-item>
          <b-nav-item to="/bill" href="javascript:void(0)">Bill</b-nav-item>
          <b-nav-item to="/covid19" href="javascript:void(0)">Covid-19</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <span>{{stateUser.profile.username}}</span>
            </template>
            <b-dropdown-item href="#" to="/teerawut">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid  style="padding-top: 80px">
      <router-view />
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import router from "../router";
import swal from "sweetalert";
import Role from '../roles'
export default {
  data(){
    return {
      role :  Role
    }
  },
  methods: {
    ...mapActions({
      getProfile: "user/getProfile",
      clearStateAll: "user/clearStateAll"
    }),
    logout() {
      swal({
        title: `Confirm logout!`,
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.clearStateAll();
          localStorage.removeItem("appToken");
          router.push({ path: "/auth" });
        }
      });
    },
    validateRole(role){
      return this.stateUser.profile.roles.includes(role)
    }
  },

  created() {
    this.getProfile();
  },
  computed: {
    ...mapGetters({
      stateUser: "user/getUser"
    })
  }
};
</script>