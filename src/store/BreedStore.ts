import axios from "axios";
import { defineStore } from "pinia";
import { BreedsTypeApi } from "../types/apiFetchesType";

export const useBreedStore = defineStore({
    id: 'breed',
    state: () => ({
        breeds: [] as String[],
    }),
    getters: {
        getBreeds(state){
            return state.breeds
        }
    },
    actions: {
        async fetchBreeds() {
          try {
            const data: BreedsTypeApi = await axios.get('https://dog.ceo/api/breeds/list')
            if(data.status === "success"){
                this.breeds = data.message 
            }
            }
            catch (error) {
                console.log(error)
            }
        }
    }
})