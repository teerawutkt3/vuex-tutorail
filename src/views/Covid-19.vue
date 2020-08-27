<template>
  <div class="container mt-5 justify-content-center">
    <h1 class="text-center mb-5">Covid 19</h1>
   
      <!-- ติดเชื้อสะสม: <number animationPaused ref="Confirmed" :from="0" :to="Confirmed" :duration="duration" @complete="completed" @click="playAnimation" />
      หายแล้ว: <number animationPaused ref="Recovered" :from="0" :to="Recovered" :duration="duration" @complete="completed" @click="playAnimation" />
      รักษาอยู่ใน รพ.: <number animationPaused ref="Hospitalized" :from="0" :to="Hospitalized" :duration="duration" @complete="completed" @click="playAnimation" />
      เสียชีวิต: <number animationPaused ref="Deaths" :from="0" :to="Deaths" :duration="duration" @complete="completed" @click="playAnimation" />
      NewConfirmed: <number animationPaused ref="NewConfirmed" :from="0" :to="NewConfirmed" :duration="duration" @complete="completed" @click="playAnimation"/> 
      NewRecovered: <number animationPaused ref="NewRecovered" :from="0" :to="NewRecovered" :duration="duration" @complete="completed" @click="playAnimation" />
      NewHospitalized: <number animationPaused ref="NewHospitalized" :from="0" :to="NewHospitalized" :duration="duration" @complete="completed" @click="playAnimation" />
      NewDeaths: <number animationPaused ref="NewDeaths" :from="0" :to="NewDeaths" :duration="duration" @complete="completed" @click="playAnimation" /> -->
    
    <b-row class="">
        <b-col cols="12" sm="12" lg="3" md="6">
            <div class="card text-dark bg-warning mb-3" >
            <div class="card-header">ติดเชื้อสะสม</div>
            <div class="card-body">
                <h5 class="card-title"><number animationPaused ref="Confirmed" :from="0" :to="Confirmed" :duration="duration" @complete="completed" @click="playAnimation" /></h5>
                <p class="card-text">เพิ่มขึ้น (<number animationPaused ref="NewConfirmed" :from="0" :to="NewConfirmed" :duration="duration" @complete="completed" @click="playAnimation" />)</p>
            </div>
            </div>
        </b-col>
        <b-col cols="12" sm="12" lg="3" md="6">
            <div class="card text-white bg-info mb-3" >
            <div class="card-header">รักษาอยู่ใน รพ.</div>
            <div class="card-body">
                <h5 class="card-title"><number animationPaused ref="Hospitalized" :from="0" :to="Hospitalized" :duration="duration" @complete="completed" @click="playAnimation" /></h5>
                <p class="card-text">เพิ่มขึ้น (<number animationPaused ref="NewHospitalized" :from="0" :to="NewHospitalized" :duration="duration" @complete="completed" @click="playAnimation" />)</p>
            </div>
            </div>
        </b-col>
        <b-col cols="12" sm="12" lg="3" md="6">
            <div class="card text-white bg-success mb-3" >
            <div class="card-header">หายแล้ว</div>
            <div class="card-body">
                <h5 class="card-title"><number animationPaused ref="Recovered" :from="0" :to="Recovered" :duration="duration" @complete="completed" @click="playAnimation" /></h5>
                <p class="card-text">เพิ่มขึ้น (<number animationPaused ref="NewRecovered" :from="0" :to="NewRecovered" :duration="duration" @complete="completed" @click="playAnimation" />)</p>
            </div>
            </div>
        </b-col>
        <b-col cols="12" sm="12" lg="3" md="6">
            <div class="card text-white bg-danger mb-3" >
            <div class="card-header">เสียชีวิต</div>
            <div class="card-body">
                <h5 class="card-title"><number animationPaused ref="Deaths" :from="0" :to="Deaths" :duration="duration" @complete="completed" @click="playAnimation" /></h5>
                <p class="card-text">เพิ่มขึ้น (<number animationPaused ref="NewDeaths" :from="0" :to="NewDeaths" :duration="duration" @complete="completed" @click="playAnimation" />)</p>
            </div>
            </div>
        </b-col>
    </b-row>
    <p class="text-right">Updated: {{result.UpdateDate}}</p>
  </div>
</template>
<script>
import AxiosService from "../common/service/axios-service";
const axios = new AxiosService();
export default {
  data() {
    return {
      result: {},
      duration: 3,
      scaleClass: false,

      Confirmed: 0,
      Recovered: 0,
      Hospitalized: 0,
      Deaths: 0,
      NewConfirmed: 0,
      NewRecovered: 0,
      NewHospitalized: 0,
      NewDeaths: 0
    };
  },
  methods: {
    summary() {      
      axios.doGet("/rest-ws/covid-19").then(res => {        
        
        this.result = res.data.body;
        this.numberTo = this.result.Recovered;

        this.Confirmed = this.result.Confirmed;
        this.Recovered = this.result.Recovered;
        this.Hospitalized = this.result.Hospitalized;
        this.Deaths = this.result.Deaths;
        this.NewConfirmed = this.result.NewConfirmed;
        this.NewRecovered = this.result.NewRecovered;
        this.NewHospitalized = this.result.NewHospitalized;
        this.NewDeaths = this.result.NewDeaths;

        setTimeout(() => {
          this.playAnimation();
        }, 200);
      });
    },
    theFormat(number) {
      return number.toFixed(0);
    },
    completed() {      
      this.scaleClass = true;
    },
    playAnimation() {      
      this.scaleClass = false;
      this.$refs.Confirmed.play();
      this.$refs.Confirmed.play();
      this.$refs.Recovered.play();
      this.$refs.Hospitalized.play();
      this.$refs.Deaths.play();
      this.$refs.NewConfirmed.play();
      this.$refs.NewRecovered.play();
      this.$refs.NewHospitalized.play();
      this.$refs.NewDeaths.play();
    }
  },
  created() {
    this.summary();
  }
};
</script>