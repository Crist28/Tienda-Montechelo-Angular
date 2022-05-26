import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registar',
  templateUrl: './registrar.component.html', 
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  title = 'Registrar';

  ngOnInit(){
    console.log("inicio.component cargado !!");
    }
}