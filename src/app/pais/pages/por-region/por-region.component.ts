import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    
  ]
})
export class PorRegionComponent implements OnInit {
  
  mostrarError:boolean = false;
  paises:Country[]=[];
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva:string = '';

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  
  }

  getClaseCss(region:string):string{
    return (region === this.regionActiva) ? 'btn btn-primary m-1': 'btn btn-outline-primary m-1'
  }

  activarRegion(region:string){
    if(region === this.regionActiva){
      return
    }
    this.regionActiva = region;
    this.paisService.buscarPorRegion(region)
    .subscribe( reg =>{
      this.paises = reg;
      console.log(this.paises)
    },(err=>{
      this.mostrarError = true;
    }))
  }
  
 

}
