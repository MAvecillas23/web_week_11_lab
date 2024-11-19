<script setup>
import { ref } from 'vue'
import { useBmiStore} from "../stores/BmiStore.js"


const bmiStore = useBmiStore()

const userHeight = ref(0)
const userWeight = ref(0)

bmiStore.height = userHeight.value
bmiStore.weight = userWeight.value


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
