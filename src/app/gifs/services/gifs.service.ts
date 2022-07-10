import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey:string = 'uAIya58kXUnOdDAltROSHFfPW37EUUHC';
  private _historial :string[] = [];
   // Todo Cambiar any por si tipo
  public resultados: any[] = [];


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


  this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=uAIya58kXUnOdDAltROSHFfPW37EUUHC&q=${query}&limit=10`)
  .subscribe( (Response: any) => {
    console.log(Response.data)
    this.resultados = Response.data;
  })

}


}
