import { Transferencia } from './../model/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private Listatransferencia: any[] = [];
  private url = 'http://localhost:3000/transferencias'

  constructor( private httpClient: HttpClient ) { }

  get transferencias(){
    return this.Listatransferencia;
  }

  adicionar(transferencia: any): Observable<Object>{
    this.hidratar(transferencia)
    return this.httpClient.post<object>(this.url, transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

  getListTranf(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

}
