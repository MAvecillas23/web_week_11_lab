<script setup>
import BodyMassIndexForm from "./components/BodyMassIndexForm.vue";
import {useBmiStore} from "./stores/BmiStore.js";

// connect to bmi store
import {storeToRefs} from "pinia";
const bmiStore = useBmiStore()

// get calculated bmi value from BmiStore
const { calculateBmi } = storeToRefs(bmiStore)

</script>
<template>
  <div id="app-component">
    <h1>Body Mass Index Calculator</h1>

    <BodyMassIndexForm></BodyMassIndexForm>

<!--    display bmi to page -->
    <p> Your BMI is {{ calculateBmi.toFixed(2) }}</p>
  </div>
</template>
<style scoped>
#app-component {
  border: blue 5px solid;
  padding: 40px
}

</style>
