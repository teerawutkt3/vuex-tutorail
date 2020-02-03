<template>
    <b-row class="">
        <b-col cols="3"></b-col>
        <b-col cols="6">
            <table id="blog-table" class="table table-sm table-striped nowrap" width="100%">
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
                    <td md-numeric>{{index+1}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.description}}</td>
                    <td>
                        <b-edit :click="()=>{updateRow(index)}"/>&nbsp;
                        <b-delete :click="()=>{deleteRow(index)}"/>
                    </td>
                </tr>
                </tbody>
            </table>
        </b-col>
        <b-col cols="6"></b-col>
    </b-row>
</template>

<script>

    import {mapActions, mapGetters} from 'vuex'
    const $ = require('jquery');
    export default {
        name: 'blog-list',
        data() {
            return {
                fields: ['#', 'Title', 'Description', ''],
                items: this.blog
            }
        },
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
        },
        updated() {
            $("#blog-table").dataTable({
                searching: false,
                "scrollX": true
            })
        }

    }
</script>
