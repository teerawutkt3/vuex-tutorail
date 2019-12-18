<template>
  <div class="">
    <b-row class="text-center">
      <b-col cols="3"></b-col>
      <b-col cols="6">
        <b-row>
          <b-col cols="6">
            <b-input id="title" v-model="blog.title" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Title" ></b-input>
          </b-col>
          <b-col cols="6">
            <b-input id="description" v-model="blog.description" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Description" ></b-input>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="3"></b-col>
    </b-row>
    <!-- <div class="md-layout-item md-layout md-gutter"></div>
    <div class="md-layout-item md-layout md-gutter"> -->
      <!-- <div class="md-layout-item">
        <md-field :class="validateClass">
          <label>Title</label>
          <md-input v-model="blog.title"></md-input>
          <span class="md-error">Enter title</span>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-field :class="validateClass">
          <label>Description</label>
          <md-input v-model="blog.description"></md-input>
          <span class="md-error">Enter Description</span>
        </md-field>
      </div> -->
      <div class="mt-2">
        <span v-if="!blog.idx && blog.idx!==0">
          <b-button @click="save" size="sm" variant="success" >Save</b-button>
        </span>
        <span v-else>
          <b-button @click="update" size="sm" variant="primary">Update</b-button>
        </span>&nbsp;
        <b-button @click="clear" size="sm"  variant="secondary">Clear</b-button>
      </div>
    </div>
    <!-- <div class="md-layout-item md-layout md-gutter"></div>
  </div> -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "blog-form",
  data() {
    return {
      validForm: false
    };
  },

  methods: {
    ...mapActions({
      setBlog: "blog/setBlog",
      updateBlog: "blog/updateBlog",
      clearForm: "blog/clearForm"
    }),
    save() {
      if (!this.validate()) {
        this.setBlog({
          title: this.blog.title,
          description: this.blog.description
        });
        this.clear();
      }
    },
    update() {
      this.updateBlog(this.blog);
      this.clear();
    },
    clear() {
      this.clearForm();
      this.validForm = false;
    },
    validate() {
      this.validForm = !this.blog.title || !this.blog.description;
      return this.validForm;
    }
  },
  computed: {
    ...mapGetters({
      blog: "blog/getBlog"
    }),
    validateClass() {
      return {
        "md-invalid": this.validForm
      };
    }
  }
};
</script>
