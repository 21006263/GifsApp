import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey:string = 'uAIya58kXUnOdDAltROSHFfPW37EUUHC';
  private _historial :string[] = [];
   // Todo Cambiar any por si tipo
  public resultados: Gif[] = [];


get historial() {

  return [...this._historial];
 
}


constructor (private http: HttpClient) {}


buscarGifs(query: string = '') {
  query = query.trim().toLocaleLowerCase();
  
  if(!this._historial.includes(query)){
    this._historial.unshift(query);
    this._historial = this._historial.splice(0,10);

  }


  this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=uAIya58kXUnOdDAltROSHFfPW37EUUHC&q=${query}&limit=10`)
  .subscribe( (ponse) => {
    console.log(ponse.data)
    this.resultados = ponse.data;
    //Response.data[0].images.downsized_medium.url
  })

}


}
