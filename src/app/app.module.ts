import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';
import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildItemsComponent } from './child-items/child-items.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { HttpClientModule } from '@angular/common/http';
import { apiservice } from './services/api.service';
import { ClassesComponent } from './classes/classes.component';
import { FormsModule} from '@angular/forms'


const routes: Routes = [
  {path: "details", component:DetailsComponent},
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ParentComponent,
    ChildItemsComponent,
    FrontpageComponent,
    ClassesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{provide: apiservice}],
  bootstrap: [AppComponent]
})
export class AppModule { }
