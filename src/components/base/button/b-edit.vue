<template>
    <Button name="Edit" color="warning" :id="this.id" :click="this.click"/>
</template>

<script>
    import Button from './button'

    export default {
        name: 'b-edit',
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