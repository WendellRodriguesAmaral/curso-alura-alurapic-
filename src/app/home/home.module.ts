import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMEssageModule } from '../shared/components/vmessage/vmessage.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';

//nao tem a parte de 'exports' pq nao vai ser chamado dentro de nenhum outro component, ele é uma página
@NgModule({
  declarations: [SigninComponent,SignupComponent,HomeComponent],
  imports: [CommonModule, ReactiveFormsModule, VMEssageModule,RouterModule,HomeRoutingModule],
  providers:[ SignupService]
})
export class HomeModule { }
