import {Component,Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: "add-btn",
  templateUrl: "./button.component.html",
  styleUrls: ["button.component.scss"]
})

export class ButtonComponent {
  @Input() cnt : number = 0;
  isClicked: boolean = false;
  setClicked(): void{
    this.isClicked = !this.isClicked;
  }
  @Output() inc = new EventEmitter();
  @Output() dec = new EventEmitter();
  change(inc: boolean){
    if(inc){
      this.inc.emit()
    } else {
      this.dec.emit()
    }
  }
  addCard() {

  }


  // inc(): void{
  //   this.cnt++;
  // }
  // dec(): void{
  //   this.cnt--;
  //   if(this.cnt <= 0 ){
  //   this.cnt = 0;
  //   }
  // }
}

//Доделать добавление карточки с помщью кнопки +
