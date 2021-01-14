import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { FicheProduitComponent } from "./fiche-produit/fiche-produit.component";
import { SuiteFiboComponent } from "./suite-fibo/suite-fibo.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserCardComponent } from "./user-card/user-card.component";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FicheProduitComponent,
    SuiteFiboComponent,
    UsersListComponent,
    UserCardComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
