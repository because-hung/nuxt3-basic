// import { ref } from 'vue' -> 在 nuxt 3 裡面會 auto import 了 不用再手動 import

export const useAddCount = () => {
  const count = ref(0)
  const addCount = () => {
    count.value++;
  }
  return {
    count,
    addCount
  }
}
