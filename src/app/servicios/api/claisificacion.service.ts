import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClasificacionI } from 'src/app/modelos/clasificacion.interface';

@Injectable({
    providedIn: 'root'
  })
  export class AnandapiServiceClasif{
    urlLogin:string = 'https://api.solodata.es/';
    url:string = "https://6335ec1c65d1e8ef26659268.mockapi.io/"; 
    constructor(private http:HttpClient) { }

    getClasificacion():Observable<ClasificacionI[]>{
        let uri = this.url+"claisificacion";
        return this.http.get<ClasificacionI[]>(uri);
      }
  }
