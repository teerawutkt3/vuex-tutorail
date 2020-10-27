<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item href="#" to="/">Home</b-breadcrumb-item>
      <b-breadcrumb-item href="#" to="/bill">Bill</b-breadcrumb-item>
      <b-breadcrumb-item active>History</b-breadcrumb-item>
    </b-breadcrumb>
    <b-row>
      <b-col>
        <h1><icon icon="fa-sliders" />&nbsp;History</h1>
      </b-col>
      <b-col class="text-right">
        <b-btn
          :click="
            () => {
              this.$router.push('/bill-form');
            }
          "
          color="outline-warning"
        >
          <icon icon="fa-sliders" />&nbsp;setting </b-btn
        >&nbsp;
        <b-back
          :click="
            () => {
              this.$router.push('/bill');
            }
          "
        />&nbsp;
      </b-col>
    </b-row>
    <b-card :header="false" :shadow="'lg'" class="mb-5">
      <template v-slot:header> </template>
      <template v-slot:body>
        <b-row>
          <b-col>
            <table
              class="table table-striped table-sm table-hover nowrap"
              width="100%"
            >
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th class="text-center">Month/Year</th>
                  <th class="text-left">Type</th>
                  <th class="text-right">Summary</th>
                  <th class="text-right">Count</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in his" :key="index">
                  <td class="text-center">{{ index + 1 }}</td>
                  <td class="text-center">{{ item.month }}/{{ item.year }}</td>
                  <td>
                    <span v-if="item.moneyType == 'INVEST'" class="text-info">{{
                      item.moneyType
                    }}</span>
                    <span v-if="item.moneyType == 'PAY'" class="text-danger">{{
                      item.moneyType
                    }}</span>
                    <span
                      v-if="item.moneyType == 'SAVING'"
                      class="text-success"
                      >{{ item.moneyType }}</span
                    >
                  </td>
                  <td class="text-right">
                    {{ item.sumAmount | formatCurrency }}
                  </td>
                  <td class="text-right">{{ item.countBill }}</td>
                </tr>
              </tbody>
            </table>
          </b-col>
          <b-col>
            <h3>Summary</h3>
            <b class="text-info">Sum Invest :</b> {{ sumInvest | formatCurrency }}<br />
            <b class="text-danger">Sum Pay :</b> {{ sumPay | formatCurrency }}<br />
            <b class="text-success">Sum Saving :</b> {{ sumSaving | formatCurrency }}<br><br>
            <b class="text-primary">Sum <u>Saving</u>, <u>Invest</u> :</b> {{ sumSaving + sumInvest | formatCurrency }}<br>
            <b class="text-primary">Total :</b> {{total  | formatCurrency}}
          </b-col>
        </b-row>
      </template>
    </b-card>
  </div>
</template>

<script>
import BillHistroryService from "../../service/bill/BillHistroryService";
import Utils from "../../common/utils/Utils";
export default {
  data() {
    return {
      his: [],
      sumInvest: 0,
      sumPay: 0,
      sumSaving: 0,
      total: 0,
    };
  },
  filters: {
    formatCurrency(val) {
      return Utils.formatPrice(val);
    },
  },
  mounted() {
    console.log("mounted");
    this.findGroup();
  },
  methods: {
    findGroup() {
      console.log("findGroup");
      BillHistroryService.findGroup().then((res) => {
        console.log("his", res.data);
        this.his = res.data;
        this.his.forEach((element) => {
          if (element.moneyType == "INVEST") {
            this.sumInvest += element.sumAmount;
          } else if (element.moneyType == "PAY") {
            this.sumPay += element.sumAmount;
          } else if (element.moneyType == "SAVING") {
            this.sumSaving += element.sumAmount;
          }
          this.total += element.sumAmount;
        });
      });
    },
  },
};
</script>

<style scoped>
</style>