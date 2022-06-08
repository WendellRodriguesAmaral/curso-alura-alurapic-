import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo', //nome do seletor
    templateUrl:'photo.component.html'    //o template que ele ta usando
})

export class PhotoComponent{
    @Input() description = ''
   @Input() url = ''
}