<template>
  <h1>Boodschappen Opdracht.</h1> 
  <h2 class="three">VUE 3</h2>
  <hr>
  <Table />
</template>

<script setup>
import Table from './components/Table.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin: 2% auto 2% auto;
  
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
</style>
