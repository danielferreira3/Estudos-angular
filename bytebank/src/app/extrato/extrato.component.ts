import { Transferencia } from './../model/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any

  constructor(
    private transferenciaService: TransferenciaService,
  ) { }

  ngOnInit() {
    this.transferenciaService.getListTranf().subscribe((transferencia: Transferencia[])=>{
      this.transferencias = transferencia
    })
  }

}
