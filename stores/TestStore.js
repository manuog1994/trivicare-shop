import { defineStore } from 'pinia'

export const useTestStore = defineStore({
    state: () => ({
        message: 'Hello World'
    })
})