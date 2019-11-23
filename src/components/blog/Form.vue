<template>

    <div class="md-layout md-gutter">
        <div class="md-layout-item md-layout md-gutter"></div>
        <div class="md-layout-item md-layout md-gutter">
            <div class="md-layout-item">
                <md-field :class="validateClass">
                    <label>Title</label>
                    <md-input v-model="blog.title"></md-input>
                    <span class="md-error">Enter title</span>
                </md-field>
            </div>
            <div class="md-layout-item">
                <md-field :class="validateClass">
                    <label>Description</label>
                    <md-input v-model="blog.description"></md-input>
                    <span class="md-error">Enter Description</span>
                </md-field>
            </div>
            <div class="md-layout-item">
                <span v-if="!blog.idx && blog.idx!==0"><md-button @click="save"
                                                                  class="md-raised md-primary">Save</md-button></span>
                <span v-else><md-button @click="update" class="md-raised md-accent">Update</md-button></span>
                <md-button @click="clear" class="md-raised md-accent">Clear</md-button>

                <br>
                <br>
                <md-button @click="login" class="md-raised md-primary">Test login</md-button>
                <md-button @click="logout" class="md-raised md-accent">Test Logout</md-button>
                <br>
                <md-button @click="authenticate" class="md-raised">Test Http Get</md-button>
                <md-button @click="testPost" class="md-raised">Test Http Post</md-button>
            </div>
        </div>
        <div class="md-layout-item md-layout md-gutter"></div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex"
    import AxiosService from '../../common/service/axios-service'
    import LoginService from '../../common/service/login-service'

    const axios = new AxiosService()
    const loginService = new LoginService()
    export default {
        name: 'blog-form',
        data() {
            return {
                validForm: false
            }
        },

        methods: {
            ...mapActions({
                setBlog: "blog/setBlog",
                updateBlog: "blog/updateBlog",
                clearForm: "blog/clearForm"
            }),
            save() {
                if (!this.validate()) {
                    this.setBlog({
                        title: this.blog.title,
                        description: this.blog.description
                    })
                    this.clear()
                }
            },
            update() {
                this.updateBlog(this.blog)
                this.clear()
            },
            clear() {
                this.clearForm()
                this.validForm = false
            },
            validate() {
                this.validForm = !this.blog.title || !this.blog.description
                return this.validForm
            },
            authenticate() {
                console.log("authenticate")
                axios.doGet("/api/user/test", {}).then(res => {
                    console.log("res => ", res)
                }).catch(err => {
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
                }).catch(err => {
                    console.log("err: ", err)
                })
            },
            login() {
                let data = {
                    "username": "user01",
                    "password": "password"
                }
                loginService.doLogin("/authenticate", data)
            },
            logout() {
                console.log("logout...")
                localStorage.removeItem('appToken')
            }

        },
        computed: {
            ...mapGetters({
                blog: 'blog/getBlog',
            }),
            validateClass() {
                return {
                    'md-invalid': this.validForm
                }
            }
        }
    }
</script>
