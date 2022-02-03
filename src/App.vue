<template>
<div class="header">
  <h1>Boodschappen Opdracht.</h1> 
  <h2 class="three">VUE 3</h2>
</div>
  <Table />
  <div class="footer">
    <span class="footerText">Powerd By: <span class="test">Quadrillion hours of programming</span></span>
  </div>
</template>

<script setup>
import Table from './components/Table.vue';
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin: 0;
  padding: 0;
}
.header {
  border-bottom: 2px solid;
  padding: 1%;
}
.footer {
  height: 5%;
  width: 100%;
  background: orangered;
  position: fixed;
  bottom: 0;
  left: 0;
}
.footerText {
  color: white;
  position: relative;
  top: 50%;
}
h1, h2, h4{
  margin: 0 ;
}
.three{
  font-size: 250%;
  color: orangered;
}
hr{
  width: 60%;
  border: solid 1px;
  border-radius: 2px;
}
.test {
  font-style: italic;
  text-decoration: underline;
}
</style>
