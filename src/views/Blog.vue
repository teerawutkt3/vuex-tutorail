<template>
    <div class="blog">
        <h1>Blog</h1>
        <br/>
        <Form/>
        <br/>
        <br/>
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
