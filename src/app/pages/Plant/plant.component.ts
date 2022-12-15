import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Plants} from "../model/plants";

@Component({
  selector: 'plant-page',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantPage {
  data : {name: string, description: string, images: string, category: string, sunlight: number, watering: string, temperature: string }[] = []
}
