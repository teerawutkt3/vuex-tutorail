<template>
    <div class="card">
        <img v-if="imgShow" class="card-img-top" :src="imgLink" alt="Card image cap">
        <div class="card-header bg-default" v-if="header">
            <slot name="header"></slot>
        </div>
        <div class="card-body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "base-card",
        props:{
            header:{
                type: Boolean,
                default: true
            },
            imgShow: {
                type:Boolean,
                default: false
            },
            imgLink:{
                type: String,
                default: 'https://picsum.photos/600/300/?image=25'
            }
        }
    }
</script>

<style scoped>

</style>