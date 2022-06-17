import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login(){
    this.autenticacaoService.autentica(this.usuario, this.senha).subscribe((resp)=>{
      this.router.navigate(['animais']);
    }, (error) =>{
      alert('usuario ou senha invalido')
    })
  }
}
