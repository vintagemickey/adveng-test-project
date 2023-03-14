import { defineStore } from 'pinia'
import axios from "axios"

export const useEventsStore = defineStore("event", {
    state: () => ({
        events: [],
        users: []
    }),
    getters: {
        getEvents(state){
            return state.events
        },
        getLoginUser(state){
            return state.users
        }
    },
    actions: {
        async fetchEvents() {
            try {
            const data = await axios.get('http://localhost:3000/events')
                this.events = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async fetchUsers() {
            try {
            const data = await axios.get('http://localhost:3000/users')
                this.users = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
})