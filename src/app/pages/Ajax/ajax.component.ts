import {Component} from "@angular/core";

@Component({
  selector: "ajax-page ",
  templateUrl: "./ajax.component.html",
  styleUrls: [`./ajax.component.scss`]
})
export class AjaxPage {
  data : {name: string, icon: string, likes: number}[] = []
  icons: string[] = [
    "fa-solid fa-tree",
    "fa-solid fa-plant-wilt",
    "fa-brands fa-canadian-maple-leaf",
    "fa-solid fa-clover",
    "fa-solid fa-plant-wilt",
    "fa-solid fa-tree",
    "fa-solid fa-tree",
    "fa-solid fa-tree",
    "fa-solid fa-tree"]
  getNumber(max:number = 11, min:number = 0):number{
    return Math.floor(Math.random() * (max - min) + min);
  }

  loadInfo(self = this): void {
    let path:string = "https://fakerapi.it/api/v1/custom";
    const cnt:number = 3;
    const params: {[k: string]: string} = {
      "name": "word",
      "likes": "number"
    }
    path += `?_quantity=${cnt}`;
    for(let k in params){
      path+=`&${k}=${params[k]}`
    }
    console.log(path)
    fetch(path)
      .then(function (res): any {
        return res.json()
      })
      .then(function (d): any {
        console.log(d);
        for (let i: number = 0; i < d.data.length; i++){
          let item: {[k: string]: any} = d.data[i];
          item["icon"] = self.icons[self.getNumber(self.icons.length)]
          self.data.push(d.data[i]);
        }
        console.log(self.data)
      })
  }
}

