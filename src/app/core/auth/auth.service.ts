import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private userService:UserService) { }

  authenticate(userName:string, password:string){
    //.post(url , {corpo da requisição}, {headers})
    return this.http.post(
      API_URL + '/user/login', 
      {userName, password},  //passando userName e password dessa forma pq propriedade e valor tem mesmo nome
      {observe:'response'}   // expondo os headers para que seja possivel capturar o token abaixo.
      )  
      .pipe(tap( res => { //tap é usado quando você deseja afetar o estado externo com uma notificação sem alterar a notificação
        const authToken = res.headers.get('x-access-token') ?? ''; //captando o token
        this.userService.setToken(authToken); //guarda o token no localStorage
        console.log(authToken);
      }))
  }
}
