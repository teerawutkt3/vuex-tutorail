<template>
    <div>
        <h1>Form</h1>
        <b-row>
            <b-col md="1" sm="1" lg="1">
            </b-col>
            <b-col md="3" sm="2" lg="1">
                <b-form-group>Title</b-form-group>
                <b-form-group>Amount</b-form-group>
                <b-form-group>Description</b-form-group>
            </b-col>
            <b-col md="5" sm="8" lg="4">
                <b-form-group>
                    <input
                            type="text"
                            v-model="form.title"
                            class="form-control form-control-sm"
                            placeholder="Enter title"
                    />
                </b-form-group>
                <b-form-group>
                    <input
                            type="number"
                            v-model="form.amount"
                            class="form-control form-control-sm"
                            placeholder="Enter amount"
                    />
                </b-form-group>
                <b-form-group>
                      <textarea
                              v-model="form.description"
                              class="form-control"
                              rows="4"
                              placeholder="Enter description"
                      ></textarea>
                </b-form-group>
                <b-form-group>
                    <date-picker v-model="time1" valueType="format"></date-picker>
                    <date-picker v-model="time2" type="datetime"></date-picker>
                    <date-picker v-model="time3" range></date-picker>
                </b-form-group>
                <b-create :click="onSave"/>&nbsp;
                <b-reset :click="onReset"/>&nbsp;

            </b-col>
        </b-row>
        <b-row class="mt-3 mb-1">
            <b-col cols="1"></b-col>
            <b-col cols="10" style="overflow-x:auto;">
                <table class="table table-sm table-hover nowrap ">
                    <thead>
                    <tr>
                        <th>
                            <div class="custom-control custom-checkbox my-1 mr-sm-2">
                                <input type="checkbox" class="custom-control-input" id="checkAll">
                                <label class="custom-control-label" for="checkAll">show</label>
                            </div>
                        </th>
                        <th>#</th>
                        <th>title</th>
                        <th class="text-right">amount</th>
                        <th>description</th>
                        <th class="text-center">created date</th>
                        <th class="text-center">updated date</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in items" v-bind:key="item.id">
                        <td>
                            <div class="custom-control custom-checkbox my-1 mr-sm-2">
                                <input type="checkbox" class="custom-control-input" id="customControlInline">
                                <label class="custom-control-label" for="customControlInline">&nbsp;</label>
                            </div>
                        </td>
                        <td>{{index + 1}}</td>
                        <td>{{item.title}}</td>
                        <td class="text-right">{{item.amount}}</td>
                        <td>{{item.description}}</td>
                        <td class="text-center">{{item.createdDateStr}}</td>
                        <td class="text-center">{{item.updatedDateStr}}</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </b-col>
        </b-row>
        <b-row class="mb-5">
            <b-col cols="12" class="text-center">
                <b-save/>
                &nbsp;
                <b-back :click="goBack"/>
            </b-col>
        </b-row>

    </div>
</template>

<script>
    import AxiosService from "../../common/service/axios-service";
    import router from "../../router";
    import swal from "sweetalert";
    import BSave from "../base/button/b-save";
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    // import 'vue2-datepicker/locale/th';
    const axios = new AxiosService();
    export default {
        name: "BillForm",
        components: {BSave, DatePicker},
        data() {
            return {
                time1: null,
                time2: null,
                time3: null,
                form: {
                    title: "",
                    description: "",
                    amount: 0.0
                },
                items: [],
                show: true
            };
        },
        methods: {
            goBack() {
                router.push({path: "/bill"});
            },
            onReset() {
                this.form = {
                    title: "",
                    description: "",
                    amount: 0.0
                };
            },
            onSave() {
                axios.doPost("/api/bill/", this.form).then(() => {
                    swal("Save", `success`, "success");
                    router.push({path: "/bill"});
                });
            },
            findAll() {
                axios.doGet("/api/bill/").then(res => {
                    this.items = res.data;
                });
            },
        },
        created() {
            this.findAll()
        }
    };
</script>

<style scoped>
</style>