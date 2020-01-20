<template>
  <Button name="บันทึก" color="success" :type="type" :id="this.id" :click="this.click" />
</template>

<script>
import Button from './button'
export default {
    name:'b-save',
  props: {
    click: {
      type: Function
    },
    id: String,
    type:{
      type:String,
      default: 'button'
    }
  },
    components:{
        Button
    }
}
</script>

<style>

</style>