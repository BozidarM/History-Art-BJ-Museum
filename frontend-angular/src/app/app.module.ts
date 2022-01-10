import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { RateCommentComponent } from './profile/rate-comment/rate-comment.component';
import { PlannerExhibitionComponent } from './planner-exhibition/planner-exhibition.component';
import { PlannerComponent } from './planner-exhibition/planner/planner.component';
import { ExhibitionsComponent } from './planner-exhibition/exhibitions/exhibitions.component';
import { UpdateExhibitionComponent } from './planner-exhibition/update-exhibition/update-exhibition.component';
import { ExhibitionHistoryComponent } from './profile/exhibition-history/exhibition-history.component';
import { ExhibitsComponent } from './exhibits/exhibits.component';
import { ExhibitDetailsComponent } from './exhibit-details/exhibit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    ProfilePageComponent,
    RateCommentComponent,
    PlannerExhibitionComponent,
    PlannerComponent,
    ExhibitionsComponent,
    UpdateExhibitionComponent,
    ExhibitionHistoryComponent,
    ExhibitsComponent,
    ExhibitDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
