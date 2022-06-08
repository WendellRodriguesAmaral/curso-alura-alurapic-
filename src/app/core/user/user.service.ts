import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TokenSerivce } from "../token/token.service";
import { UserInterface } from "./user";
import jwt_decode from '../../../../node_modules/jwt-decode';


@Injectable({providedIn:'root'})
export class UserService{

    //user o behaviorSubject pq ele sempre fica emitindo e emite o ultimo valor guardado, ou seja atualiza quando o valor da propriedade é alterada
    private userSubject = new BehaviorSubject<UserInterface>({}); //serve para emitir o valor e se ninguem captou ele guarda ate alguem cpturar
    private userName!:string;
     
    constructor(private tokenService:TokenSerivce){
        //ja inicia a aplicação verificando se tem token, se tiver decodifica e emite
        this.tokenService.hasToken() && this.decodeAndNotify();  
    }

    setToken(token:string){
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(){
        return this.userSubject.asObservable(); //para quem chamar esse método poder fazer um subscribe
    }

    private decodeAndNotify(){
        const token = this.tokenService.getToken(); // pega o token
        const user = jwt_decode(token!) as UserInterface; //decodificando o token e adaptando ao model 
        this.userName = user.name!;
        this.userSubject.next(user); // emitindo o user
    }

    logout(){
        this.tokenService.removeToken(); 
        this.userSubject.next({});
    }

    isLogged():boolean{
        return this.tokenService.hasToken(); 
    }

    getUserName(){
        return this.userName;
    }

}