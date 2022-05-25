import { Component, OnInit } from '@angular/core';
import { fundido } from '../animation';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [fundido]
})
export class InicioComponent implements OnInit {
  title = 'Bienvenido Al Inicio';

  ngOnInit(){
    console.log("inicio.component cargado !!");
    }
}




