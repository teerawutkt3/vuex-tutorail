<template>
  <Button name="Save" color="success" :type="type" :id="this.id" :click="this.click" />
</template>

<script>
import Button from './button'
export default {
    name:'b-save',
  props: {
    click: {
      type: Function,
      default:()=>{}
    },
    id: {
       type:String,
      default: 'save'
    },
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