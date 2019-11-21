<template>
    <div class="blog-form">
        <input type="text" v-model="blog.idx">
        <input type="text" v-model="blog.title" placeholder="title">&nbsp;
        <input type="text" v-model="blog.description" placeholder="description">&nbsp;
        <span v-if="!blog.idx && blog.idx!==0"><button type="button" @click="save">Save</button></span>
        <span v-else><button type="button" @click="update">Update</button></span>
        <button type="button" @click="clear">Clear</button>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex"

    export default {
        name: 'blog-form',
        methods: {
            ...mapActions({
                setBlog: "blog/setBlog",
                updateBlog: "blog/updateBlog",
                clearForm: "blog/clearForm"
            }),
            save() {
                this.setBlog({
                    title: this.blog.title,
                    description: this.blog.description
                })
                this.clear()
            },
            update() {
                this.updateBlog(this.blog)
                this.clear()
            },
            clear() {
                this.clearForm()
            }
        },
        computed: {
            ...mapGetters({
                blog: 'blog/getBlog',
            })
        }
    }
</script>
