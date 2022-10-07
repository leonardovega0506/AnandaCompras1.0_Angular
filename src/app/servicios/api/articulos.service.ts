import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NCMCodeI } from 'src/app/modelos/ncmCode.interface'; 
import { GrupoArtI } from 'src/app/modelos/grupoArticulos.interface';

@Injectable({
    providedIn: 'root'
  })
  export class AnandapiServiceArticulos {
    url:string = "https://6335ec1c65d1e8ef26659268.mockapi.io/"; 
    constructor(private http:HttpClient) { }

    getArticulos():Observable<GrupoArtI[]>{
        let uri = this.url+"articulos";
        return this.http.get<GrupoArtI[]>(uri);
      }
  }
