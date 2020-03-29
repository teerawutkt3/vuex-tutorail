<template>
  <div class="login mt-2">
    <div class="sidenav">
      <div class="login-main-text">
        <h2>
          Home Management
          <br />System
        </h2>
        <p>By Mr.Teerawut Kulrittichai</p>
      </div>
    </div>
    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="login-form">
          <form @submit="login($event)">
            <div class="form-group">
              <label>User Name</label>
              <input type="text" v-model="username" class="form-control" placeholder="Enter Username" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" v-model="password" class="form-control" placeholder="Enter Password" />
            </div>
            <button type="submit" class="btn btn-black">Login</button>&nbsp;
            <button type="button" class="btn btn-secondary" @click="register">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AxiosService from "../common/service/axios-service";
import LoginService from "../common/service/login-service";
import router from "../router/index";
import swal from "sweetalert";
import { mapGetters } from "vuex";
const axios = new AxiosService();
const loginService = new LoginService();
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      loginText: "",
      dataRequest: {}
    };
  },
  methods: {
    testGet() {
      axios
        .doGet("/api/user/test", {})
        .then(res => {
        //   console.log("res => ", res);
          this.dataRequest = res;
          router.push({ path: "/home" });
        })
        .catch(err => {
          swal("Login Error", err, "error");
          this.dataRequest = { err: "401" };
          if(axios.getIsDebug)
            console.log("err: ", err);
        });
    },
    testPost() {
      let data = {
        username: "toppp",
        password: "password"
      };
      axios
        .doPost("/api/user/testPost", data)
        .then(res => {
          console.log("res => ", res);
          router.push({ path: "/home" });
          this.dataRequest = res;
        })
        .catch(err => {
          swal("Login Error", err, "error");
          this.dataRequest = { err: "401" };
          if(axios.getIsDebug)
            console.log("err: " , err);
        });
    },
    login(e) {
      e.preventDefault()
      let data = {
        username: this.username,
        password: this.password
      };
      this.dataRequest = {};
      loginService.doLogin("/authenticate", data);
      this.loginText = "Login Success";
    },

    logout() {
      console.log("logout...");
      this.dataRequest = {};
      localStorage.removeItem("appToken");
      this.loginText = "Logout..";
    },

    checkLogout() {
      if (
        this.stateUser != null &&
        this.stateUser.profile != null &&
        this.stateUser.profile.username != ""
      ) {
        router.push({ path: "/" });
      }
    },
    register(){
      this.$router.push({path : '/register'})
    }
  },
  created() {
    this.checkLogout();
  },
  computed: {
    ...mapGetters({
      stateUser: "user/getUser"
    }),
    validateClass() {
      return {
        "md-invalid": this.validForm
      };
    }
  }
};
</script>
<style scoped>
body {
  font-family: "Lato", sans-serif;
}
.main-head {
  height: 150px;
  background: #fff;
}
.sidenav {
  height: 100%;
  background-color: #000;
  overflow-x: hidden;
  padding-top: 20px;
}
.main {
  padding: 0px 10px;
}
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}
@media screen and (max-width: 450px) {
  .login-form {
    margin-top: 10%;
  }
  .register-form {
    margin-top: 10%;
  }
}
@media screen and (min-width: 768px) {
  .main {
    margin-left: 40%;
  }
  .sidenav {
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }
  .login-form {
    margin-top: 80%;
  }
  .register-form {
    margin-top: 20%;
  }
}

.login-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.login-main-text h2 {
  font-weight: 300;
}

.btn-black {
  background-color: #000 !important;
  color: #fff;
}
</style>