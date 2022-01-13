import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';

import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { PlannerExhibitionsComponent } from "./planner-exhibitions/planner-exhibitions.component";
import { ExhibitDetailsComponent } from "./exhibit-details/exhibit-details.component";
import { ExhibitsExhibitionsComponent } from "./exhibits-exhibitions/exhibits-exhibitions.component";
import { UsersComponent } from "./users/users.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const rute: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'products', component: ExhibitsExhibitionsComponent},
    {path: 'planner', component: PlannerExhibitionsComponent},
    {path: 'exhibits/exhibit/:id', component: ExhibitDetailsComponent},
    {path: 'users', component: UsersComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(rute)
    ],

    exports:[
        RouterModule
    ]
})

export class RoutingModule {}