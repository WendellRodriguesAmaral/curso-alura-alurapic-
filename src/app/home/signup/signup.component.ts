import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { lowerCaseValidator } from "src/app/shared/validators/lower-case.validator";
import { NewUser } from "./new-user";
import { SignupService } from "./signup.service";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";

@Component({
    templateUrl:'./signup.component.html',
    providers: [UserNotTakenValidatorService]
})
export class SignupComponent implements OnInit{

    signupForm!: FormGroup;

    constructor(
        private formBuilder:FormBuilder,
        private userNoteTakenValidatorService:UserNotTakenValidatorService,
        private signupService:SignupService,
        private router:Router,
    ){}


    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email:['', 
                [
                    Validators.required,
                    Validators.email //testa se o email é valido
                ]
            ],
            fullName:['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName:['',  // 1º parametro: o valor do input

                [ // 2º parametro: array com validadores sincronos
                    Validators.required,
                    lowerCaseValidator, // Validador criado na mão (letras minusculas e numeros)
                     Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                
                this.userNoteTakenValidatorService.checkUserNameTaken()     // 3º parametro: validador assincrono
            ],
           
            password:['', 
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        })
    }

    signup(){
        // monta um obj com os dados de todos os inputs
        const newUser = this.signupForm.getRawValue() as NewUser; //casting type: string
        this.signupService
            .signup(newUser)
            .subscribe(
                ()=>this.router.navigate(['']),
                err=>console.log(err)
                );
    }

}