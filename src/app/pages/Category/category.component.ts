import { Plants } from './../model/plants';
import {Component, OnInit} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "category-page",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryPage implements OnInit{
  allPlants: Plants[] = [];
  category: string[] = ["Домашние", "Уличные", "Садовые"];
  constructor(route: ActivatedRoute,private http: HttpClient) {
    this.category = route.snapshot.params["category"];
  }

  ngOnInit() {
    this.fetchProducts();
  }

  onProductsFetch(){
    this.fetchProducts()
  }

  private fetchProducts(){
    this.http.get<{[key: string]: Plants}>("https://api.petiteweb.dev/plants/")
    .pipe(map((res: {[key: string]: Plants}) =>{
      const plants = [];
      for( const key in res ){
        if(res.hasOwnProperty(key)){
          plants.push({...res[key], id: key})
        }
      }
      return plants;
    }))
    .subscribe((Plants)=>{
      console.log(Plants);
      this.allPlants = Plants;
    })
  }


}
