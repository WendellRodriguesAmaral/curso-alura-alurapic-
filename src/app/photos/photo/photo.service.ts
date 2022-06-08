import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000';


@Injectable({providedIn:'root'}) //dizendo que ele pode ser injetável em toda a aplicação

export class PhotoService{

    //com o private, ele se torna uma propriedade da classe e fica acessivel no metodo listFromUser
    constructor(private http: HttpClient){ }

    listFromUser(userName: string){

         //fazendo um get e informando que será do tipo <Object[]>
      return this.http.get<Photo[]>(API + '/' + userName + '/photos') //observable
    }


    listFromUserPaginated(userName: string,page:number ){

       const params = new HttpParams().append('page' , page.toString());

      return this.http.get<Photo[]>(API + '/' + userName + '/photos' , {params}) //observable
  }


}
