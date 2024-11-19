<script setup>
import BodyMassIndexForm from "./components/BodyMassIndexForm.vue";
import { ref, computed } from 'vue'
import {useBmiStore} from "./stores/BmiStore.js";


const bmiStore = useBmiStore()
const height = bmiStore.bmi.height
const weight = bmiStore.bmi.weight


const bmi = computed( () => {
  return weight / (height * height)
})



</script>

<template>
  <div id="app-component">
    <h1>Body Mass Index Calculator</h1>
    <!--    get emitted data from BodyMassIndexForm using v-on and then calling the calculateBmi function-->
    <BodyMassIndexForm></BodyMassIndexForm>

    <!--bmi rounded to two decimal places-->
    <p> Your BMI is {{ bmi.toFixed(2) }}</p>
  </div>
</template>

<style scoped>
#app-component {
  border: blue 5px solid;
  padding: 40px
}

</style>
