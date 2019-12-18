<template>
    <div id="UserList">
        <b-row class="text-right mb-1">
            <b-col cols="12">
                <b-button to="/user/form" size="sm" variant="success">+ Create</b-button>
                <b-button size="sm" variant="success">test</b-button>
            </b-col>
        </b-row>
        <b-row class="">
            <b-col cols="12">
                <table class="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>User Id</th>
                        <th>Username</th>
                        <th>Created Date</th>
                        <th>Updated Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in state.users" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{item.id}}</td>
                        <td>{{item.username}}</td>
                        <td>{{item.createdDate}}</td>
                        <td>{{item.updatedDate}}</td>
                    </tr>
                    </tbody>
                </table>
            </b-col>
        </b-row>

    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {

        name: "UserList",
        methods: {
            ...mapActions({
                getUsers: 'user/getUsers'
            }),

        },
        mounted(){
            this.getUsers()
        },
        computed: {
            ...mapGetters({
                state: 'user/getUser',
            })
        },
    }
</script>

<style scoped>

</style>