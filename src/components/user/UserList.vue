<template>
  <div id="UserList">
    <b-row class="mb-1">
      <b-col cols="8">
        <h1>User</h1>
      </b-col>
      <b-col cols="4" class="text-right">
        <b-create :click="goCreate" />
      </b-col>
    </b-row>
    <span id="r"></span>
    <b-row class>
      <b-col cols="12">
        <table class="table table-striped table-sm nowrap" id="table-user" width="100%">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th class="text-center">Created Date</th>
              <th class="text-center">Updated Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in userList" :key="index">
              <td>{{index+1}}</td>
              <td>{{item.username}}</td>
              <td class="text-center">{{item.createdDateStr}}</td>
              <td class="text-center">{{item.updatedDateStr}}</td>
              <td class="text-right">
                <a class="text-warning" href="javascript:void(0)" @click="editUser(item.idStr)">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </a>&nbsp;
                <a class="text-danger" @click="deleteUser(item.username, item.idStr)">
                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import router from "../../router";
import AxiosService from "../../common/service/axios-service";
import {mapActions} from "vuex";
import swal from "sweetalert";
const axios = new AxiosService();
const $ = require("jquery");

export default {
  name: "UserList",
  data() {
    return {
      userList: []
    };
  },
  methods: {
    ...mapActions({
      newForm: "user/newForm",
      findUserById: 'user/findUserById'
    }),
    deleteUser(username, id) {      
      swal({
        title: "Are you sure?",
        text: "delete user : " + username,
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios.doDelete(`/api/user/${id}`).then(() => {
            this.getUserAll();
          });
        }
      });
    },
    editUser(id) {
      this.findUserById(id);      
    },
    goCreate() {
      this.newForm()
      router.push({ path: "/user/form" });
    },
    getUserAll() {
      axios.doGet("/api/user/").then(res => {        
        this.userList = res.data;
        this.destroyDataTable();
      });
    },
    callDataTable() {
      $("#table-user").dataTable({ scrollX: true });
    },
    destroyDataTable() {
      $("#table-user")
        .dataTable()
        .fnDestroy();
    }
  },

  created() {    
    this.getUserAll();
  },
  updated() {    
    this.callDataTable();
  },
};
</script>

<style scoped>
</style>