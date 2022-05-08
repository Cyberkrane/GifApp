import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gif, SearchGifResponse } from '../gifs/interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private apikey      : string = 'klrPQdMydu6KF5bD5H2FgQI6TMLYVGBy';
  private servicioUrl : string = 'http://api.giphy.com/v1/gifs'
  private _historial  : string[] = [];

  public resultados: gif[] = []; 

  get historial() {
     return [...this._historial];
  }

  constructor( private http: HttpClient ){

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('ultimosResultados')!) || [];

  }

  buscarGift( query: string = '' ){
  
    query = query.trim().toLocaleLowerCase();

    if ( !this._historial.includes( query ) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 15)
      localStorage.setItem('historial', JSON.stringify( this._historial ) );
    }

    const params = new HttpParams()
        .set('api_key', this.apikey)
        .set('limit', 12)
        .set('q', query);

    this.http.get<SearchGifResponse>(`${this.servicioUrl}/search`, {params})
      .subscribe((resp) => {
        this.resultados = resp.data;
        
      localStorage.setItem('ultimosResultados', JSON.stringify( this.resultados ) )
      })
  }
}