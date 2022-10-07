import { Injectable } from '@angular/core';
import {LoginI} from '../../modelos/login.interface';
import {ResponseI} from '../../modelos/Response.interface';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ListaProductosI } from 'src/app/modelos/ListaProductos.interface';
import { ProductoI } from 'src/app/modelos/Producto.interface';

@Injectable({
  providedIn: 'root'
})
export class AnandapiService {
  urlLogin:string = 'https://api.solodata.es/';
  url:string = "https://6335ec1c65d1e8ef26659268.mockapi.io/"; 
  constructor(private http:HttpClient) { }

  login(form:LoginI):Observable<ResponseI>{
    let uri = this.urlLogin+"auth";
    return this.http.post<ResponseI>(uri,form);
  }
  getProducts():Observable<ListaProductosI[]>{
    let uri = this.url+"item";
    return this.http.get<ListaProductosI[]>(uri);
  }
  postProducts(form:ProductoI){
    let uri = this.url+"items";
    return this.http.post<ResponseI>(uri,form);
  }
}
