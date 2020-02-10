<template>
  <div class="mb-5 ">
    <b-row class="text-center">
      <b-col cols="3"></b-col>
      <b-col cols="6">
        <b-row>
          <b-col cols="6">
            <b-input
              id="title"
              v-model="blog.title"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Title"
            ></b-input>
          </b-col>
          <b-col cols="6">
            <b-input
              id="description"
              v-model="blog.description"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Description"
            ></b-input>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="3"></b-col>
    </b-row>
    <div class="mt-2 text-center">
      <span v-if="!blog.idx && blog.idx!==0">
        <b-save :click="save" /> &nbsp;
      </span>
      <span v-else>
        <b-save id="update" :click="update" /> &nbsp;
      </span>&nbsp;
      <b-reset :click="clear"></b-reset>

    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";
  import BReset from "../base/button/b-reset";

  export default {
  name: "blog-form",
    components: {BReset},
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
