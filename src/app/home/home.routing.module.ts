import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/auth/auth.guard';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: SigninComponent },

            { path: 'signup', component: SignupComponent },
        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)], //aqui tem que ser forChild em vez de forRoot
    exports: [RouterModule],
})
export class HomeRoutingModule { }
