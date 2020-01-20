<template>
    <Button name="Delete" color="danger" :id="this.id" :click="this.click" />
</template>

<script>
    import Button from './button'
    export default {
        name:'b-delete',props: {
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