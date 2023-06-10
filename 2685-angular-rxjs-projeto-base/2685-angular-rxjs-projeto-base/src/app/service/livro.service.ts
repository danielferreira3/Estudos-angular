import { LivrosResultado, Item } from './../models/interfaces';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
private readonly url = 'https://www.googleapis.com/books/v1/volumes'
  constructor(
    private http: HttpClient
  ) { }

  public buscar (valor: string): Observable<Item[]>{
    const params = new HttpParams().append(
      'q', valor
    )

    return this.http.get<LivrosResultado>(this.url, {params}).pipe(
      tap((resp)=> console.log('TAP',resp)),
      map(resultado => resultado.items),
      tap(resultado => console.log('Pos MAP',resultado))
    )
  }

  //manipulando atributos de dentro de uma lista, fazer isso se ouver alteração depois de consumir a api caso precise alterar em diversos components
  public buscar2 (valor: string): Observable<any>{
    const params = new HttpParams().append(
      'q', valor
    )

    return this.http.get<any>(this.url, {params}).pipe(
      tap((resp)=> console.log('TAP',resp)),
      map(resultado => resultado.items),
      tap(resultado => console.log('Pos MAP', resultado)),
      map((resp)=>{
        return (resp).map((r)=>{
          return {
            teste: r.accessInfo
          }
        })
        }),
      tap(resp => console.log('meu teste', resp))
    )
  }
}
