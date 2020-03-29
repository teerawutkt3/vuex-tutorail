<template>
    <div class="login mt-2">
        <div class="sidenav">
            <div class="login-main-text">
                <h2><i class="fa fa-user-plus" aria-hidden="true"></i> Register</h2>
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
                            <input type="text" class="form-control" placeholder="Enter Username" />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Enter Password" />
                        </div>
                        <div class="form-group">
                            <label>Password confirm</label>
                            <input type="password" class="form-control" placeholder="Enter Password confirm" />
                        </div>
                        <button type="submit" class="btn btn-black">Save</button>&nbsp;
                        <button type="button" @click="goLogin" class="btn btn-secondary">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AxiosService from "../common/service/axios-service"
    const axios = new AxiosService()
    export default {
        name: "Register.vue",
        data(){
            return {
                form:{
                    password:'',
                    passwordConfirm:'',
                    username:''
                }
            }
        },
        methods:{
            goLogin(){
                this.$router.push({ path: '/auth'})
            },
            register(){
                axios.doPost('/api/register', this.form).then(()=>{
                    console.log('register')
                })
            }
        }
    }
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
    .mt-2, .my-2 {
        margin-top: -7.5rem !important;
    }
</style>