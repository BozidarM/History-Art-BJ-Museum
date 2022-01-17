import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { RatingModule } from 'ng-starrating';

import { UsersService } from './services/users.service';
import { AuthenticationService } from './services/authentication.service';
import { ExhibitsService } from './services/exhibits.service';
import { ExhibitionsService } from './services/exhibitions.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PlannerExhibitionsComponent } from './planner-exhibitions/planner-exhibitions.component';
import { PlannerComponent } from './planner-exhibitions/planner/planner.component';
import { ExhibitionsComponent } from './planner-exhibitions/exhibitions/exhibitions.component';
import { UpdateExhibitionComponent } from './planner-exhibitions/update-exhibition/update-exhibition.component';
import { ExhibitDetailsComponent } from './exhibit-details/exhibit-details.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './users/profile/profile.component';
import { ExhibitionsHistoryComponent } from './users/exhibitions-history/exhibitions-history.component';
import { RateCommentComponent } from './users/rate-comment/rate-comment.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExhibitsExhibitionsComponent } from './exhibits-exhibitions/exhibits-exhibitions.component';
import { ExhibitsComponent } from './exhibits-exhibitions/exhibits/exhibits.component';
import { DefaultExhibitionsComponent } from './exhibits-exhibitions/default-exhibitions/default-exhibitions.component';
import { ExhibitionDetailsComponent } from './exhibition-details/exhibition-details.component';
import { CustomPlannerComponent } from './planner-exhibitions/custom-planner/custom-planner.component';
import { CustomRateCommentComponent } from './users/custom-rate-comment/custom-rate-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PlannerExhibitionsComponent,
    PlannerComponent,
    ExhibitionsComponent,
    UpdateExhibitionComponent,
    ExhibitDetailsComponent,
    UsersComponent,
    ProfileComponent,
    ExhibitionsHistoryComponent,
    RateCommentComponent,
    WelcomeComponent,
    ExhibitsExhibitionsComponent,
    ExhibitsComponent,
    DefaultExhibitionsComponent,
    ExhibitionDetailsComponent,
    CustomPlannerComponent,
    CustomRateCommentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    NgbModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RatingModule
  ],
  providers: [UsersService, ExhibitsService, ExhibitionsService, AuthenticationService],
  bootstrap: [AppComponent],
  entryComponents: [RateCommentComponent, UpdateExhibitionComponent]
})
export class AppModule { }
