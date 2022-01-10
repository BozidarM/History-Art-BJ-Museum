import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ExhibitionListComponent } from './exhibition-list/exhibition-list.component';
import { ExhibitionDetailsComponent } from './exhibition-details/exhibition-details.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { OrderHistoryComponent } from './profile/order-history/order-history.component';
import { RateCommentComponent } from './profile/rate-comment/rate-comment.component';
import { FavoritesComponent } from './profile/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ExhibitionListComponent,
    ExhibitionDetailsComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    ProfilePageComponent,
    OrderHistoryComponent,
    RateCommentComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
