<template>
    <div id="UserList">
        <b-row class="text-right mb-1">
            <b-col cols="12">
                <b-create :click="goCreate"/>
            </b-col>
        </b-row>
        <span id="r"></span>
        <b-row class>
            <b-col cols="12">
                <table class="table table-striped table-sm nowrap" id="table-user">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>User Id</th>
                        <th>Username</th>
                        <th>Created Date</th>
                        <th>Updated Date</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in state.users" :key="index">
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
                    </tr>
                    </tbody>
                </table>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    import router from "../../router";

    const $ = require("jquery");
    export default {
        name: "UserList",
        methods: {
            ...mapActions({
                getUsers: "user/getUsers",
                removeUser: "user/removeUser",
                findUserById: "user/findUserById",
                clearForm: "user/clearForm"
            }),
            deleteUser(id) {
                console.log("delete id: ", id);
                this.removeUser(id);
            },
            editUser(idx) {
                this.findUserById(idx);
            },
            goCreate() {
                this.clearForm();
                router.push({path: "/user/form"});
            }
        },

        beforeCreate() {
            console.log("beforeCreate")
        },
        created() {
            console.log("created")
        },
        beforeMount() {
            console.log("beforeMount")
        },
        mounted() {
            console.log("mounted")
            this.getUsers();
            // $("#table-user").dataTable();
        },
        beforeUpdate() {
            console.log("beforeUpdate")
        },
        updated() {
            console.log("updated")
            $("#table-user").dataTable();
        },
        beforeDestroy() {
            console.log("updated")
        },
        destroyed() {
            console.log("updated")
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