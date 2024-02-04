import { defineStore } from "pinia"

export const useHomeStore = defineStore('Home', () => {
  const count = ref(0) 

  const add = () => {
    count.value++
    console.log('store -> count', count.value)
  }  
  
  return {
    count,
    add
  }
})