import { Component, OnInit } from '@angular/core';
import {AnandapiService} from '../../servicios/api/anandapi.service';
import {Router} from '@angular/router';
import { ListaProductosI } from 'src/app/modelos/ListaProductos.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api:AnandapiService, private router:Router) { }

  productos:ListaProductosI[]=[];

  ngOnInit(): void {
    this.api.getProducts().subscribe(data =>{
      this.productos=data;
    })
  }
  nuevoProducto(){
    this.router.navigate(['nuevo'])
  }

}
