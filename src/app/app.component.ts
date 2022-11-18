import { Component } from '@angular/core';
import data from "../assets/data.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Plants";
  plants: {name: string, icon: string, category: string, sun: number,wet: string, care: string }[] = [...data];
}
