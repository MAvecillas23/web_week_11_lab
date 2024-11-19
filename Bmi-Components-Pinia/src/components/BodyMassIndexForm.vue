<script setup>
import { ref } from 'vue'

// access bmi store
import {useBmiStore} from "../stores/BmiStore.js";
const bmiStore = useBmiStore()

// connected to whatever user enters for height and weight
const userHeight = ref()
const userWeight = ref()

// when user presses the calculate button this function sends height and weight to BmiStore to be updated
function addNewBmi() {
  let newBmi = {height: userHeight.value, weight: userWeight.value }
  bmiStore.addNewBmi(newBmi)
}

</script>

<template>
  <div id="bmif">
    <!--    v-models for input height and weight, data is stored in their respective variables -->
    <h2>Enter your height and weight</h2>
    <label>Height in meters: </label><input v-model="userHeight">
    <br>
    <label>Weight in kilograms: </label><input v-model="userWeight">
    <br>
    <!--  v-on to tell the script when the user clicks the button -->
    <!--  v-on to tell the script when the user clicks the button -->
    <button v-on:click="addNewBmi()">Calculate</button>
  </div>
</template>

<style scoped>
#bmif {
  border: red 5px solid;
  padding: 20px
}

button {
  border: black 1px solid;
  margin: 10px;
}
</style>
