import { Inject, Injectable, OnInit, PLATFORM_ID } from "@angular/core";
import {isPlatformBrowser} from '@angular/common'

@Injectable({ providedIn: 'root' })
export class PlatFormDetectorService  { 

    constructor(@Inject(PLATFORM_ID) private platformId: string){}

    ifPlatformBrowser(){ //retorna um boolean testando se é um navegador ou não
        console.log(this.platformId) //browser
        return isPlatformBrowser(this.platformId);
    }

}