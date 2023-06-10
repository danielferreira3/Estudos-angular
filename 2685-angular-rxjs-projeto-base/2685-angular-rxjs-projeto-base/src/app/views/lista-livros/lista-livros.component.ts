import { Livro, Item } from './../../models/interfaces';
import { LivroService } from './../../service/livro.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: Livro[];
  campoBusca: string = ''
  subiscription: Subscription
  livro: Livro

  constructor(
    private service: LivroService
  ) { }

  public buscar (){
    this.subiscription = this.service.buscar(this.campoBusca).subscribe(
        {
          next: (item) => {
            this.listaLivros = this.livrosResultadoParaLivros(item)
          },
          error: erro => (console.log('entrou aqui', erro)),
          complete: ()=> (console.log('completou o observable', this.listaLivros))
        })
  }


  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[]{
      return items.map(resp => {
        return new LivroVolumeInfo(resp)
      })

  }

  public buscar2 (){
    console.log(this.campoBusca)
    this.service.buscar(this.campoBusca).subscribe((resp)=>{
      console.log(resp)
    }, error =>{
      console.log('entrou aqui')
    })
  }

  ngOnDestroy(){
    this.subiscription.unsubscribe();
  }
}



