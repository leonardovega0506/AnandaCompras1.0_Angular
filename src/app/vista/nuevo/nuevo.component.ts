import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AnandapiService } from 'src/app/servicios/api/anandapi.service';
import { Router } from '@angular/router';
import { NCMCodeI } from 'src/app/modelos/ncmCode.interface'
import { AnandapiServiceNCM } from 'src/app/servicios/api/ncmCode.service'; 
import { GrupoArtI } from 'src/app/modelos/grupoArticulos.interface';
import { AnandapiServiceArticulos } from 'src/app/servicios/api/articulos.service';
import { AnandapiServiceClasif } from 'src/app/servicios/api/claisificacion.service';
import { ClasificacionI } from 'src/app/modelos/clasificacion.interface';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  

  listaGrupoArt:GrupoArtI[]=[];
  nuevoForm = new FormGroup({
    itemCode: new FormControl(''),
    ncmCode:new FormControl(''),
    itemName : new FormControl(''),
    itemType:new FormControl(''),
    taxVariable:new FormControl(true),
    taxType:new FormControl(true),
    vatLiable:new FormControl(true),
    cardCode:new FormControl(''),
    itmsGrpCod:new FormControl(''),
    sVolume:new FormControl(''),
    sWeight11:new FormControl(''),
    sWght1Unit:new FormControl(''),
    sWeight1:new FormControl(''),
    invntryUom:new FormControl(''),
    iWeight1:new FormControl(''),
    numInSale:new FormControl(''),
    planingSys:new FormControl(''),
    prcrmntMtd:new FormControl(''),
    codeBars:new FormControl(''),
    uClasifStore:new FormControl(''),
    uCode:new FormControl(''),
    salUnitMsr:new FormControl(''),
    salPackUn:new FormControl(''),
    buyUnitMsr:new FormControl(''),
    purPackMsr:new FormControl(''),
    salPackMsr:new FormControl(''),
    sww:new FormControl(''),
    cat_Linea:new FormControl(),
    cat_Mixto:new FormControl(),
    cat_Casa:new FormControl(),
    cat_ProductoN:new FormControl(true),
    cat_LAColors:new FormControl(),
    cat_RubyRose:new FormControl(),
    cat_CabelloApple:new FormControl(),
    cat_CosmeticoMega:new FormControl(),
    cat_IMNatural:new FormControl(),
    cat_Curtis:new FormControl(),
    cat_Moda:new FormControl(),
    cat_Temporada:new FormControl(),
    cat_AretesP:new FormControl(),
    cat_AnilloP:new FormControl(),
    cat_Collar:new FormControl(),
    cat_AccesoriosApple:new FormControl(),
    cat_PestanasApple:new FormControl(),
    cat_AplicadoresApple:new FormControl(),
    cat_DepiladoresApple:new FormControl(),
    cat_LapizAND:new FormControl(),
    cat_CosmeticosMega:new FormControl(),
    cat_DonasValerinas:new FormControl(),
    cat_BroPasCucas:new FormControl(),
    cat_PinzasDiademas:new FormControl(),
    cat_LigasColetero:new FormControl(),
    cat_Naturone:new FormControl(),
    cat_Prosa41: new FormControl(),
    cat_Postizas:new FormControl(),
    cat_Hogar:new FormControl(),
    cat_Cocina:new FormControl(),
    cat_Juguetes:new FormControl(),
    cat_Escritura:new FormControl(),
    cat_CortaPega:new FormControl(),
    cat_EmpaquesRegalo:new FormControl(),
    cat_Complementos:new FormControl(),
    cat_Ultramo:new FormControl(),
    cat_Remate:new FormControl(),
    cat_Importacion:new FormControl(),
    cat_TemSep:new FormControl(),
    cat_TemHallow:new FormControl(),
    cat_TemNavid:new FormControl(),
    cat_Fiesta:new FormControl(),
    cat_CajaCerrada:new FormControl(),
    cat_Nails:new FormControl(),
    cat_AccesoriosMegaline:new FormControl(),
    cat_AccesoriosAND:new FormControl(),
    cat_CabelloAND:new FormControl(),
    cat_CabelloMegaline:new FormControl(),
    cat_PestanaAND:new FormControl(),
    cat_DepiladoresAND:new FormControl(),
    cat_AplicadoresAND:new FormControl(),
    cat_HebleeCosmetics:new FormControl(),
    cat_Marcas:new FormControl(),
    cat_Rostro:new FormControl(),
    cat_Ojos:new FormControl(),
    cat_Labios:new FormControl(),
    cat_CuidadoPiel:new FormControl(),
    cat_AccesorioBelleza:new FormControl(),
    cat_Bissu:new FormControl(),
    cat_Maravilla:new FormControl(),
    cat_ByApple:new FormControl(),
    cat_Saniye:new FormControl(),
    cat_Pink21:new FormControl(),
    cat_AmorUS:new FormControl(),
    cat_DanzonCosmetics:new FormControl()
  });
  listaNCM:NCMCodeI[] =[];
  listaClasif:ClasificacionI[]=[];
  constructor(private router:Router, private api:AnandapiService,private apiNCM:AnandapiServiceNCM, private apiArt:AnandapiServiceArticulos,private apiClas:AnandapiServiceClasif) { }

  ngOnInit(): void {
    let toke = localStorage.getItem('token');
    this.apiNCM.getCodigos().subscribe(data =>{
      this.listaNCM=data;
;    })
    this.apiArt.getArticulos().subscribe(data =>{
      this.listaGrupoArt=data;
    })
    this.apiClas.getClasificacion().subscribe(data =>{
      this.listaClasif=data;
    })

  }
  postForm(form:any){
    this.api.postProducts(form).subscribe(data =>{
      console.log(data);
    })
  }
  salir(){
    this.router.navigate(['dashboard']);
  }

}
