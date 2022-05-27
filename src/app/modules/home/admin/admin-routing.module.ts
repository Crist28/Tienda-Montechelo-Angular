import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//componentes
import { ListaComponent } from "./components/list/list.component";
import { AñadirComponent } from "./components/add/add.component";
import { EditarComponent } from "./components/edit/edit.component";
import { MainComponent } from "./components/main/main.component";
//import { AdminGuard } from '../services/admin.guard';

const adminRoutes: Routes = [
    {
        path: 'admin-panel',
        component: MainComponent,
        //canActivate: [AdminGuard],
        children: [
                {path: '', redirectTo:'listado', pathMatch:'full'},
                {path: 'listado',component:ListaComponent},
                {path: 'añadir',component:AñadirComponent},
                {path: 'editar/:id',component:EditarComponent},    
        ]
    },
];    

@NgModule({
    imports:[
        RouterModule.forChild(adminRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AdminRoutingModule {}
