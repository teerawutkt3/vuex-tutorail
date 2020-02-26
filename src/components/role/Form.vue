<template>
    <div>
        <h1>Create Role</h1>
        <b-row>
            <b-col cols="5">
                <b-form v-if="show">
                    <b-form-group id="input-group-roleCode" label="Role Code:" label-for="roleCode">
                        <b-form-input
                                id="roleCode"
                                v-model="role.roleCode"
                                :state="checkRoleCode"
                                aria-describedby="input-live-help input-live-feedback"
                                placeholder="Enter role code"
                                trim
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-roleName" label="Role Name:" label-for="input-roleName">
                        <b-form-input
                            id="roleName"
                            v-model="role.roleName"
                            :state="checkRoleName"
                            aria-describedby="input-live-help input-live-feedback"
                            placeholder="Enter role name"
                            trim>
                        </b-form-input>
                    </b-form-group>
                    <b-form-group
                            id="input-group-description"
                            label="Description:"
                            label-for="input-description"
                    >
                        <b-form-input
                                id="description"
                                v-model="role.description"
                                required
                                placeholder="Enter description"
                        ></b-form-input>
                    </b-form-group>
                    <b-save :click="save"/>&nbsp;
                    <b-reset :click="clearForm"/>&nbsp;
                    <b-back :click="goBack"/>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import AxiosService from "../../common/service/axios-service";
    import router from "../../router/";
    import swal from "sweetalert";
    import {mapGetters, mapActions} from "vuex";
    import Utils from '../../common/utils/utils'

    const utils = new Utils()
    const axios = new AxiosService()
    export default {
        name: "role-form",
        data() {
            return {
                show: true
            };
        },
        methods: {
            ...mapActions({
                clearForm: 'role/clearForm'
            }),
            save() {
                if (this.validate()) {
                    axios.doPost("/api/role/", this.role).then(res => {
                        if (res.status == "SUCCESS") {
                            router.push({path: "/role"});
                            swal("Save role", `${this.role.roleName}`, "success");
                        } else {
                            alert("can't save");
                        }
                    });
                }

            },
            validate() {
              return utils.isNotBlank(this.role.roleCode) && utils.isNotBlank(this.role.roleName)
            },
            goBack() {
                router.push({path: '/role'})
            }
        },
        computed: {
            ...mapGetters({
                role: 'role/getRole'
            }),

            checkRoleName() {
                return this.role.roleName.length > 3 ? true : false
            },
            checkRoleCode() {
                return this.role.roleCode.length > 3 ? true : false
            },
        }
    };
</script>