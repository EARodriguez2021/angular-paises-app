import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'http://api.countrylayer.com/v2';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const access_key: string = '1be5b45c603e50b8abff4095384a9e88';
    const url = `${this.apiUrl}/name/${termino}`;

    const params: HttpParams = new HttpParams().set('access_key', access_key);

    return this.http.get<Country[]>(url, {params});

  }

}
