import {Component} from "@angular/core";
import data from "../../../assets/data.json";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "plant-page",
  templateUrl: "./plant.component.html",
  styleUrls: ["./plant.component.scss"]
})

export class PlantPage{
  plantName: string = "";
  // plants: {name: string, description: string, images: string, category: string, sunlight: number, watering: string, temperature: string }[] = [...data];
  plants: {name: string, description: string, images: string, category: string, sunlight: string, watering: string, temperature: string }[] = [data[0]];
  constructor(route: ActivatedRoute) {
    this.plantName = route.snapshot.params["plantName"];

  }
  // plants: {name: string, icon: string, category: string, sun: number,wet: string, care: string }[] = [...data];
}
