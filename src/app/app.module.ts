import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CardComponent } from "./components/Card/card.component";
import { ButtonComponent } from "./components/Button/button.component";
import {InpComponent} from "./components/Word/word.component";
import {SimplePage} from "./pages/Simple/simple.component";
import {AboutPage} from "./pages/About/about.component";
import {HomePage} from "./pages/Home/home.component";
import {HeaderComponent} from "./components/Header/header.component";
import {NotFound} from "./pages/404/404.component";
import {PlantPage} from "./pages/Plant/plant.component";
import {AjaxPage} from "./pages/Ajax/ajax.component";
import {CataloguePage} from "./pages/Catalogue/catalogue.component";
import {AddPlant} from "./pages/AddPlant/addplant.component";


//список путей SPA
const routers: Routes = [
  {path: "", component: HomePage},
  {path: "simple", component: SimplePage},
  {path: "about", component: AboutPage},
  {path: "ajax", component: AjaxPage},
  {path: "ajax/:plantName", component: PlantPage},
  {path: "addplant", component: AddPlant},
  // {path: "", component: CataloguePage},


  //новые страницы писать перед notfound
  {path: "**", component: NotFound}


]


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    InpComponent,
    HomePage,
    HeaderComponent,
    SimplePage,
    AboutPage,
    PlantPage,
    AddPlant,
    NotFound,
    CataloguePage,
    AjaxPage,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
