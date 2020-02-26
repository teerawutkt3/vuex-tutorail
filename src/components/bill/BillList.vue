<template>
  <div>
    <b-row>
      <b-col cols="7">
        <h1 class="mb-5">Bill</h1>
      </b-col>
      <b-col cols="5" class="text-right">
        <b-create :click="goCreate"></b-create>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="3" v-for="item in items" v-bind:key="item" class="mb-4">
        <b-card :header="false">
          <template v-slot:body>
            <h2>{{item.title}}</h2>
            <b>${{item.amount}}</b>
            <br />
            {{item.description}}
            <b-row>
              <b-col class="text-right">
                <b-edit />&nbsp;
                <b-save />
              </b-col>
            </b-row>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import router from "../../router/index";
import AxiosService from "../../common/service/axios-service";
const axios = new AxiosService();
export default {
  name: "BillList",
  data() {
    return {
      items: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    goCreate() {
      console.log("goCreate");
      router.push({ path: "/bill-form" });
    },
    findAll() {
      axios.doGet("/api/bill/").then(res => {
        this.items = res.data;
      });
    }
  },
  created() {
    this.findAll();
  },
  mounted() {
    console.log(this.items);
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
};
</script>

<style scoped>
</style>