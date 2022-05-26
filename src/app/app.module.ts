import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

//nuevo modulo

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './modules/home/components/inicio/inicio.component';
import { ProductoComponent } from './modules/home/components/producto/producto.component';
import { ContactoComponent } from './modules/home/components/contacto/contacto.component';
import { RegistrarComponent } from './modules/home/components/registrar/registrar.component';
import { LoginComponent } from './modules/home/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    LoginComponent,
    RegistrarComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
    
    
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
