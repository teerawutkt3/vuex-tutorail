<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item href="#" to="/">Home</b-breadcrumb-item>
      <b-breadcrumb-item active>Bill</b-breadcrumb-item>
    </b-breadcrumb>
    <b-row style="margin-bottom: -40px">
      <b-col cols="7">
        <h1 class="mb-5">Bill No. {{items.length}}</h1>
      </b-col>
      <b-col cols="5" class="text-right">
        <b-btn :click="goHistory" color="outline-info">
          <i class="fa fa-file-text-o" aria-hidden="true"></i>&nbsp;history
        </b-btn>&nbsp;
        <b-btn :click="goCreate" color="outline-warning">
          <icon icon="fa-sliders" />&nbsp;setting
        </b-btn>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="7"></b-col>
      <b-col cols="5" class="text-right">
        <i class="text-warning">{{nowMonth}}</i> &nbsp;|&nbsp; <b>Summary total bill of month: <u>{{summary | currency}}</u></b>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="7"></b-col>
      <b-col cols="5" class="text-right">
          
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="7">
        <p>
          <icon icon="fa-credit-card-alt" />&nbsp;Alert payments
        </p>
      </b-col>
      <b-col cols="5" class="text-right">
        <b>Summary bill active of month: {{summaryActive | currency}}</b>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="3" md="6" sm="12" v-for="(item, index) in items" v-bind:key="item.id" class="mb-4">
        <b-card :header="false" :shadow="'lg'">
          <template v-slot:body>
            <b-row>
              <b-col cols="10">
                <h5>{{item.title}}</h5>
              </b-col>
              <b-col cols="2" class="text-right">
                <a @click="deleteBill(item.id, item.title)" class="text-danger" style="cursor:pointer">
                  <i class="fa fa-times-circle-o" aria-hidden="true"></i>
                </a>
              </b-col>
            </b-row>
            <b class="text-warning">{{item.amount | currency}}</b>
            <br />
            <b-row>
              <b-col cols="12" class="text-right">
                <small
                  class="text-secondary pr-3"
                  @click="()=>{onShowDetail(item.description)}"
                  style="cursor: pointer"
                >
                  <icon :icon="'fa-list-alt'" />&nbsp;Detail
                </small>&nbsp;
                <small
                  class="text-info"
                  @click="()=>{onPay(index, item.title)}"
                  style="cursor: pointer"
                >
                  <icon icon="fa-check-square-o" />Pay
                </small>&nbsp;
              </b-col>
            </b-row>
          </template>
        </b-card>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col cols="6">
        <h3>Payed</h3>
      </b-col>
      <b-col cols="6">
        <b class="float-right">Summary payed: {{summaryHis | currency}}</b>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="3" md="6" sm="12" v-for="(his,index) in histories" v-bind:key="index" class="mb-4">
        <b-card :header="false" :shadow="'lg'">
          <template v-slot:body>
            <b-row>
              <b-col cols="10">
                <h5>{{his.title}}</h5>
              </b-col>
              <b-col cols="2" class="text-right"></b-col>
            </b-row>
            <b class="text-warning">{{his.amount | currency}}</b>
            <br />
            <b-row>
              <b-col cols="12" class="text-right">
                <small
                  class="text-secondary pr-3"
                  @click="()=>{onShowDetail(his.description)}"
                  style="cursor: pointer"
                >
                  <icon :icon="'fa-list-alt'" />&nbsp;Detail
                </small>&nbsp;
              </b-col>
            </b-row>
          </template>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <apexchart width="100%" type="line" :options="options" :series="series"></apexchart>
      </b-col>
      <b-col>
        <apexchart width="100%" height="350" type="bar" :options="chartOptions" :series="seriesBar"></apexchart>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import router from "../../router/index";
import swal from "sweetalert";
import moment from "moment";
import AxiosService from "../../common/service/axios-service";
const axios = new AxiosService();
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  name: "BillList",
  data() {
    return {
      summary: 0,
      summaryActive: 0,
      summaryHis: 0,
      items: [],
      histories: [],
      nowMonth: moment().format("MMMM YYYY"),

      //Chart
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],
      chartOptions: {
        chart: {
          id: "basic-bar",
          animations: {
            speed: 200
          }
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            distributed: true
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995]
        }
      },
      seriesBar: [
        {
          name: "series-1",
          data: [30, 40, 45, 30, 49]
        }
      ]
    
    };
  },
  filters:{
    currency(value){
        let val = (value/1).toFixed(2).replace('.', '.')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  }, 
  methods: {
    goCreate() {
      router.push({ path: "/bill-form" });
    },
    goHistory() {
      router.push({ path: "/bill-history" });
    },
    findAll() {
      axios.doGet("/api/bill/bill-active").then(res => {
        this.items = res.data;
        this.findHistory();
      });
    },
    findHistory() {
      axios.doGet("/api/bill-his/").then(res => {
        this.histories = res.data;
        this.summaryAmount();
      });
    },
    summaryAmount() {
      this.summary = 0;
      this.summaryHis = 0;
      this.summaryActive =0;
      this.items.forEach(e => {
        this.summary += e.amount;
        this.summaryActive += e.amount;
      });
      this.histories.forEach(e => {
        this.summary += e.amount;
        this.summaryHis += e.amount;
      });
    },
    deleteBill(id, title) {
      swal({
        title: `Confirm`,
        text: `In Active: ${title}`,
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios.doGet(`/api/bill/is-show-inactive/${id}`).then(() => {
            this.findAll();
          });
        }
      });
    },
    onShowDetail(description) {
      swal(`${description}`);
    },
    onPay(idx, title) {
      swal({
        title: `Confirm`,
        text: `Pay: ${title}  `,
        icon: "warning",
        buttons: true,
        successMode: true
      }).then(willDelete => {
        if (willDelete) {
          let bill = this.items[idx];        
          axios.doPost("/api/bill-his/pay", bill).then(() => {
            this.findAll();
          });
        }
      });
    }
  },
  created() {
    this.findAll();    
  }
};
</script>

<style scoped>
</style>