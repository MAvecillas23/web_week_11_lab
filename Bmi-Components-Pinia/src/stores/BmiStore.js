import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useBmiStore = defineStore('bmi', () => {
    let bmi = ref({height: 0, weight: 0})



    return {
        bmi


    }
})