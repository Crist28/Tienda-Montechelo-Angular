//imports-modulos
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { AdminRoutingModule } from "./admin-routing.module";

import { ListaComponent } from "./components/list/list.component";
import { AñadirComponent } from "./components/add/add.component";
import { EditarComponent } from "./components/edit/edit.component";
import { MainComponent } from "./components/main/main.component";
//import { AdminGuard } from "../services/admin.guard";
//import { UserService } from "../services/user.service";
//import { SearchPipe } from './pipes/search.pipe';

@NgModule({
    declarations:[
        ListaComponent,
        AñadirComponent,
        EditarComponent,
        MainComponent,
        //SearchPipe
        
    ],
    imports:[
        CommonModule,
        FormsModule,
        HttpClientModule,
        AdminRoutingModule
    ],
    exports: [
        MainComponent,
        ListaComponent,
        AñadirComponent,
        EditarComponent
    ],
    providers:[/*AdminGuard, UserService*/]
})

export class AdminModule{}