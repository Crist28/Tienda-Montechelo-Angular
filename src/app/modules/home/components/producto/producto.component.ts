import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'producto',
  templateUrl: './producto.component.html', 
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  title = 'Producto';

  ngOnInit(){
    console.log("inicio.component cargado !!");
    }
}