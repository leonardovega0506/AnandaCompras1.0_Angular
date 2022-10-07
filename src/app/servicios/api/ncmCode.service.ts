import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NCMCodeI } from 'src/app/modelos/ncmCode.interface'; 

@Injectable({
    providedIn: 'root'
  })
  export class AnandapiServiceNCM {
    urlLogin:string = 'https://api.solodata.es/';
    url:string = "https://6335ec1c65d1e8ef26659268.mockapi.io/"; 
    constructor(private http:HttpClient) { }

    getCodigos():Observable<NCMCodeI[]>{
        let uri = this.url+"ncmCode";
        return this.http.get<NCMCodeI[]>(uri);
      }
  }
