import { defineStore } from "pinia";
import { fetchDogs, fetchDogsByBreed, fetchBreeds } from "../apis";

type UseDogStore = {
    dogImgUrls: string[],
    selectedDogImg: string,
    selectedDogImgIndex: number,
    breeds: string[],
    selectedBreed: string,
    loading: boolean,
    errorMessage: string,
    errorFunction: ()=>Promise<void>
    
}

export const useDogStore = defineStore({
    id: 'dogStore',
    state: (): UseDogStore => ({
        dogImgUrls: [],
        selectedDogImg: "",
        breeds: [],
        selectedBreed: "",
        loading: false,
        errorMessage: "",
        errorFunction: () => Promise.resolve(),
        selectedDogImgIndex: 0
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
        },
    },
    actions: {
        incrementIndex(){
            const lengthOfDogImgs  = this.dogImgUrls.length;
            if(lengthOfDogImgs == 0){
                return;
            }
            if(lengthOfDogImgs == this.selectedDogImgIndex+1){
                this.selectedDogImgIndex = 0;
                return;
            }
            this.selectedDogImgIndex++;
            this.setSelectedImgByIndex();
        },
        decrementIndex(){
            console.log("here");
            const lengthOfDogImgs  = this.dogImgUrls.length;
            if(lengthOfDogImgs == 0){
                return;
            }
            if(this.selectedDogImgIndex == 0){
                this.selectedDogImgIndex = lengthOfDogImgs-1;
                return;
            }
            this.selectedDogImgIndex--;
            this.setSelectedImgByIndex();
        },
        setSelectedImgByIndex(): void{
            this.selectedDogImg = this.dogImgUrls[this.selectedDogImgIndex];
        },
        setSelectedImg(dogImg: string): void{
            this.selectedDogImg = dogImg;
        },
        setSelectedBreed(selectedBreed: string): void{
            this.selectedBreed = selectedBreed;
        },
        setDogImgUrls(dogImgUrls: string[]){
            this.dogImgUrls = dogImgUrls;
            this.selectedBreed = "favoritest";
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
                this.errorMessage = "";
                this.selectedDogImg = "";
                this.selectedBreed = "";
            }else{
                this.errorMessage = fetchDogsResponse.message;
                this.errorFunction = this.fetchDogs;
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
                    this.errorMessage = "";
                }else{
                    this.errorMessage = fetchDogsByBreedResponse.message;
                    this.errorFunction = this.fetchDogsByBreed;
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
                this.errorMessage = "";
            }else{
                this.errorMessage = fetchBreedsRessponse.message;
                this.errorFunction = this.fetchBreeds;
            }
            this.loading = false;
        }
    }
})
