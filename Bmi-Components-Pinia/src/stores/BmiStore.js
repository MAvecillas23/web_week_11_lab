import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useBmiStore = defineStore('bmi', () => {
    // stores userHeight and Weight that connects to BMIF... reactive data automatically updates when user changes input data
    const userHeight = ref(0)
    const userWeight = ref(0)
    let bmi = 0 // bmi will be 0 for now

    // computed property to calculate BMI
    const calculateBmi = computed( () => {
        // to avoid NaN to be displayed on page... if both userWeight and userHeight are 0
        // bmi will return 0
        if (userHeight.value === 0 && userWeight.value === 0) {
            bmi = 0
            return bmi
        } else {
            // else calculate bmi like normal
            bmi = userWeight.value / (userHeight.value * userHeight.value)
            return bmi
        }
    })

    // return to components
    return {
        userHeight,
        userWeight,
        calculateBmi


    }
})