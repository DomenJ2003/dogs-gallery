import axios from "axios";
import { defineStore } from "pinia";
import { DogsApiType } from "../types/apiFetchesType";

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
        getBreeds(){
            return this.breeds;
        },
        getDogImgUrls(){
            return this.dogImgUrls;
        },
        getSelectedBreed(){
            return this.selectedBreed;
        },
        getSelectedDogImg(){
            return this.selectedDogImg;
        }
    },
    actions: {
        setSelectedImg(dogImg: String){
            this.selectedDogImg = dogImg;
        },
        setSelectedBreed(selectedBreed: String){
            this.selectedBreed = selectedBreed;
        },
        async fetchDogs() {
            try {
                this.loading = true;
                const response = await axios.get('https://dog.ceo/api/breeds/list')
                const dogsData = response.data as DogsApiType;
                if(dogsData.status === "success"){
                    console.log(dogsData.message);
                    this.breeds = dogsData.message;
                }
                this.loading = false;
            } catch (error) {
                console.log(error);
                this.loading = false;
            }
        },
        async fetchDogsByBreed() {
            try {
                this.loading = true;
                const response = await axios.get(`https://dog.ceo/api/breed/${this.selectedBreed}/images`)
                const dogsData = response.data as DogsApiType;
                if(dogsData.status === "success"){
                    this.dogImgUrls = dogsData.message;
                    this.selectedDogImg = "";
                }
                this.loading = false;
            } catch (error) {
                console.log(error);
                this.loading = false;
            }
        },
        async fetchBreeds() {
            try {
                this.loading = true;
                const response = await axios.get('https://dog.ceo/api/breeds/list')
                const breedsData = response.data as DogsApiType;
                if(breedsData && breedsData.status === "success"){
                    this.breeds = breedsData.message;
                }
                this.loading = false;
            } catch (error) {
                console.log(error);
                this.loading = false;
            }
        }
    }
})
