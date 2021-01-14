import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { UsersListComponent } from "./users-list/users-list.component";

const routes: Routes = [
  {path: "", component: AppComponent},
  {path: "utilisateurs", component: UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }