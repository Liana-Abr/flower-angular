import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "category-page",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryPage{
  category: string[] = ["Домашние", "Уличные", "Садовые"]
  constructor(route: ActivatedRoute) {
    this.category = route.snapshot.params["category"];
  }
}
