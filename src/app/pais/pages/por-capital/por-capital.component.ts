import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  paises:Country[]=[];
  index:number = 0;
  termino:string="";
  hayError: boolean = false;

  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.termino = termino;
    this.hayError = false;
   
    this.paisService.buscarCapital(this.termino)
    .subscribe( paises => {
      this.paises = paises;
      console.log(paises)
    },(err)=>{
      this.hayError = true;
      this.paises= [];
    });
  }

  sugerencias(termino:string){
    this.hayError = false;
  }
 
}
