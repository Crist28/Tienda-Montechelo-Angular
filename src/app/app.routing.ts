import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './modules/home/components/inicio/inicio.component';
import { ProductoComponent } from './modules/home/components/producto/producto.component';
import { ContactoComponent } from './modules/home/components/contacto/contacto.component';
import { RegistrarComponent } from './modules/home/components/registrar/registrar.component';
import { LoginComponent } from './modules/home/components/login/login.component';

const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component:InicioComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: 'producto', component:ProductoComponent},
    {path: 'login', component:LoginComponent},
    {path: 'registrar', component:RegistrarComponent},
    {path: '**', component:InicioComponent},
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
