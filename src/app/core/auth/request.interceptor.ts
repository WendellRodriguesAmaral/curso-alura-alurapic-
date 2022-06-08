import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenSerivce } from "../token/token.service";

//interceptar a requisição para enviar o token para monstrar ao back-end que estou autenticado e posso realizar tais ações
@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenSerivce){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if(this.tokenService.hasToken()){ //se tiver token
            const token = this.tokenService.getToken(); //pega o token
            req = req.clone({ // a requisição recebe um clone dela mesma com o token
                setHeaders:{ //propriedade que adicionar o token no cabeçalho
                    'x-access-token': token!
                }
            })
        }
        return next.handle(req); // dando continuidade na requisição ja com o token
    }
}