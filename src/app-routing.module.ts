import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { HomeComponent } from './app/pages/home/home.component';
import { UsersListComponent } from "./users-list/users-list.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "utilisateurs", component: UsersListComponent}
];

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  exports: [RouterModule]
  import { HomeComponent } from "./pages/home/home.component";

})
export class AppRoutingModule { }