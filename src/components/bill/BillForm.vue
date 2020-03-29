<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item href="#" to="/">Home</b-breadcrumb-item>
      <b-breadcrumb-item href="#" to="/bill">Bill</b-breadcrumb-item>
      <b-breadcrumb-item active>Setting</b-breadcrumb-item>
    </b-breadcrumb>
    <h1>
      <icon icon="fa-sliders" />&nbsp;Setting
    </h1>
    <b-row>
      <b-col cols="12" sm="12" md="8" lg="8" xl="6" class="mb-3">
        <b-card :header="true" :shadow="'lg'">
          <template v-slot:header>
            <b>Create Bill</b>
          </template>
          <template v-slot:body>
            <b-row>
              <b-col md="6" sm="6" lg="6">
                <b-form-group>
                  <label>Title:</label>
                  <input
                    type="text"
                    v-model="form.title"
                    class="form-control form-control-sm"
                    placeholder="Enter title"
                  />
                </b-form-group>
              </b-col>
              <b-col md="6" sm="6" lg="6">
                <b-form-group>
                  <label>Amount:</label>
                  <input
                    type="number"
                    v-model="form.amount"
                    class="form-control form-control-sm"
                    placeholder="Enter amount"
                  />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6" sm="6" lg="6">
                <b-form-group>
                  <label>Pay Date:</label>
                  <date-picker
                    v-model="time1"
                    valuetype="format"
                    :format="momentFormat"
                    placeholder="dd/MM/yyyy"
                    style="width: 100%"
                  />
                </b-form-group>
                <br />
                <b-create v-if="form.id==0" :click="onSave" class="shadow-lg" />&nbsp;
                <b-edit v-if="form.id!=0" :click="onSave" class="shadow-lg" />&nbsp;
                <b-reset :click="onReset" class="shadow-lg" />&nbsp;
                <b-back :click="goBack" />
              </b-col>
              <b-col md="6" sm="6" lg="6">
                <b-form-group>
                  <label>Description:</label>
                  <textarea
                    v-model="form.description"
                    class="form-control"
                    rows="4"
                    placeholder="Enter description"
                  ></textarea>
                </b-form-group>
              </b-col>
            </b-row>
          </template>
        </b-card>
      </b-col>
      <b-col cols="12" sm="12" md="4" lg="4" xl="6" class="mb-3">
        <b-card :header="true" :shadow="'lg'">
          <template v-slot:header>
            <b>Summary Bill</b>
          </template>
          <template v-slot:body>
            <b-form-group>
              <b>
                <icon :icon="'fa-calendar'" />Now month :
              </b>
              {{nowMonth}}
            </b-form-group>
            <b-form-group>
              <b class="text-primary">Bill : {{items.length}}</b>
            </b-form-group>
            <b-form-group>
              <b class="text-success">Bill Active : {{checkedIsShow.length}}</b>
            </b-form-group>
            <b-form-group>
              <b class="text-warning">Bill In Active : {{items.length-checkedIsShow.length}}</b>
            </b-form-group>
            <b-form-group>
              <b>Summary : {{summary | currency}}</b>
            </b-form-group>
            <b-form-group>
              <b>
                Summary
                <span class="text-primary">bill active</span>
                : {{summaryBillActive | currency}}
              </b>
            </b-form-group>
          </template>
        </b-card>
      </b-col>
    </b-row>
    <b-card :header="true" :shadow="'lg'" class="mb-5">
      <template v-slot:header>
        <b>Bill List {{items.length}} rows</b>
      </template>
      <template v-slot:body>
        <table id="table-bill" class="table table-striped table-sm table-hover nowrap" width="100%">
          <thead>
            <tr>
              <th class="text-right">
                <div class="custom-control custom-checkbox my-1 mr-sm-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    value="Y"
                    @click="checkAll($event)"
                    id="checkAll"
                  />
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
              <td class="text-right">
                <div class="custom-control custom-checkbox my-1 mr-sm-2">
                  <input
                    type="checkbox"
                    v-model="checkedIsShow"
                    @change="checkIsCheckAll"
                    class="custom-control-input"
                    :disabled="checkHis(item.title)"
                    :value="item.id"
                    :id="'isShow'+index"
                  />
                  <label class="custom-control-label" :for="'isShow'+index">&nbsp;</label>
                </div>
              </td>
              <td>{{index + 1}}</td>
              <td>{{item.title}}</td>
              <td class="text-right">{{item.amount | currency}}</td>
              <td>{{item.description}}</td>
              <td class="text-center">{{item.createdDateStr}}</td>
              <td class="text-center">{{item.updatedDateStr}}</td>
              <td class="text-right">
                <b-icon-edit :click="()=>{onEdit(item.id)}" />&nbsp;
                <b-icon-delete :click="()=>{onDelete(item.id, item.title)}" />
              </td>
            </tr>
          </tbody>
        </table>
        <!--                {{checkedIsShow}}-->
        <b-row>
          <b-col cols="12" class="text-center">
            <b-save :click="onSaveActive" />&nbsp;
            <b-back :click="goBack" />
          </b-col>
        </b-row>
      </template>
    </b-card>
  </div>
