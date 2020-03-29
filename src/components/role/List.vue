<template>
  <div id="RoleList">
    <b-row class=" justify-content-center mb-1">
      <b-col cols="4">
        <h1>Role</h1>  
      </b-col> 
      <b-col cols="4" class="text-right">
        <b-create :click="goCreate" />
      </b-col>
    </b-row>
    <span id="r"></span>
    <b-row class="justify-content-center">
      <b-col cols="8">
        <table class="table table-striped table-sm nowrap" id="table-user" width="100%">
          <thead>
            <tr>
              <th>#</th>
              <!-- <th>Role Id</th> -->
              <th>Role code</th>
              <th>Role name</th>
              <!-- <th>Description</th> -->
              <th>Created Date</th>
              <th>Updated Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in roles" :key="index">
              <td>{{index+1}}</td>
              <!-- <td>{{item.idStr}}</td> -->
              <td>{{item.roleCode}}</td>
              <td>{{item.roleName}}</td>
              <!-- <td>{{item.description}}</td> -->
              <td>{{item.createdDateStr}}</td>
              <td>{{item.updatedDateStr}}</td>
              <td class="text-right">
                <b-button size="sm" variant="warning" @click="updateRole(item.id)">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </b-button>&nbsp;
                <b-button size="sm" variant="danger" @click="deleteRole(item.roleName,item.idStr)">
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
import AxiosService from ".././../common/service/axios-service";
import swal from "sweetalert";
import {mapActions} from 'vuex'
const axios = new AxiosService();
const $ = require("jquery");
export default {
  name: "role-list",
  data() {
    return {
      roles: []
    };
  },
  methods: {
    ...mapActions({
      findRoleById: 'role/findRoleById',
      newForm: 'role/newForm'
    }),
    goCreate() {
      this.newForm()
      router.push({ path: "/role/form" });
    },
    async listRole() {
      await axios.doGet("/api/role/").then(res => {
        console.log("res: ", res.data);
        this.roles = res.data;
        this.destroyDataTable();
      });
    },
    updateRole(id){
        this.findRoleById(id).then(()=>{
          router.push({path:'/role/form'})
        })
    },
    deleteRole(roleName, id) {
      swal({
        title: "Are you sure?",
        text: "delete role name : " + roleName,
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios.doDelete(`/api/role/${id}`).then(res => {
            if (res.status == "SUCCESS") {
              swal(`Delete role ${roleName} success`, {
                icon: "success"
              });
              this.listRole();
            }
          });
        }
      });
    },
    callDataTable() {
      $("#table-user").dataTable({ scrollX: true })
    },
    destroyDataTable() {
      $("#table-user").dataTable().fnDestroy()
    }
  },
  created() {
    this.listRole();
  },
  mounted() {},
  updated() {
    this.callDataTable()
  }
};
</script>