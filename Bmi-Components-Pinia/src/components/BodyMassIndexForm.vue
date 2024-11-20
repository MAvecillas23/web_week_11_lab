<script setup>

// access bmi store
import {useBmiStore} from "../stores/BmiStore.js";
import {storeToRefs} from "pinia";
const bmiStore = useBmiStore()

// connect userHeight and userWeight from BmiStore to the userHeight and userWeight v-model inputs in the template
// updates Bmi store everytime inputs change
const {userHeight, userWeight} = storeToRefs(bmiStore)

</script>

<template>
  <div id="bmif">
    <!--    v-models for input height and weight, data is stored in their respective variables -->
    <h2>Enter your height and weight</h2>
    <label>Height in meters: </label><input v-model="userHeight">
    <br>
    <label>Weight in kilograms: </label><input v-model="userWeight">
    <br>

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
