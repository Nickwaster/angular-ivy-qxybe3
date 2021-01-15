import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { FicheProduitComponent } from "./fiche-produit/fiche-produit.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from "../app-routing.module";
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FicheProduitComponent,
    UsersListComponent,
    UserCardComponent,
    HomeComponent,
    ShopComponent,
    CartComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
