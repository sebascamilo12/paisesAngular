import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones : string []= ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises : Pais[] = [];
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getClaseCSS(region : string): string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion(region: string){

    if(region === this.regionActiva){ return; }
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region)
    .subscribe(paises =>{
      console.log(paises);
      this.paises = paises;
    })

  }

  
}
