<template>
    <Button name="Cancel" color="secondary" :id="this.id" :click="this.click"/>
</template>

<script>
    import Button from './button'

    export default {
        name: 'b-cancel',
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

<style scoped>

</style>