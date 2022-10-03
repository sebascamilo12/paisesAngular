import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino :string) {
    console.log(this.termino);
    this.termino=termino;
    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        this.paises=paises;
        console.log(this.paises);
        this.hayError = false;
        
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      }
    });
  }

  sugerencias(termino: string){
    this.hayError=false;
       

  }
}
