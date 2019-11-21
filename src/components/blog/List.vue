<template>
    <div class="blog-list">
        <table>
            <thead>
            <tr>
                <td>#</td>
                <td>Title</td>
                <td>Description</td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in blog.blogs" :key="index">
                <td>{{index + 1}}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.description }}</td>
                <td>
                    <button type="button" @click="deleteRow(index)">delete</button>
                    <button type="button" @click="updateRow(index)">update</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'blog-list',
        methods: {
            ...mapActions({
                removeBlog: "blog/removeBlog",
                getBlogByIdx: "blog/getBlogByIdx"
            }),
            deleteRow(index) {
                this.removeBlog(index)
            },
            updateRow(index) {
                this.getBlogByIdx(index)
            }
        },
        computed: {
            ...mapGetters({
                blog: 'blog/getBlog',
            }),
        }
    }
</script>
