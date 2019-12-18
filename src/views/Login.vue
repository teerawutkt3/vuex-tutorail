<template>
    <div class="login mt-2">
        <b-button @click="login" variant="primary">Test login</b-button>&nbsp;
        <b-button @click="logout" variant="danger">Test Logout</b-button>
        <br><br>
        <b-button @click="testGet" variant="success">Test Http Get</b-button>&nbsp;
        <b-button @click="testPost" variant="success">Test Http Post</b-button>
        <br><br>
        <p>{{loginText}}</p>
        <p>{{dataRequest}}</p>
    </div>
</template>

<script>
    import AxiosService from '../common/service/axios-service'
    import LoginService from '../common/service/login-service'

    const axiosService = new AxiosService()
    const loginService = new LoginService()
    export default {
        name: 'login',
        data() {
            return {
                loginText: '',
                dataRequest: {},
            }
        },
        methods: {

            testGet() {
                axiosService.doGet("/api/user/test", {}).then(res => {
                    console.log("res => ", res)
                     this.dataRequest = res
                }).catch(err => {
                    this.dataRequest = {"err": "401"}
                    console.log("err: ", err)
                })
            },
            testPost() {
                let data = {
                    "username": "user01",
                    "password": "password"
                }
                axiosService.doPost("/api/user/testPost", data).then(res => {
                    console.log("res => ", res)
                    this.dataRequest = res
                }).catch(err => {
                    this.dataRequest = {"err": "401"}
                    console.log("err: ", err)
                })
            },
            login() {
                let data = {
                    "username": "user01",
                    "password": "password"
                }
                this.dataRequest = {}
                loginService.doLogin("/authenticate", data)
                this.loginText = 'Login Success'
            },

            logout() {
                console.log("logout...")
                this.dataRequest = {}
                localStorage.removeItem('appToken')
                this.loginText = 'Logout..'
            },
        },
        computed: {
            validateClass() {
                return {
                    'md-invalid': this.validForm
                }
            }
        }
    }


</script>
