import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { HomeComponent } from './Components/home/home.component';
const routes: Routes = [
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
