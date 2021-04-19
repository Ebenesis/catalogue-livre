import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {AuteurService} from './services/auteur.services';
import { AuteurComponent } from './auteur/auteur.component';
import { AuteurVueComponent } from './auteur-vue/auteur-vue.component';
import { AuteurAddComponent } from './auteur-add/auteur-add.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AuteurComponent,
    AuteurVueComponent,
    AuteurAddComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuteurService],  // ==> new AuteurService();
  bootstrap: [AppComponent]
})
export class AppModule { }
