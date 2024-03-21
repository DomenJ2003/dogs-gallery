import axios from "axios";
import { defineStore } from "pinia";
import { DogsApiType, BreedsApiType } from "../types/apiFetchesType";

export const useDogStore = defineStore({
    id: 'dog',
    state: () => {return {
        dogImgUrls: [] as String[],
        selectedDogImg: "" as String,
        breeds: [] as String[],
        selectedBreed: "" as String,
        loading: false as Boolean
    }},
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
            return this.selectedBreed;
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
                console.log(data.message);
                this.breeds = data.message;
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