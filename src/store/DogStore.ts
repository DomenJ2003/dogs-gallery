import axios from "axios";
import { defineStore } from "pinia";
import { DogsApiType } from "../types/apiFetchesType";

type UseDogStore = {
    dogImgUrls: string[],
    selectedDogImg: string,
    breeds: string[],
    selectedBreed: string,
    loading: boolean
}

export const useDogStore = defineStore({
    id: 'dogStore',
    state: (): UseDogStore => ({
        dogImgUrls: [],
        selectedDogImg: "",
        breeds: [],
        selectedBreed: "",
        loading: false
    }),
    getters: {
        getBreeds() : string[]{
            return this.breeds;
        },
        getDogImgUrls(): string[] {
            return this.dogImgUrls;
        },
        getSelectedBreed(): string{
            return this.selectedBreed;
        },
        getSelectedDogImg(): string{
            return this.selectedDogImg;
        }
    },
    actions: {
        setSelectedImg(dogImg: string): void{
            this.selectedDogImg = dogImg;
        },
        setSelectedBreed(selectedBreed: string): void{
            this.selectedBreed = selectedBreed;
        },
        async fetchDogs(append: boolean = false): Promise<void> {
            try {
                this.loading = true;
                const response = await axios.get(`https://dog.ceo/api/breeds/image/random/12`)
                const dogsData = response.data as DogsApiType;
                if(dogsData.status === "success"){
                    if(append){
                        this.dogImgUrls = this.dogImgUrls.concat(dogsData.message);
                    }else{
                        this.dogImgUrls = dogsData.message;
                    }
                    this.selectedDogImg = "";
                    this.selectedBreed = "";
                }
                this.loading = false;
            } catch (error) {
                console.log(error);
                this.loading = false;
            }
        },
        async fetchDogsByBreed(): Promise<void> {
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
        async fetchBreeds(): Promise<void> {
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
