import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Component} from "@angular/core";

@Component({
  selector:"add-plant-page",
  templateUrl: "./addplant.component.html",
  styleUrls: ["./addplant.component.scss"]
})

export class AddPlant {
 data : {name: string, description: string, images: string, category: string, sunlight: number, watering: string, temperature: string }[] = []
  constructor(private http: HttpClient){

  }

  addPlant(self = this){
    
    const headers = new HttpHeaders({ "Accept": "application/json","Content-Type": "application/json"});
    this.http.post(
      'https://api.petiteweb.dev/plants', 
      this.data, {headers: headers})
    .subscribe((res) =>{
      console.log(res);

    });
  }


}
