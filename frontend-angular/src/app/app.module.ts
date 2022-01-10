import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ExhibitionListComponent } from './exhibition-list/exhibition-list.component';
import { ExhibitionDetailsComponent } from './exhibition-details/exhibition-details.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { OrderHistoryComponent } from './profile/order-history/order-history.component';
import { RateCommentComponent } from './profile/rate-comment/rate-comment.component';
import { PlannerExhibitionComponent } from './planner-exhibition/planner-exhibition.component';
import { PlannerComponent } from './planner-exhibition/planner/planner.component';
import { ExhibitionsComponent } from './planner-exhibition/exhibitions/exhibitions.component';
import { UpdateExhibitionComponent } from './planner-exhibition/update-exhibition/update-exhibition.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ExhibitionListComponent,
    ExhibitionDetailsComponent,
    HomeComponent,
    ProfileComponent,
    ProfilePageComponent,
    OrderHistoryComponent,
    RateCommentComponent,
    PlannerExhibitionComponent,
    PlannerComponent,
    ExhibitionsComponent,
    UpdateExhibitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
