<script setup>
import BodyMassIndexForm from "./components/BodyMassIndexForm.vue";
import { computed } from 'vue'
import {useBmiStore} from "./stores/BmiStore.js";

// connect to bmi store
import {storeToRefs} from "pinia";
const bmiStore = useBmiStore()

// get bmi object data from bmi store
const { bmi } = storeToRefs(bmiStore)

// computed property to calculate BMI
const calculateBmi = computed( () => {
  return (bmi.value.weight / (bmi.value.height * bmi.value.height)).toFixed(2)
})


</script>

<template>
  <div id="app-component">
    <h1>Body Mass Index Calculator</h1>
    <!--    get emitted data from BodyMassIndexForm using v-on and then calling the calculateBmi function-->
    <BodyMassIndexForm></BodyMassIndexForm>

<!--    display bmi -->
    <p> Your BMI is {{ calculateBmi }}</p>
  </div>
</template>

<style scoped>
#app-component {
  border: blue 5px solid;
  padding: 40px
}

</style>
