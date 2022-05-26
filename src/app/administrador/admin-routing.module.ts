import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//componentes
import { ListaComponent } from "./components/lista/lista.component";
import { AñadirComponent } from "./components/añadir/añadir.component";
import { EditarComponent } from "./components/editar/editar.component";
import { PrincipalComponent } from "./components/principal/principal.component";
import { AdminGuard } from '../servicios/admin.guard';

const adminRoutes: Routes = [
    {
        path: 'admin-panel',
        component: PrincipalComponent,
        canActivate: [AdminGuard],
        children: [
                {path: '', redirectTo:'listado', pathMatch:'full'},
                {path: 'listado',component:ListaComponent},
                {path: 'crear',component:AñadirComponent},
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