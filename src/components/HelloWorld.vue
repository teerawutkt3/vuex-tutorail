<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Apps that will make your life more organized.
    </p>
    <h3>System</h3>
    <ul>
      <li><router-link class="text-warning" href="javascript:void(0)" to="/bill">Bill Management</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
