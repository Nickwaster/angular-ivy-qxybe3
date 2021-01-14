import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { SuiteFiboComponent } from './suite-fibo/suite-fibo.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FicheProduitComponent,
    SuiteFiboComponent,
    UsersListComponent
  ],
  imports: [
,
    Br,
wserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
