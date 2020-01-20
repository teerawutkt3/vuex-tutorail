<template>
    <Button name="Print" color="info" :id="this.id" :click="this.click"/>
</template>

<script>
    import Button from './button'

    export default {
        name: 'b-print',
        props: {
            click: {
                type: Function
            },
            id: String
        },
        components: {
            Button
        }
    }
</script>

<style>

</style>