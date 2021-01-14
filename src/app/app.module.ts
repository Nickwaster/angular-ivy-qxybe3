import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { FicheProduitComponent } from "./fiche-produit/fiche-produit.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from "../app-routing.module";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FicheProduitComponent,
    UsersListComponent,
    UserCardComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
