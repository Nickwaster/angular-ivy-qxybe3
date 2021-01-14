import { NgModule } from "@angular/core";
// import { FormsModule } from "@angular/forms";
// import { RouterModule } from '@angular/router';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./app/pages/home/home.component";
import { UsersListComponent } from "./app/users-list/users-list.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "utilisateurs", component: UsersListComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
