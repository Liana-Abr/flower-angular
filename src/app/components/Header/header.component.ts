import {Component} from "@angular/core";

@Component({
  selector: "main-header",
  templateUrl: "./header.component.html",
  styles: [
    `
    header{
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid;
      padding: 20px;
      font-size: 20px;
      z-index: 999;
    }
    nav{
      display: flex;
      gap: 20px;
    }
    .logo{
      text-transform: uppercase;
      font-weight: bold;
      font-size: 30px;
      color: pink;
    }
    img{
      width: 100px;
      height: 100px;
    }
    a{
      text-decoration: none;
      color: inherit;
    }
    .active{
      color: green;
      text-decoration-line: underline;
    }
    `
  ]
})

export class HeaderComponent{

}
