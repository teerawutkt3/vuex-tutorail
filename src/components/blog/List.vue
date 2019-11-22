<template>
    <div class="md-layout md-gutter">
        <div class="md-layout-item  md-size-15 lg-size-15 xl-size-15"></div>
        <div class="md-layout-item  md-size-70 lg-size-70 xl-size-70">
            <md-table>
                <md-table-row>
                    <md-table-head md-numeric>#</md-table-head>
                    <md-table-head>Title</md-table-head>
                    <md-table-head>Description</md-table-head>
                    <md-table-head></md-table-head>
                </md-table-row>
                <md-table-row v-for="(item, index) in blog.blogs" :key="index">
                    <md-table-cell md-numeric>{{index+1}}</md-table-cell>
                    <md-table-cell>{{item.title}}</md-table-cell>
                    <md-table-cell>{{item.description}}</md-table-cell>
                    <md-table-cell>
                        <md-button class="md-icon-button md-raised md-dense md-primary" @click="updateRow(index)">
                            <md-icon>edit</md-icon>
                        </md-button>
                        <md-button class="md-icon-button md-raised md-dense md-accent" @click="deleteRow(index)">
                            <md-icon>delete</md-icon>
                        </md-button>
                    </md-table-cell>
                </md-table-row>
            </md-table>
        </div>
        <div class="md-layout-item md-size-15 lg-size-15 xl-size-15"></div>
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
        },

    }
</script>
