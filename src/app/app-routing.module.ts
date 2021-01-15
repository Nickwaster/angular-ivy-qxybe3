import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { ShopComponent } from "./pages/shop/shop.component";
import { UsersListComponent } from "./users-list/users-list.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "utilisateurs", component: UsersListComponent},
  {path: "shop", component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
