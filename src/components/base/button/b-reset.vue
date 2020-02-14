<template>
    <Button color="secondary" :id="this.id" :click="this.click">Reset</Button>
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