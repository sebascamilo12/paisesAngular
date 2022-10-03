import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent   {

  termino: string = '';
  paises : Pais[] = [];
  hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino : string){
    this.termino=termino;
    this.paisService.buscarPorCapital(this.termino).subscribe({
      next: (paises)=>{
        this.paises=paises;
        this.hayError= false;
      },
      error: (err)=>{
        this.hayError=true;
        this.paises=[];
      }
    });
  }

  

}
