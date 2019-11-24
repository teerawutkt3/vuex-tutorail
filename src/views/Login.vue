<template>
    <div class="login">
        <md-button @click="login" class="md-raised md-primary">Test login</md-button>
        <md-button @click="logout" class="md-raised md-accent">Test Logout</md-button>
        <br>
        <md-button @click="testGet" class="md-raised">Test Http Get</md-button>
        <md-button @click="testPost" class="md-raised">Test Http Post</md-button>
        <br><br>
        <p>{{loginText}}</p>
        <p>{{dataRequest}}</p>
    </div>
</template>

<script>
    import AxiosService from '../common/service/axios-service'
    import LoginService from '../common/service/login-service'

    const axios = new AxiosService()
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
                axios.doGet("/api/user/test", {}).then(res => {
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
                axios.doPost("/api/user/testPost", data).then(res => {
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
            }

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
