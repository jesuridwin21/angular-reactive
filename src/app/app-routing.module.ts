import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '',   redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  {path: 'details', component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [DetailsComponent]
