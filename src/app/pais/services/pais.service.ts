import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  // https://restcountries.com/v3.1/alpha/{code}

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor( private http: HttpClient ) { }
 
  buscarPais(termino:string):Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${termino}`
    
    return this.http.get<Country[]>( url )

  }

  buscarCapital(termino:string):Observable<Country[]>{
    
    const url = `${ this.apiUrl }/capital/${termino}`
    return this.http.get<Country[]>( url )
  }

  getPais(id:string):Observable<Country>{
  
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>( url )
  }
  
  buscarPorRegion(region:string):Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${region}`;
    return this.http.get<Country[]>( url ); 
  }

}
