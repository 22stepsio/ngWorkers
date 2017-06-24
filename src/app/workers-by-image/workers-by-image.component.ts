import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../services/workers.service';

@Component({
  selector: 'app-workers-by-image',
  templateUrl: './workers-by-image.component.html',
  styleUrls: ['./workers-by-image.component.css']
})
export class WorkersByImageComponent implements OnInit {

  trabajadores: any[] = [];
  constructor(private trabajadoresService: WorkersService) {
    this.trabajadores = trabajadoresService.getWorkers();
   }

  ngOnInit() {
  }

}
