<template>
  <div>
    <h1>Form</h1>
    <b-row>
      <b-col md="3" sm="2" lg="2">
        <b-form-group>Title</b-form-group>
        <b-form-group>Amount</b-form-group>
        <b-form-group>Description</b-form-group>
      </b-col>
      <b-col md="5" sm="8" lg="4">
        <b-form-group>
          <input type="text"  v-model="form.title" class="form-control form-control-sm" placeholder="Enter title" />
        </b-form-group>
        <b-form-group>
          <input type="number"  v-model="form.amount"  class="form-control form-control-sm" placeholder="Enter amount" />
        </b-form-group>
        <b-form-group>
          <textarea   v-model="form.description" class="form-control" rows="5" placeholder="Enter description"></textarea>
        </b-form-group>
        <b-save :click="onSave" />&nbsp;
        <b-reset :click="onReset" />&nbsp;
        <b-back :click="goBack" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import AxiosService from '../../common/service/axios-service'
import router from '../../router'
import swal from 'sweetalert';
const axios = new AxiosService()
export default {
  name: "BillForm",
  data() {
    return {
      form: {
        title: "",
        description: "",
        amount: 0.0
      },
      show: true
    };
  },
  methods: {
    goBack() {
        router.push({path:'/bill'})
    },
    onReset() {
      this.form =  {
        title: "",
        description: "",
        amount: 0.0
      }  
    },
    onSave(){
        axios.doPost('/api/bill/',this.form).then(()=>{
            swal('Save', `success`,'success')
            router.push({path:'/bill'})
        })
    }
  },
};
</script>

<style scoped>
</style>