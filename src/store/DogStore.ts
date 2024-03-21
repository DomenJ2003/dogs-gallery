import axios from "axios";
import { defineStore } from "pinia";
import { DogsApiType, BreedsApiType } from "../types/apiFetchesType";

export const useDogStore = defineStore({
    id: 'dog',
    state: () => ({
        dogImgUrls: [] as String[],
        selectedDogImg: "" as String,
        breeds: [] as String[],
        selectedBreed: "" as String,
        loading: false as Boolean
    }),
    getters: {
        getBreeds(state){
            return state.breeds;
        },
        getDogImgUrls(state){
            return state.dogImgUrls;
        },
        getSelectedBreed(state){
            return state.selectedBreed;
        },
        getSelectedDogImg(state){
            return state.selectedBreed;
        }
    },
    actions: {
        setSelectedImg(dogImg: String){
            this.imgUrl = dogImg;
        },
        setSelectedBreed(selectedBreed: String){
            this.selectedBreed = selectedBreed;
        },
        async fetchDogs() {
          try {
            this.loading = true;
            const data: DogsApiType = await axios.get('https://dog.ceo/api/breeds/list')
            if(data.status === "success"){
                this.imgUrls = data.message 
            }
            this.loading = false;
        }
        catch (error) {
            console.log(error);
            this.loading = false;
        }
        },
        async fetchDogsByBreed() {
            try {
                this.loading = true;
                const data: DogsApiType = await axios.get(`https://dog.ceo/api/breeds/${this.selectedBreed}/list`)
                if(data.status === "success"){
                    this.imgUrls = data.message;
                    this.selectedImg = "";
                    this.loading = false;
                }
            }
            catch (error) {
                console.log(error);
                this.loading = false;
            }
        },
        async fetchBreeds() {
            try {
                this.loading = true;
                const data: BreedsApiType = await axios.get('https://dog.ceo/api/breeds/list')
                if(data.status === "success"){
                    this.breeds = data.message;
                }
                this.loading = false;
            }
            catch (error) {
                console.log(error);
                this.loading = false;
            }
          }
    }
})