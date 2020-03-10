<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/*.swal2-popup.swal2-modal.swal2-show {*/
/*  display: flex !important;*/
/*  margin-top: 72px !important;*/
/*}*/
.swal-overlay--show-modal .swal-modal {
  margin-bottom: 170px;
  opacity: 1;
  pointer-events: auto;
  box-sizing: border-box;
  -webkit-animation: showSweetAlert .3s;
  animation: showSweetAlert .3s;
  will-change: transform;
}
ol.breadcrumb {
  font-size: 13px;
  padding-bottom: 6px;
  padding-top: 6px;
}

/*==> font start */
@import url('https://fonts.googleapis.com/css?family=Prompt&display=swap');
html, body {
  font-family: 'Prompt';
}
#app {
  font-family: 'Prompt' , sans-serif;
}
/*==> font  end */
</style>
