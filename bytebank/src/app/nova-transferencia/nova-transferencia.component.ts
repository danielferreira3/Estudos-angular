import { Transferencia } from './../model/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Route, Router } from '@angular/router';

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']

})
export class NovaTransferenciaComponent{

  valor: number = 0;
  destino: number = 0;

  @Output() aoTransferir = new EventEmitter<any>;
  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router
  ) { }

 transferir(){
  console.log('transferido')
  const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}
  this.transferenciaService.adicionar(valorEmitir).subscribe((resp)=>{
    console.log(resp);
    this.limparCampos();
    this.router.navigateByUrl('extrato')
  }, error =>{
    console.error(error);
  })
 }


 limparCampos(){
  this.valor = 0;
  this.destino = 0;
}

}
