<template>
    <div class="blog">
        <h1 class="text-center mb-5">Blog</h1>

        <Form/>
        <List/>
    </div>
</template>

<script>
    import Form from "../components/blog/Form.vue";
    import List from "../components/blog/List.vue";

    export default {
        name: "blog",
        components: {
            Form,
            List
        }
    };
</script>
