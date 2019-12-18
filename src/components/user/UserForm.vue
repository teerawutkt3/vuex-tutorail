<template>
    <div id="UserForm">
        <h1>User Form</h1>
        <b-row class=" mt-1 mb-1">
            <b-col cols="5">
                <b-form>
                    <div class="form-group">
                        <b-input id="username" placeholder="Username" v-model="data.username"></b-input>
                    </div>
                    <div class="form-group">
                        <b-input id="password" placeholder="Password" v-model="data.password"></b-input>
                    </div>
                    <div class="form-group">
                        <b-button size="sm" type="button" variant="success" @click="saveUser">Save</b-button>&nbsp;
                        <b-button to="/user" size="sm" variant="secondary">Back</b-button>
                    </div>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "UserForm",
        data() {
            return {
                data: {
                    username: '',
                    password: '',
                    confirmPassword: ''
                }
            }
        },
        methods: {
            ...mapActions({
                createUser: "user/createUser",
            }),
            saveUser() {
                if (this.data.username.length == 0) {
                    alert('Enter Username')
                    return
                }
                if (this.data.password.length == 0) {
                    alert('Enter Password')
                    return
                }
                this.createUser(this.data)
            },
        },
        mounted() {
            console.log('state: ', this.state.user)
            this.data = {
                username: this.state.user.username,
                password: this.state.user.password,
            }
        },
        // updated(){
        //  console.log('state: ', this.state.user.username)
        // },
        computed: {
            ...mapGetters({
                state: 'user/getUser',
            })
        },
    }
</script>

<style scoped>

</style>