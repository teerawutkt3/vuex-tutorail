<template>

    <div class="md-layout md-gutter">
        <div class="md-layout-item md-layout md-gutter"></div>
        <div class="md-layout-item md-layout md-gutter">
            <div class="md-layout-item">
                <md-field>
                <label>Title</label>
                <md-input v-model="blog.title"></md-input>
            </md-field>
            </div>
            <div class="md-layout-item">
                <md-field>
                <label>Description</label>
                <md-input v-model="blog.description"></md-input>
            </md-field>
            </div>
            <div class="md-layout-item">
                <span v-if="!blog.idx && blog.idx!==0"><md-button @click="save" class="md-raised md-primary">Save</md-button></span>
                <span v-else><md-button @click="update" class="md-raised md-accent">Update</md-button></span>
                <md-button @click="clear" class="md-raised md-accent">Clear</md-button>
            </div>
        </div>
        <div class="md-layout-item md-layout md-gutter"></div>
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