</template>

<script>
import AxiosService from "../../common/service/axios-service";
import router from "../../router";
import swal from "sweetalert";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import moment from "moment";
import BEdit from "../base/button/b-edit";
// import 'vue2-datepicker/locale/th';
const $ = require("jquery");
const axios = new AxiosService();
export default {
  name: "BillForm",
  components: { BEdit, DatePicker },
  data() {
    return {
      nowMonth: moment().format("MMM YYYY"),
      time1: null,
      time2: null,
      time3: null,
      form: {
        id: 0,
        title: "",
        description: "",
        amount: 0.0
      },
      items: [],
      histories: [],
      show: true,
      momentFormat: {
        stringify: date => {
          return date ? moment(date).format("D MMM YYYY") : "";
        },
        parse: value => {
          return value ? moment(value, "D MMM YYYY").toDate() : null;
        }
      },
      checkedIsShow: [],
      summary: 0,
      summaryBillActive: 0
    };
  },
  methods: {
    checkHis(title) {
        let idx = this.histories.findIndex(e=> e.title==title)
       return idx!=-1 
    },
    findHistory() {
      axios.doGet("/api/bill-his/").then(res => {
        this.histories = res.data;
      });
    },
    onSaveActive() {
      axios.doPost("/api/bill/is-show-active", this.checkedIsShow).then(() => {
        swal("Save", `success`, "success");
        this.findAll();
      });
    },
    checkAll(event) {
      if (event.target.checked) {
        this.checkedIsShow = [];

        // let objCanCheck = {};
        // let canCheck = [];
        // this.histories.forEach(element => {
        //     let idx = this.items.findIndex(e=>e.title==element.title)
        //     objCanCheck = this.items.splice(idx,1)
        //     console.log('obj= >', objCanCheck);
            
        //     canCheck.push(objCanCheck)
        // });
        
        // canCheck.forEach(e => {
        this.items.forEach(e => {
          this.checkedIsShow.push(e.id);
        });
      } else {
        this.checkedIsShow = [];
      }
    },
    goBack() {
      router.push({ path: "/bill" });
    },
    onReset() {
      this.form = {
        id: 0,
        title: "",
        description: "",
        amount: 0.0
      };
    },
    onSave() {
      axios.doPost("/api/bill/", this.form).then(() => {
        swal("Save", `success`, "success");
        this.onReset();
        this.findAll();
      });
    },
    async findAll() {
      await axios.doGet("/api/bill/").then(res => {
        this.items = res.data;
        this.summary = 0;
        this.summaryBillActive = 0;
        this.items.forEach(e => {
          this.summary += e.amount;
          if (e.isShow == "Y") {
            this.summaryBillActive += e.amount;
          }
        });
        this.destroyDataTable();
        this.findIsShowActive();
        this.findHistory()
      });
      await this.callDataTable();
    },
    findIsShowActive() {
      axios.doGet("/api/bill/bill-active").then(res => {
        this.checkedIsShow = [];
        res.data.forEach(e => {
          this.checkedIsShow.push(e.id);
        });
        this.checkIsCheckAll();
      });
    },
    onDelete(id, title) {
      swal({
        title: `Delete`,
        text: `Title: ${title}`,
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios.doDelete(`/api/bill/${id}`).then(() => {
            this.findAll();
          });
        }
      });
    },
    onEdit(id) {
      console.log("id: ", id);
      this.form.id = id;
      axios.doGet(`/api/bill/${id}`).then(res => {
        this.form = res.data;
        window.scrollTo(0, 0);
      });
    },
    callDataTable() {
      $("#table-bill").dataTable({ scrollX: true, paging: false });
    },
    destroyDataTable() {
      $("#table-bill")
        .dataTable()
        .fnDestroy();
    },
    checkIsCheckAll() {
      if (this.checkedIsShow.length != this.items.length) {
        $("#checkAll").prop("checked", false);
      } else {
        $("#checkAll").prop("checked", true);
      }
    }
  },
  created() {
    this.findAll();
  }
};
</script>

<style scoped>
</style>