<template>
    <Button name="Reset" color="secondary" :id="this.id" :click="this.click"/>
</template>

<script>
    import Button from './button'
    export default {
        name:'b-reset',
        props: {
            click: {
                type: Function
            },
            id: String
        },
        components:{
            Button
        }
    }
</script>

<style>

</style>