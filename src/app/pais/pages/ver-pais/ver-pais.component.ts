import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap , tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country[];

  constructor(private activateRoute: ActivatedRoute,
              private paisService:PaisService) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap(({ id })=> this.paisService.getPais(id)),
      tap(console.log)
    )
    .subscribe(pais => this.pais = pais)


    

    // this.activateRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id)
    //     this.pais.getPais(id)
    //     .subscribe( pais => {
    //       console.log(pais)
    //     } )
        
    //   })

  } 

}
