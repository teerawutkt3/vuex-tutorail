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
                <b-form-select v-model="form.moneyType" :options="moneyTypeOptions"></b-form-select>

                <div class="mt-3">
                  <b-create v-if="form.id==0" :click="onSave" class="shadow-lg" />&nbsp;
                  <b-edit v-if="form.id!=0" :click="onSave" class="shadow-lg" />&nbsp;
                  <b-reset :click="onReset" class="shadow-lg" />&nbsp;
                  <b-back :click="goBack" />
                </div>
              </b-col>
              <b-col md="6" sm="6" lg="6">
                <b-form-group>
                  <label>Description:</label>
                  <textarea
                    v-model="form.description"
                    class="form-control"
                    rows="3"
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
            <b-row>
              <b-col>
                <b-form-group>
                  <b>
                    <icon :icon="'fa-calendar'" />&nbsp;Now month :
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
              </b-col>
              <b-col>
                <p><b class="text-danger">Pay: </b> {{ sumPay | currency }}</p>
                <p><b class="text-success">Saving: </b> {{ sumSaving | currency }}</p>
                <p><b class="text-info">Invest: </b> {{ sumInvest | currency }}</p>
                <p><b class="text-success">Sum Income, Invest: </b> {{ sumSaving+sumInvest | currency }}</p>
                <p><b>Summary :</b> {{summary | currency}}</p>
                <p>
                  <b>
                    Summary
                    <span class="text-primary">bill active</span></b>
                    : {{summaryBillActive | currency}}                  
                 </p>
              </b-col>
            </b-row>            
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
              <th></th>
              <th class="">
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
              <th class="text-center">Type</th>
              <th>title</th>
              <th class="text-right">amount</th>
              <th>description</th>
              <th class="text-center">updated date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in items" v-bind:key="item.id">
              <td>
                <b-icon-edit v-if="!checkHis(item.title)" :click="()=>{onEdit(item.id)}" />&nbsp;
                <b-icon-delete
                  v-if="!checkHis(item.title)"
                  :click="()=>{onDelete(item.id, item.title)}"
                />
              </td>
              <td>
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
              <td class="text-center">
                <span v-if="item.moneyType == 'PAY'" class="text-danger">{{item.moneyType}}</span>
                <span v-if="item.moneyType == 'SAVING'" class="text-success">{{item.moneyType}}</span>
                <span v-if="item.moneyType == 'INVEST'" class="text-info">{{item.moneyType}}</span>
              </td>
              <td>{{item.title}}</td>
              <td class="text-right">{{item.amount | currency}}</td>
              <td>{{item.description}}</td>
              <td class="text-center">{{item.updatedDateStr}}</td>
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
import "vue2-datepicker/index.css";
import moment from "moment";
import BEdit from "../base/button/b-edit";
// import 'vue2-datepicker/locale/th';
const $ = require("jquery");
const axios = new AxiosService();
export default {
  name: "BillForm",
  components: { BEdit },
  data() {
    return {
      nowMonth: moment().format("MMM YYYY"),
      form: {
        id: 0,
        title: "",
        moneyType: "SAVING",
        description: "",
        amount: 0.0,
      },
      moneyTypeOptions: [
        { value: "PAY", text: "PAY" },
        { value: "SAVING", text: "SAVING" },
        { value: "INVEST", text: "INVEST" },
      ],
      items: [],
      histories: [],
      show: true,
      momentFormat: {
        stringify: (date) => {
          return date ? moment(date).format("D MMM YYYY") : "";
        },
        parse: (value) => {
          return value ? moment(value, "D MMM YYYY").toDate() : null;
        },
      },
      checkedIsShow: [],
      summary: 0,
      summaryBillActive: 0,
      sumPay: 0,
      sumSaving: 0,
      sumInvest: 0,
    };
  },
  filters:{
    currency(value){
        let val = (value/1).toFixed(2).replace('.', '.')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  },
  methods: {
    checkHis(title) {
      let idx = this.histories.findIndex((e) => e.title == title);
      return idx != -1;
    },
    findHistory() {
      axios.doGet("/api/bill-his/").then((res) => {
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
        this.items.forEach((e) => {
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
        amount: 0.0,
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
      await axios.doGet("/api/bill/").then((res) => {
        this.items = res.data;
        this.summary = 0;
        this.summaryBillActive = 0;
        this.sumPay = 0;
        this.sumSaving = 0;
        this.sumInvest = 0;
        this.items.forEach((e) => {
          this.summary += e.amount;
          if (e.isShow == "Y") {
            this.summaryBillActive += e.amount;
          }
          if (e.moneyType == "PAY"){
            this.sumPay += e.amount
          }
          if (e.moneyType == "SAVING"){
            this.sumSaving += e.amount
          }
          if (e.moneyType == "INVEST"){
            this.sumInvest += e.amount
          }
        });
        this.destroyDataTable();
        this.findIsShowActive();
        this.findHistory();
      });
      await this.callDataTable();
    },
    findIsShowActive() {
      axios.doGet("/api/bill/bill-active").then((res) => {
        this.checkedIsShow = [];
        res.data.forEach((e) => {
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
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.doDelete(`/api/bill/${id}`).then(() => {
            this.findAll();
          });
        }
      });
    },
    onEdit(id) {      
      this.form.id = id;
      axios.doGet(`/api/bill/${id}`).then((res) => {
        this.form = res.data;
        window.scrollTo(0, 0);
      });
    },
    callDataTable() {
      $("#table-bill").dataTable({ scrollX: true, paging: false });
    },
    destroyDataTable() {
      $("#table-bill").dataTable().fnDestroy();
    },
    checkIsCheckAll() {
      if (this.checkedIsShow.length != this.items.length) {
        $("#checkAll").prop("checked", false);
      } else {
        $("#checkAll").prop("checked", true);
      }
    },
  },
  created() {
    this.findAll();
  },
};
</script>

<style scoped>
</style>