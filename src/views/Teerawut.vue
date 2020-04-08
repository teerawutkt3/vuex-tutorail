<template>
  <div id="page-top">
    <nav class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top" id="mainNav">
      <div class="container">
        <a
          class="navbar-brand js-scroll-trigger"
          v-scroll-to="'#page-top'"
          href="#page-top"
        >Teerawut Profile</a>
        <button
          class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-warning text-white rounded"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <a
                v-scroll-to="{ el: '#skill', offset: -100 }"
                class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#skill"
              >Skills</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a
                v-scroll-to="{ el: '#about', offset: -100 }"
                class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#about"
              >About</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a
                v-scroll-to="{ el: '#contact', offset: -100 }"
                class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#contact"
              >Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Masthead-->
    <header class="masthead bg-warning text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        <!-- Masthead Avatar Image-->
        <img
          class="masthead-avatar mb-5 rounded-circle"
          src="@/assets/my.jpg"
          alt
        />
        <!-- <img
          class="masthead-avatar mb-5"
          src="@/assets/startbootstrap-freelancer-gh-pages/assets/img/avataaars.svg"
          alt
        /> -->
        <!-- Masthead Heading-->
        <h1 class="masthead-heading text-uppercase mb-0">Teerawut Kulrittichai</h1>
        <!-- Icon Divider-->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fa fa-laptop"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Masthead Subheading-->
        <p class="masthead-subheading font-weight-light mb-0">Web Delveloper</p>
      </div>
    </header>
    <!-- Portfolio Section-->
    <!-- <div style="padding-bottom:100px" id="portfolio"></div> -->
    <section class="page-section portfolio" id="skill">
      <div class="container">
        <!-- Portfolio Section Heading-->
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Skills</h2>
        <!-- Icon Divider-->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fa fa-star-o"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Skill Grid Items-->
        <div class="row">
          <!-- java -->
          <div class="col-md-4 col-lg-2 mb-5">
            <div class="portfolio-item mx-auto" v-b-modal="'javaModal'">
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" >
                <div class="portfolio-item-caption-content text-center text-white"> <i class="fa fa-plus fa-3x"></i> </div>
              </div>
              <img class="img-fluid" src="../assets/skills/java.jpeg" width="100%"/>
            </div>
          </div>
          <!-- sql -->
          <div class="col-md-4 col-lg-2 mb-5">
            <div class="portfolio-item mx-auto" v-b-modal="'sqlModal'">
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" >
                <div class="portfolio-item-caption-content text-center text-white"> <i class="fa fa-plus fa-3x"></i> </div>
              </div>
              <img class="img-fluid" src="../assets/skills/sql.jpg" width="100%"/>
            </div>
          </div>
          <!-- php -->
          <div class="col-md-4 col-lg-2 mb-5">
            <div class="portfolio-item mx-auto" v-b-modal="'phpModal'">
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" >
                <div class="portfolio-item-caption-content text-center text-white"> <i class="fa fa-plus fa-3x"></i> </div>
              </div>
              <img class="img-fluid" src="../assets/skills/php.png" width="100%"/>
            </div>
          </div>
          <!-- nodejs -->
          <div class="col-md-4 col-lg-2 mb-5">
            <div class="portfolio-item mx-auto" v-b-modal="'nodejsModal'">
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" >
                <div class="portfolio-item-caption-content text-center text-white"> <i class="fa fa-plus fa-3x"></i> </div>
              </div>
              <img class="img-fluid" src="../assets/skills/nodejs.png" width="100%"/>
            </div>
          </div>
          <!-- js -->
          <div class="col-md-4 col-lg-2 mb-5">
            <div class="portfolio-item mx-auto" v-b-modal="'jsModal'">
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" >
                <div class="portfolio-item-caption-content text-center text-white"> <i class="fa fa-plus fa-3x"></i> </div>
              </div>
              <img class="img-fluid" src="../assets/skills/js.png" width="100%"/>
            </div>
          </div>
          <!-- css -->
          <div class="col-md-4 col-lg-2 mb-5">
            <div class="portfolio-item mx-auto" v-b-modal="'cssModal'">
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" >
                <div class="portfolio-item-caption-content text-center text-white"> <i class="fa fa-plus fa-3x"></i> </div>
              </div>
              <img class="img-fluid" src="../assets/skills/css.png" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section-->
    <!-- <div style="margin-bottom:100px" id="about"></div> -->
    <section class="page-section bg-warning text-white" id="about">
      <div class="container">
        <!-- About Section Heading-->
        <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
        <!-- Icon Divider-->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fa fa-star-o"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- About Section Content-->
        <div class="row">
          <div class="col-lg-4 ml-auto">
            <p
              class="lead"
            >Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div class="col-lg-4 mr-auto">
            <p
              class="lead"
            >You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
          </div>
        </div>
        <!-- About Section Button-->
        <div class="text-center mt-4">
          <a
            class="btn btn-xl btn-outline-light"
            href="https://startbootstrap.com/themes/freelancer/"
          >
            <i class="fas fa-download mr-2"></i>Free Download!
          </a>
        </div>
      </div>
    </section>
    <!-- Contact Section-->
    <!-- <div style="margin-bottom:100px" id="contact"></div> -->
    <section class="page-section" id="contact">
      <div class="container">
        <!-- Contact Section Heading-->
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <!-- Icon Divider-->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fa fa-star-o"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Contact Section Form-->
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.-->
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Name</label>
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Name"
                    required="required"
                    data-validation-required-message="Please enter your name."
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Email Address</label>
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    required="required"
                    data-validation-required-message="Please enter your email address."
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Phone Number</label>
                  <input
                    class="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required="required"
                    data-validation-required-message="Please enter your phone number."
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Message</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="5"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter a message."
                  ></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <div class="form-group">
                <button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer-->
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <!-- Footer Location-->
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Location</h4>
            <p class="lead mb-0">
              2215 John Daniel Drive
              <br />Clark, MO 65243
            </p>
          </div>
          <!-- Footer Social Icons-->
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Around the Web</h4>
            <a class="btn btn-outline-light btn-social mx-1" href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a class="btn btn-outline-light btn-social mx-1" href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a class="btn btn-outline-light btn-social mx-1" href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a class="btn btn-outline-light btn-social mx-1" href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
          <!-- Footer About Text-->
          <div class="col-lg-4">
            <h4 class="text-uppercase mb-4">About Freelancer</h4>
            <p class="lead mb-0">
              Freelance is a free to use, MIT licensed Bootstrap theme created by
              <a
                href="http://startbootstrap.com"
              >Start Bootstrap</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
    <!-- Copyright Section-->
    <section class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Copyright © Your Website 2020</small>
      </div>
    </section>
    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)-->
    <div class="scroll-to-top d-lg-none position-fixed">
      <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal4"
      tabindex="-1"
      role="dialog"
      aria-labelledby="portfolioModal4Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">
              <i class="fas fa-times"></i>
            </span>
          </button>
          <div class="modal-body text-center">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <!-- Portfolio Modal - Title-->
                  <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                  <!-- Icon Divider-->
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fa fa-star-o"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <!-- Portfolio Modal - Image-->
                  <img
                    class="img-fluid rounded mb-5"
                    src="@/assets/startbootstrap-freelancer-gh-pages/assets/img/portfolio/game.png"
                    alt
                  />
                  <!-- Portfolio Modal - Text-->
                  <p
                    class="mb-5"
                  >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <button class="btn btn-primary" href="#" data-dismiss="modal">
                    <i class="fas fa-times fa-fw"></i>Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Portfolio Modal 5-->
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal5"
      tabindex="-1"
      role="dialog"
      aria-labelledby="portfolioModal5Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">
              <i class="fas fa-times"></i>
            </span>
          </button>
          <div class="modal-body text-center">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <!-- Portfolio Modal - Title-->
                  <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>
                  <!-- Icon Divider-->
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fa fa-star-o"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <!-- Portfolio Modal - Image-->
                  <img
                    class="img-fluid rounded mb-5"
                    src="@/assets/startbootstrap-freelancer-gh-pages/assets/img/portfolio/safe.png"
                    alt
                  />
                  <!-- Portfolio Modal - Text-->
                  <p
                    class="mb-5"
                  >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <button class="btn btn-primary" href="#" data-dismiss="modal">
                    <i class="fas fa-times fa-fw"></i>Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Portfolio Modal 6-->
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal6"
      tabindex="-1"
      role="dialog"
      aria-labelledby="portfolioModal6Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">
              <i class="fas fa-times"></i>
            </span>
          </button>
          <div class="modal-body text-center">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <!-- Portfolio Modal - Title-->
                  <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                  <!-- Icon Divider-->
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fa fa-star-o"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <!-- Portfolio Modal - Image-->
                  <img
                    class="img-fluid rounded mb-5"
                    src="@/assets/startbootstrap-freelancer-gh-pages/assets/img/portfolio/submarine.png"
                    alt
                  />
                  <!-- Portfolio Modal - Text-->
                  <p
                    class="mb-5"
                  >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <button class="btn btn-primary" href="#" data-dismiss="modal">
                    <i class="fas fa-times fa-fw"></i>Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modal java -->
    <b-modal id="javaModal" centered hide-footer>
      <template v-slot:modal-title>
        Java
      </template>
      <div class="d-block">
        <b-row class="justify-content-center">
          <b-col cols="4"><br><img src="../assets/skills/spring.png" width="100%"></b-col>
          <b-col cols="4"><img src="../assets/skills/struts.jpg" width="100%"></b-col>
          <b-col cols="4"><img src="../assets/skills/springdata.png" width="100%"></b-col>
          <b-col cols="4"><img src="../assets/skills/hibernate.png" width="100%"></b-col>
        </b-row>
      </div>
      <div class="text-center mt-5">
        <b-button @click="$bvModal.hide('javaModal')">Close</b-button>
      </div>
    </b-modal>
    <!-- modal sql -->
    <b-modal id="sqlModal" centered hide-footer>
      <template v-slot:modal-title>
        Sql
      </template>
      <div class="d-block text-center">
        <h3>Hello From This Modal!</h3>
      </div>
      <div class="text-center">
        <b-button class="mt-3" @click="$bvModal.hide('sqlModal')">Close Me</b-button>
      </div>
    </b-modal>
    <!-- modal phpModal -->
    <b-modal id="phpModal" centered hide-footer>
      <template v-slot:modal-title>
        Php
      </template>
      <div class="d-block text-center">
        <div class="d-block text-center">
            <b-row class="justify-content-center">
              <b-col cols="4"><img src="../assets/skills/yii2.jpg" width="100%"></b-col>
            </b-row>
          </div>
      </div>
      <div class="text-center mt-5">
        <b-button class="" @click="$bvModal.hide('phpModal')">Close</b-button>
      </div>
    </b-modal>
    <!-- modal nodejs -->
    <b-modal id="nodejsModal" centered hide-footer>
      <template v-slot:modal-title>
        Node Js
      </template>
        <div class="d-block text-center">
          <b-row class="justify-content-center">
            <b-col cols="4"><img src="../assets/skills/adonis.svg" width="100%"></b-col>
          </b-row>
        </div>
      <div class="text-center mt-5">
        <b-button @click="$bvModal.hide('nodejsModal')">Close</b-button>
      </div>
    </b-modal>
    <!-- modal js -->
    <b-modal id="jsModal" centered hide-footer>
      <template v-slot:modal-title>
        Js
      </template>
      <div class="d-block text-center">
          <div class="d-block text-center">
            <b-row class="justify-content-center">
              <b-col cols="4"><img src="../assets/skills/angular.png" width="100%"></b-col>
              <b-col cols="4"><br><img src="../assets/skills/vuejs.jpeg" width="100%"></b-col>
            </b-row>
          </div>
      </div>
      <div class="text-center">
        <b-button class="mt-5" @click="$bvModal.hide('jsModal')">Close</b-button>
      </div>
    </b-modal>
    <!-- modal css -->
    <b-modal id="cssModal" centered hide-footer>
      <template v-slot:modal-title>
        Css
      </template>
      <div class="d-block text-center">
        <div class="d-block text-center">
          <b-row class="justify-content-center">
            <b-col cols="4"><img src="../assets/skills/bootstrap.png" width="100%"></b-col>
            <b-col cols="4"><img src="../assets/skills/semantic.png" width="100%"></b-col>
          </b-row>
        </div>
      </div>
      <div class="text-center mt-5">
        <b-button  @click="$bvModal.hide('cssModal')">Close</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
const $ = require("jquery");
export default {
  data() {
    return {
      imgPath: [
        { src: "../assets/skills/bootstrap.png", alt: "bootstrap.png" },
        { src: "../assets/skills/vuejs.jpeg", alt: "vuejs.jpeg" },
        { src: "../assets/skills/adonis.svg", alt: "adonis.svg" },
        { src: "../assets/skills/spring.png", alt: "spring.png" },
        { src: "../assets/skills/sql.jpg", alt: "sql.jpg" },
        { src: "../assets/skills/yii2.jpg", alt: "yii2.jpg" },
        { src: "../assets/skills/angular.png", alt: "angular.png" },
        { src: "../assets/skills/struts.jpg", alt: "struts.jpg" },
        { src: "../assets/skills/semantic.png", alt: "semantic.png" },
      ]
    };
  },
  methods: {
    skillModal(idx) {
      $(`#skillModal${idx}`).modal("show");
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");
@import url("https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic");
@import url("../assets/startbootstrap-freelancer-gh-pages/css/styles.css");
</style>