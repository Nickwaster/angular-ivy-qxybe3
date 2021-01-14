import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { FicheProduitComponent } from "./fiche-produit/fiche-produit.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserCardComponent } from "./user-card/user-card.component";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FicheProduitComponent,
    UsersListComponent,
    UserCardComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
