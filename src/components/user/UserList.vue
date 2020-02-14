<template>
  <div id="UserList">
    <b-row class="text-right mb-1">
      <b-col cols="12">
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
              <th>User Id</th>
              <th>Username</th>
              <th class="text-center">Created Date</th>
              <th class="text-center">Updated Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in userList" :key="index">
              <td>{{index+1}}</td>
              <td>{{item.idStr}}</td>
              <td>{{item.username}}</td>
              <td class="text-center">{{item.createdDateStr}}</td>
              <td class="text-center">{{item.updatedDateStr}}</td>
              <td class="text-right">
                <b-button size="sm" variant="warning" @click="editUser(index)">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </b-button>&nbsp;
                <b-button size="sm" variant="danger" @click="deleteUser(item.idStr)">
                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                </b-button>
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
    deleteUser(id) {
      console.log("delete id: ", id);
      axios.doDelete(`/api/user/delete/${id}`).then(() => {
        this.getUserAll();        
      });
    },
    editUser(idx) {
      // this.findUserById(idx);
      console.log(idx);
    },
    goCreate() {
      // this.clearForm();
      router.push({ path: "/user/form" });
    },
    getUserAll() {
      axios.doGet("/api/user/user-all").then(res => {
        console.log("component getUserAll: ", res.data);
        this.userList = res.data;
        this.destroyDataTable()
      });
    },
    callDataTable() {
      $("#table-user").dataTable({ scrollX: true })
    },
    destroyDataTable() {
      $("#table-user").dataTable().fnDestroy()
    }
  },

  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
    this.getUserAll();
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
    this.callDataTable()
  },
  beforeDestroy() {
    console.log("updated");
  },
  destroyed() {
    console.log("updated");
  }  
};
</script>

<style scoped>
</style>