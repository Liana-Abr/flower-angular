import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "catalogue-page",
  templateUrl: "./catalogue.component.html",
  styleUrls: ["./catalogue.component.scss"]
})
export class CataloguePage{
  category: string = "";
  constructor(route: ActivatedRoute) {
    this.category = route.snapshot.params["category"];
  }
}
