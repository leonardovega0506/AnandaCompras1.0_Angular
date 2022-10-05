import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AnandapiService } from 'src/app/servicios/api/anandapi.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  nuevoForm = new FormGroup({
    itemCode: new FormControl(''),
    itemName : new FormControl(''),
    ncmCode : new FormControl(''),
  });
  constructor(private router:Router, private api:AnandapiService) { }

  ngOnInit(): void {
    let toke = localStorage.getItem('token');
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
