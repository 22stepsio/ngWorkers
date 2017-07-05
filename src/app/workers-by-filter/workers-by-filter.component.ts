import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../services/workers.service';

@Component({
  selector: 'app-workers-by-filter',
  templateUrl: './workers-by-filter.component.html',
  styleUrls: ['./workers-by-filter.component.css']
})
export class WorkersByFilterComponent implements OnInit {

  losTrabajadores: any[] = [];
  mensaje: string = "No hay resultados";
  constructor(private workService: WorkersService) {
    this.losTrabajadores = workService.getWorkers();
  
   }

  isEmptyObject(obj) {
  return (obj && (Object.keys(obj).length === 0));
}

  objetovacio(objeto){
    if(objeto.length === 0){
      return true;
    }
    else return false;
  }



  ngOnInit() {
  }

}
