import {Component} from "@angular/core";

@Component({
  selector: "not-found-page",
  template: `
    <div class="error">
      <h1>4</h1>
      <div class="img"></div>
      <h1>4</h1>
      <h4>
        Page not found
      </h4>

    </div>

  `,
  styles:[
    `
      .error{
        font-family: 'Oswald', sans-serif;
        position: fixed;
        top: 0;
        left: 10%;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        z-index: -1;
      }
      .img{
        background: url("./error.png") center / cover no-repeat;
        width: 300px;
        height: 300px;

      }
      h1{
        font-size: 200px;
      }
      h3{
        font-size: 30px;
      }
      h4{
        color: green;
        font-size: 35px;
      }

    `
  ]

})

export class NotFound{

}
