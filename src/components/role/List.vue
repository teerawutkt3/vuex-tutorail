<template>
  <div id="RoleList">    
    <b-row class="text-right mb-1">
      <b-col cols="12">
        <b-create :click="goCreate" />
      </b-col>
    </b-row>
    <span id="r"></span>
    <b-row class>
      <b-col cols="12">
        <table class="table table-striped table-sm nowrap" id="table-user">
          <thead>
            <tr>
              <th>#</th>
              <th>Role Id</th>
              <th>Role name</th>
              <th>Created Date</th>
              <th>Updated Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="(item, index) in state.users" :key="index">
              <td>{{index+1}}</td>
              <td>{{item.idStr}}</td>
              <td>{{item.username}}</td>
              <td>{{item.createdDate}}</td>
              <td>{{item.updatedDate}}</td>
              <td class="text-right">
                <b-button size="sm" variant="warning" @click="editUser(index)">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </b-button>&nbsp;
                <b-button size="sm" variant="danger" @click="deleteUser(item.idStr)">
                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                </b-button>
              </td>
            </tr>-->
          </tbody>
        </table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "role-list",
  methods: {}
};
</script>