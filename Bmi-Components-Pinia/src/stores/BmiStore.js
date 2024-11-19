import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useBmiStore = defineStore('bmi', () => {
    // default height and weight is 0
    const bmi = ref({height: 0, weight: 0})

    // this function updates the height and weight object to the new inputted data
    function addNewBmi(newBmi) {
        bmi.value = newBmi
    }

    // return
    return {
        addNewBmi,
        bmi,


    }
})