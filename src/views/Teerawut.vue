<template>
  <div id="page-top">
    <nav class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top" id="mainNav">
      <div class="container">
        <a
          class="navbar-brand js-scroll-trigger"
          v-scroll-to="'#page-top'"
          href="#page-top"
        >Teerawut Profile</a>
<!--        <button-->
<!--          class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-warning text-white rounded"-->
<!--          type="button"-->
<!--          data-toggle="collapse"-->
<!--          data-target="#navbarResponsive"-->
<!--          aria-controls="navbarResponsive"-->
<!--          aria-expanded="false"-->
<!--          aria-label="Toggle navigation"-->
<!--        >-->
<!--          Menu-->
<!--          <i class="fas fa-bars"></i>-->
<!--        </button>-->
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
          class="masthead-avatar mb-5 rounded-circle border border-light"
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
        <p class="masthead-subheading font-weight-light mb-0">Web Developer</p>
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
            <i class="fa fa-code"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Skill Grid Items-->
        <div class="row">
          <!-- java -->
          <div class="col-4 col-md-4 col-lg-2 mb-5" v-for="(img, index) in imgPath" :key="index">
            <img v-bind:src="img.src" width="100%">
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
              Chiang Mai
              San Sai District
              <br />
              50210
            </p>
          </div>
          <!-- Footer Social Icons-->
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Around the Web</h4>
            <a class="btn btn-outline-light btn-social mx-1" target="_blank" href="https://www.facebook.com/100002071176546">
              <i class="fa fa-facebook"></i>
            </a>
<!--            <a class="btn btn-outline-light btn-social mx-1" href="#">-->
<!--              <i class="fa fa-twitter"></i>-->
<!--            </a>-->
<!--            <a class="btn btn-outline-light btn-social mx-1" href="#">-->
<!--              <i class="fa fa-linkedin"></i>-->
<!--            </a>-->
            <a class="btn btn-outline-light btn-social mx-1" target="_blank" href="https://www.instagram.com/top_teerawutkt/">
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
  </div>
</template>
<script>
const $ = require("jquery");
export default {
  data() {
    return {
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        width: 600,
        height: 400,
        class: 'my-5'
      },
      imgPath: [
        { src: require("@/assets/skills/spring.png"), alt: "spring.png" },
        { src: require("@/assets/skills/spring-security.png"), alt: "springdata.png"},
        { src: require("@/assets/skills/springdata.png"), alt: "springdata.png"},
        { src: require("@/assets/skills/hibernate.png"), alt: "hibernate.png"},
        { src: require("@/assets/skills/thymeleaf.png"), alt: "hibernate.png"},
        { src: require("@/assets/skills/jsp.png"), alt: "hibernate.png"},
        { src: require("@/assets/skills/struts.jpg"), alt: "struts.jpg" },
        { src: require("@/assets/skills/yii2.jpg"), alt: "yii2.jpg" },
        // { src: require("@/assets/skills/adonis.svg"), alt: "adonis.svg" },
        { src: require("@/assets/skills/oracle.png"), alt: "sql.jpg" },
        { src: require("@/assets/skills/mysql.png"), alt: "sql.jpg" },
        { src: require("@/assets/skills/vuejs.jpeg"), alt: "vuejs.jpeg" },
        { src: require("@/assets/skills/angular.png"), alt: "angular.png"},
        { src: require("@/assets/skills/bootstrap.png"), alt: "bootstrap.png" },
        { src: require("@/assets/skills/semantic.png"), alt: "semantic.png" },
        { src: require("@/assets/skills/DigitalOcean.png"), alt: "semantic.png" },
        { src: require("@/assets/skills/jira.png"), alt: "semantic.png" },
      ]
    };
  },
  methods: {
    skillModal(idx) {
      $(`#skillModal${idx}`).modal("show");
    },
    getImageUrl(idx) {
      // https://picsum.photos/${width}/${height}/?image=${imageId}
      return this.imgPath[idx].src

    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");
@import url("https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic");
@import url("../assets/startbootstrap-freelancer-gh-pages/css/styles.css");
</style>