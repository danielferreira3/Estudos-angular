import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

    autentica(usuario: String, senha: string): Observable<any>{
      const login = {
        userName: usuario,
        password: senha
      }
      return this.httpClient.post('http://localhost:3000/user/login', login)
    }
}
