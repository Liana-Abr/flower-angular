import {Component} from "@angular/core";
import data from "../../../assets/data.json";

@Component({
  selector: "home-page",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomePage{
  title = "Plants";
  // plants: {name: string, img: string, category: string, sun: number,wet: string, care: string }[] = [...data];
  // plantsCnt: number = this.plants.length;
  word: string = "растений";
  // inc(): void{
  //   this.plantsCnt++;
  // }
  // dec(): void{
  //   this.plantsCnt--;
  //   if(this.plantsCnt <= 0 ){
  //     this.plantsCnt = 0;
  //   }
  // }
  setWord($event: any){
    this.word = $event;
  }
}
