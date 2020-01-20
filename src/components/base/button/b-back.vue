<template>
    <Button name="Back" color="secondary" :id="this.id" :click="this.click"/>
</template>

<script>
    import Button from './button'

    export default {
        name: 'b-back',
        props: {
            click: {
                type: Function
            },
            id: String
        },
        components: {
            Button
        },
    }
</script>

<style>

</style>