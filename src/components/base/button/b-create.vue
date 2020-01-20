<template>
    <Button name="Create" color="success" :id="this.id" :click="this.click" />
</template>

<script>
    import Button from './button'
    export default {
        name:'b-create',
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