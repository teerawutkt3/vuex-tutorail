<template>
    <b-button size="sm" :type="type" :id="id" :variant="color" @click="click">{{name}}</b-button>
</template>

<script>
    export default {
        name: "base-button",
        props: {
            click: {
                type: Function,
                default: ()=>{}
            },
            name: String,
            color: String,
            id: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'button'
            }
        }
    };
</script>
