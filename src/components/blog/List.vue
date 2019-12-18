<template>
 <b-row class="">
      <b-col cols="3"></b-col>
      <b-col cols="6">
           <table class="table table-sm table-striped">
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
                        <b-button variant="warning" @click="updateRow(index)">
                            <md-icon>edit</md-icon>
                        </b-button>&nbsp;
                        <b-button variant="danger" @click="deleteRow(index)">
                            <md-icon>delete</md-icon>
                        </b-button>
                    </td>
                </tr>
               </tbody>
           </table>
      </b-col>
      <b-col cols="6"></b-col>
 </b-row>
    <!-- <div class="md-layout md-gutter">
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
    </div> -->
</template>

<script>

    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'blog-list',
        data(){
            return {
                fields:['#', 'Title', 'Description', ''],
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

    }
</script>
