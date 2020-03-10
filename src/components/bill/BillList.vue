<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item href="#" to="/">
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item active>Bill</b-breadcrumb-item>
    </b-breadcrumb>
    <b-row style="margin-bottom: -40px">
      <b-col cols="7">
        <h1 class="mb-5">Bill No. {{items.length}}</h1>
      </b-col>
      <b-col cols="5" class="text-right">
        <b-btn :click="goCreate" color="outline-warning"><icon icon="fa-sliders"/> setting</b-btn>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="7">
      </b-col>
      <b-col cols="5" class="text-right">
        <i class="text-warning">{{nowMonth}}</i>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="7">
        <p><icon icon="fa-credit-card-alt"/> Alert payments</p>
      </b-col>
      <b-col cols="5" class="text-right">
        <b>Summary of month: {{summary | currency}}</b>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="3" md="6" sm="12" v-for="item in items" v-bind:key="item.id" class="mb-4">
        <b-card :header="false" :shadow="'lg'">
          <template v-slot:body>
            <b-row>
              <b-col cols="10">
                <h5>{{item.title}}</h5>
              </b-col>
              <b-col cols="2" class="text-right">
                <a @click="deleteBill(item.id, item.title)" class="text-danger"><i class="fa fa-times-circle-o" aria-hidden="true"></i></a>
              </b-col>
            </b-row>
            <b class="text-warning">{{item.amount | currency}}</b>
            <br />
            <b-row>
              <b-col  cols="12" class="text-right">
                <small class="text-secondary pr-3" @click="()=>{onShowDetail(item.description)}" style="cursor: pointer"><icon :icon="'fa-list-alt'"/> Detail</small>&nbsp;
                <small class="text-info" @click="()=>{onPay(item.id, item.title)}" style="cursor: pointer"><icon icon="fa-check-square-o"/> Pay</small>&nbsp;
              </b-col>
            </b-row>
          </template>
        </b-card>
      </b-col>
    </b-row>
    <hr>
    <h3>Payed</h3>
  </div>
</template>

<script>
import router from "../../router/index";
import swal from 'sweetalert'
import moment from 'moment'
import AxiosService from "../../common/service/axios-service";
const axios = new AxiosService();
export default {
  name: "BillList",
  data() {
    return {
      summary:0,
      items: [],
      nowMonth : moment().format('MMM YYYY'),
    };
  },
  methods: {
    goCreate() {
      router.push({ path: "/bill-form" });
    },
    findAll() {
      axios.doGet("/api/bill/bill-active").then(res => {
        this.items = res.data;
        this.summary = 0
        this.items.forEach(e => {
          this.summary+=e.amount
        })
        // this.summary = utils.formatPrice(this.summary)
      });
    },
    deleteBill(id, title){
      swal({
          title: `Confirm`,
          text: `In Active: ${title}`,
          icon: "warning",
          buttons: true,
          dangerMode: true
      }).then(willDelete => {
          if (willDelete) {
            axios.doGet(`/api/bill/is-show-inactive/${id}`).then(()=>{
              this.findAll()
            })
          }
      });
    },
    onShowDetail(description){
      swal(`Description: ${description}`)
    },
    onPay(id, title){
      console.log(id)
      console.log(title)
      swal({
        title: `Confirm`,
        text: `Pay: ${title}  `,
        icon: "warning",
        buttons: true,
        successMode: true
      }).then(willDelete => {
        if (willDelete) {
          console.log(id)
          this.findAll()
        }
      });
    }
  },
  created() {
    this.findAll();
  },
};
</script>

<style scoped>
</style>