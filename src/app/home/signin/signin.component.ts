import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";
import { PlatFormDetectorService } from "src/app/core/platform-detector/platform-detector.service";

@Component({
    templateUrl:'./signin.component.html'    
})

export class SigninComponent implements OnInit {

    loginForm!:FormGroup;

    @ViewChild('userNameInput') 
    userNameInput!: ElementRef<HTMLInputElement>;

    constructor(private formBuilder:FormBuilder, private auth:AuthService, private router:Router,private platformDetectorService:PlatFormDetectorService){}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            //campos do formulário
            userName:['',Validators.required],  
            password:['',Validators.required]   //primeiro parametro é os dados de dentro do input, depois os validators
        });
    }  

    login(){
        const userName = this.loginForm.get('userName')?.value; //captura o valor de userName
        const password = this.loginForm.get('password')?.value; //captura o valor de password

        this.auth.authenticate(userName, password)
            .subscribe(
                ()=>this.router.navigate(['user' , userName]), //em caso de sucesso
                err=>{ //em caso de erro
                    console.log(err)
                    this.loginForm.reset(); 
                    this.platformDetectorService.ifPlatformBrowser() && this.userNameInput.nativeElement.focus(); //so colocar o focus se for um browser
                    alert('Escreve o login e senha certos seu animal.')
                })
    }
}