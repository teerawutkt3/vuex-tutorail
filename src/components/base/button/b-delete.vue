<template>
    <Button color="danger" :id="this.id" :click="this.click">Delete</Button>
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