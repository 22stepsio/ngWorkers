import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../services/workers.service';

@Component({
  selector: 'app-workers-by-filter',
  templateUrl: './workers-by-filter.component.html',
  styleUrls: ['./workers-by-filter.component.css']
})
export class WorkersByFilterComponent implements OnInit {

  losTrabajadores: any[] = [];
  busqueda: string;
  constructor(private workService: WorkersService) {
    this.losTrabajadores = workService.getWorkers();
  
   }
// Estas dos funciones verifican si el objeto de devuelve el filtro esta vacio
  isEmptyObject(obj) {
  return (obj && (Object.keys(obj).length === 0));
}

  objetovacio(objeto){
    if(objeto.length === 0){
      return true;
    }
    else return false;
}
// en caso de ser positivo se imprime un mensaje en el component.html


  ngOnInit() {
  }

}
