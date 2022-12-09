import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Component} from "@angular/core";

@Component({
  selector:"add-plant-page",
  templateUrl: "./addplant.component.html",
  styleUrls: ["./addplant.component.scss"]
})

export class AddPlant {


  constructor(private http: HttpClient){

  }

  onPlantCreate(plants: {name: string, description: string, images: string[], category: string, sunlight: string, watering: string, temperature: string}){
    console.log(plants);
    const headers = new HttpHeaders({"Accept": "application/json",
    "Content-Type": "application/json"});
    this.http.post('https://api.petiteweb.dev/plants', plants, {headers: headers})
    .subscribe((res) =>{
      console.log(res);
      
    });

    
  }



  // data : {name: string, description: string, images: string[], category: string, sunlight: string, watering: string, temperature: string}[] = []


  // addPlant(self = this){
  //   let path:string = "https://api.petiteweb.dev/plants";
  //   console.log(path)
  //   const params: {[k: string]: string} = {
  //     "name": "string",
  //     "description": "string",
  //     "images": "string",
  //     "category": "string",
  //     "sunlight": "string",
  //     "watering": "string",
  //     "temperature": "string",
  //   }



  //   fetch(path)
  //     .then(function (res): any {
  //       return res.json()
  //     })
  //     .then(function (d): any {
  //       console.log(self.data)
  //     })
  // }
}
