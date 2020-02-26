<template >
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/" href="javascript:void(0)">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about" href="javascript:void(0)">About</b-nav-item>
          <b-nav-item to="/auth" href="javascript:void(0)">Authentication</b-nav-item>
          <b-nav-item to="/page" href="javascript:void(0)">Page children router</b-nav-item>
          <b-nav-item to="/blog" href="javascript:void(0)">Blog</b-nav-item>
          <b-nav-item to="/user" href="javascript:void(0)">Users</b-nav-item>
          <b-nav-item to="/role" href="javascript:void(0)">Role</b-nav-item>
          <b-nav-item to="/components" href="javascript:void(0)">Components</b-nav-item>
          <b-nav-item to="/bill" href="javascript:void(0)">Bill</b-nav-item>
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
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid class="mt-3">
      <router-view />
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import AxiosService from "../common/service/axios-service";
import router from "../router";
import swal from "sweetalert";
const axios = new AxiosService();
export default {
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
          if (axios.getIsDebug) {
            console.log("logout...");
            console.log(this.stateUser);
          }
          localStorage.removeItem("appToken");
          router.push({ path: "/auth" });
        }
      });
    }
  },

  created() {
    console.log('getProfile');
    
    this.getProfile();
  },
  computed: {
    ...mapGetters({
      stateUser: "user/getUser"
    })
  }
};
</script>