//imports-modulos
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { AdminRoutingModule } from "./admin-routing.module";

import { ListaComponent } from "./components/lista/lista.component";
import { AñadirComponent } from "./components/añadir/añadir.component";
import { EditarComponent } from "./components/editar/editar.component";
import { PrincipalComponent } from "./components/principal/principal.component";
import { AdminGuard } from "../servicios/admin.guard";

@NgModule({
    declarations:[
        PrincipalComponent,
        EditarComponent,
        AñadirComponent,
        ListaComponent
        
    ],
    imports:[
        CommonModule,
        FormsModule,
        HttpClientModule,
        AdminRoutingModule
    ],
    exports: [
        PrincipalComponent,
        ListaComponent,
        AñadirComponent,
        EditarComponent
    ],
    providers:[AdminGuard]
})

export class AdminModule{}