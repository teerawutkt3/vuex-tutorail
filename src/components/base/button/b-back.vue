<template>
    <Button color="secondary" :id="this.id" :click="this.click">Back</Button>
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