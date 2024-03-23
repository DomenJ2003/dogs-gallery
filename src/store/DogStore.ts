import { defineStore } from "pinia";
import { fetchDogs, fetchDogsByBreed, fetchBreeds } from "../apis";

type UseDogStore = {
    dogImgUrls: string[],
    selectedDogImg: string,
    breeds: string[],
    selectedBreed: string,
    loading: boolean,
    errorMessage: string
}

export const useDogStore = defineStore({
    id: 'dogStore',
    state: (): UseDogStore => ({
        dogImgUrls: [],
        selectedDogImg: "",
        breeds: [],
        selectedBreed: "",
        loading: false,
        errorMessage: ""
    }),
    getters: {
        getBreeds(): string[] {
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
            this.loading = true;
            const fetchDogsResponse = await fetchDogs();

            if(fetchDogsResponse.status){
                if (fetchDogsResponse.data.status === "success" && append){
                    this.dogImgUrls = this.dogImgUrls.concat(fetchDogsResponse.data.message);
                }else if(fetchDogsResponse.data.status === "success"){
                    this.dogImgUrls = fetchDogsResponse.data.message;
                }
                this.selectedDogImg = "";
                this.selectedBreed = "";
            }else{
                this.errorMessage = fetchDogsResponse.message;
            }
            
            this.loading = false;
        },
        async fetchDogsByBreed(): Promise<void> {
                this.loading = true;
                const fetchDogsByBreedResponse = await fetchDogsByBreed(this.selectedBreed)
                if(fetchDogsByBreedResponse.status){
                    if(fetchDogsByBreedResponse.data.status === "success"){
                        this.dogImgUrls = fetchDogsByBreedResponse.data.message;
                        this.selectedDogImg = "";
                    }
                }else{
                    this.errorMessage = fetchDogsByBreedResponse.message;
                }
                this.loading = false;
        },
        async fetchBreeds(): Promise<void> {
            this.loading = true;
            const fetchBreedsRessponse = await fetchBreeds();

            if(fetchBreedsRessponse.status){
                if(fetchBreedsRessponse.data.status === "success"){
                    this.breeds = fetchBreedsRessponse.data.message;
                }
            }else{
                this.errorMessage = fetchBreedsRessponse.message;
            }
            this.loading = false;
        }
    }
})
