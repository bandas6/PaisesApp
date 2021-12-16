import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor:pointer;
    }
   `
  ]
})
export class PorPaisComponent  {
  paises:Country[]=[];
  paisesSujeridos:Country[]=[];
  index:number = 0;
  termino:string="";
  mostarSugerencias:boolean = false;
  hayError: boolean = false;

  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.mostarSugerencias = false
    this.termino = termino;
    this.hayError = false;
   
    this.paisService.buscarPais(this.termino)
    .subscribe( paises => {
      this.paises = paises;
      console.log(paises)
    },(err)=>{
      this.hayError = true;
      this.paises= [];
    });
  }

  sugerencias(termino:string){
    this.mostarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPais(termino)
    .subscribe(paises=> this.paisesSujeridos = paises.splice(0,5),
    (err=> this.paisesSujeridos = [])
    )
  }

  buscarSugerido(termino:string){
     this.buscar(termino);
     
  }
}
 