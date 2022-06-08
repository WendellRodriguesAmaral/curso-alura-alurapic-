//Modulo criado por mim para agrupar todos os componentes
//que dizem respeito a funcionalidade das fotos

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoModule } from "./photo/photo.module";
import { PhotoListModule } from "./photo-list/photo-list.module";

@NgModule({

    imports:[
      PhotoModule,
      PhotoFormModule,
      PhotoListModule,
        HttpClientModule,
        CommonModule,
    ]
})


export class PhotosModule{}
