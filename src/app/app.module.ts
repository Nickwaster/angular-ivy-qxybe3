import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { MenuComponent } from './menu/menu.component';
import { SuiteFiboComponent } from './suite-fibo/suite-fibo.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FicheProduitComponent, MenuComponent, SuiteFiboComponent, UserCardComponent, UserListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
