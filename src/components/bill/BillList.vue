<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item href="#" to="/">
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item active>Bill</b-breadcrumb-item>
    </b-breadcrumb>
    <b-row>
      <b-col cols="7">
        <h1 class="mb-5">Bill No. {{items.length}}</h1>
      </b-col>
      <b-col cols="5" class="text-right">
        <b-btn :click="goCreate" color="warning"><icon icon="sliders"/> setting</b-btn>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="7">
        <p><icon icon="credit-card-alt"/> Alert payments</p>
      </b-col>
      <b-col cols="5" class="text-right">
        <b>Summary: {{summary | currency}}</b>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="3" md="6" sm="12" v-for="item in items" v-bind:key="item.id" class="mb-4">
        <b-card :header="false" :shadow="'lg'">
          <template v-slot:body>
            <b-row>
              <b-col cols="10">
                <h4>{{item.title}}</h4>
              </b-col>
              <b-col cols="2" class="text-right">
                <a @click="deleteBill(item.id, item.title)" class="text-danger"><i class="fa fa-times-circle-o" aria-hidden="true"></i></a>
              </b-col>
            </b-row>
            <b class="text-success">${{item.amount}}</b>
            <br />
            {{item.description}}
            <b-row>
              <b-col class="text-right">
                <b-btn color="warning" :click="()=>{onPay(item.id, item.title)}">pay</b-btn>
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
import AxiosService from "../../common/service/axios-service";
const axios = new AxiosService();
export default {
  name: "BillList",
  data() {
    return {
      summary:0,
      items: []
    };
  },
  methods: {
    goCreate() {
      router.push({ path: "/bill-form" });
    },
    findAll() {
      axios.doGet("/api/bill/").then(res => {
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
            axios.doDelete(`/api/bill/${id}`).then(()=>{
              this.findAll()
            })
          }
      });
    },
    onPay(id, title){
      console.log(id)
      console.log(title)
      swal({
        title: `Confirm`,
        text: `Pay: ${title}  `,
        icon: "info",
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