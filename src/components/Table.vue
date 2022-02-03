<template>
  <div class="component">
      <table>
        <th>Product-Name</th>
        <th>Product-Price</th>
        <th>Product-Amount</th>
        <th>Product-Subtotal</th>
        <tr :key="index" v-for="(item, index) in items">
          <td>
            {{item.name}}
          </td>
           <td>
            &euro;{{item.price}}
          </td>
           <td>
            {{item.amount}}
          </td>
          <td>
            &euro;{{item.subTotal}}
          </td>
          <td class="delete">
            Remove
          </td>
        </tr>
      </table>
      <div class="addProduct">
        <div>
          <h4>Enter Name</h4>
          <input type="text">
        </div>
        <div>
          <h4>Enter Price</h4>
          <input type="number" min="0">
        </div>
         <div>
          <h4>Enter Amount</h4>
          <input type="number" min="0" step="1">
        </div>
      </div> 
        <button><h2>Add Product</h2></button>
  </div>
  {{endTotal}}
</template>

<script setup>

import { ref } from "vue";
import { computed } from "vue";
import Items from "../Data/items";

const items = ref(Items);

const endTotal = computed(()=>{
  
return "test"
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.component {
  width: 80%;
  margin: 5% 10% 5% 10%;
  align-items: center;
  justify-content: center;
}
table {
  margin-left: auto;
  margin-right: auto;
}
.addProduct {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5% 0 0 0 ;
}
.addProduct > div {
  padding: 10px
}
button {
  margin: 2% 000;
  padding: 2%;
  border: solid 2px #333;
  background: none;
  border-radius: 5px;
  color: orangered;
  transition: 0.5s;
}
button:hover {
  padding: 2% 1% 2% 1%;
  transition: 0.5s;
  cursor: pointer;
  color: #333;
}
.delete {
  border: solid 1px #333;
  background: none;
  border-radius: 2px;
  color: orangered;
  transition: 0.5;
}
.delete:hover {
  transition: 0.5s;
  cursor: pointer;
  color: #333;
}
h2 {
  font-size: 250%;
}
th {
  font-size: 120%;
  padding: 5px 10px 5px 10px;
}
table > tr > td{
  padding: 5px 10px 5px 10px;
}

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
