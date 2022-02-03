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
          <td @click="editProduct(index)" class="actionButtons">
            edit
          </td>
          <td @click="delProduct(index)" class="actionButtons">
            Remove
          </td>
        </tr>
      </table>
      <div class="totalprice">
        <h2>Total-Price: &euro;{{endTotal}}</h2>
      </div>
      <hr>
      <h3>{{anouncement.form}}</h3>
      <div v-if="!(anouncement.form == text.loader)" class="addProduct">
        <div>
          <h4>Enter Name</h4>
          <input v-model="item.name" type="text">
        </div>
        <div>
          <h4>Enter Price</h4>
          <input v-model="item.price" type="number" min="0" placeholder="0">
        </div>
         <div>
          <h4>Enter Amount</h4>
          <input v-model="item.amount" type="number" min="0" step="1" placeholder="0">
        </div>
      </div>
      <div>
        <button @click="ProductManager"><h2>{{buttonState}}</h2></button>
      </div> 
        <span v-if="form.state === 1" @click="form.state = 0, resetText()" >I want to add product.</span>
  </div>
  {{item}}
</template>

<script setup>

import { reactive, ref } from "vue";
import { computed } from "vue";
import { Item, groceries } from "../Data/items";

const item = reactive({
  id: null,
  name: '',
  price: null,
  amount: null,
})
const form = reactive({
  state: 0,
})
const text = {
  stock: 'Enter new product',
  error: 'You need to add a product',
  loader: 'Adding product: Loading...',
  editor: 'Edit your product',
  addButton: 'Add-Product',
  editButton: 'Edit-Product',
}

const anouncement = reactive({
  form: text.stock,
  button: text.addButton,
})
const items = ref(groceries);

const endTotal = computed(()=>{
  return items.value.map((item)=> {
    return  parseFloat(item.subTotal)
  }).reduce((last, current) => last + current).toFixed(2);
})
const buttonState = computed(()=>{
  return (form.state === 1)? text.editButton : text.addButton;
})
function resetText(){
  anouncement.form = text.stock
  item.id = null;
  item.name = '';
  item.price = null;
  item.amount = null;
}
function ProductManager(){
  if(item.name != ''){
    if(form.state === 0){
      items.value.push(new Item(item.name, item.price, item.amount));
    }
    else{
      items.value[item.id] = new Item(item.name, item.price, item.amount);
      form.state = 0;
    }
    anouncement.form = text.loader;
    setTimeout(resetText, 2000)
  }
  else{
    setTimeout(resetText, 3000)
    anouncement.form = text.error;
  }
}
function delProduct(index){
  items.value.splice(index, 1)
}
function editProduct(index){
  form.state = 1;
  anouncement.form = text.editor;
  item.id = index
  item.name = items.value[index].Name
  item.price = items.value[index].Price
  item.amount = items.value[index].Amount
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.component {
  width: 80%;
  margin: 2% 10% 2% 10%;
  align-items: center;
  justify-content: center;
}
table {
  margin-left: auto;
  margin-right: auto;
}
.totalprice {
  margin: 2%000;
  padding: 2%;
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
span {
  text-decoration: underline;
  font-style: italic;
}
span:hover {
  cursor: pointer;
  color: #111;
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
.actionButtons {
  border: solid 1px #333;
  background: none;
  border-radius: 2px;
  color: orangered;
  transition: 0.5;
}
.actionButtons:hover {
  transition: 0.5s;
  cursor: pointer;
  color: #333;
}
h2 {
  font-size: 250%;
}
th {
  font-size: 110%;
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
