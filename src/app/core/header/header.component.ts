import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserInterface } from "../user/user";
import { UserService } from "../user/user.service";

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    user$: Observable<UserInterface>;  //uma boa pratica colocar o "$" em propriedade que vai guardar um observable
    // user?: UserInterface;


    constructor(private userService:UserService, private router:Router) { // sem 'private' pq vamos usar somente dentro do construtor
        this.user$ = userService.getUser(); //getUser() retorna um observable
        // this.user$.subscribe(user => this.user = user) //capturo o valor emitido la no BehaviorSubject
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['']);
    }

}