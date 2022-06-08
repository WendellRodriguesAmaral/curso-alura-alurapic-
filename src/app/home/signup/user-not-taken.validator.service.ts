import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { debounceTime, switchMap, map, first } from "rxjs/operators";

import { SignupService } from "./signup.service";

@Injectable()  // sem o { providedIn: 'root' } pq nao quero q ele esteja disponivel em toda a aplicação, irei chamá-lo no component Signup
export class UserNotTakenValidatorService {

    constructor(private signupService: SignupService) { }

    checkUserNameTaken() { // esse método ao ser chamado retorna uma função de validação

        return (control: AbstractControl) => { //essa função retorna ...
            return control
                .valueChanges // observable que emite um event a cada vez que o control é alterado
                .pipe(debounceTime(300)) // esperar 300 millisegundos dps que parar de digitar
                .pipe(switchMap(userName => { //switchMap serve para dizer : "para de escutar esse observable anterior e escuta o meu"
                    return this.signupService.checkUserNameTaken(userName)
                }))
                .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null)) //semelhante ao uso de map no array, para cada item recebido faça algo.
                .pipe(first()) //emite o primero valor captado
        }
    }
}