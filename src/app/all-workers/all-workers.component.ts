import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../services/workers.service';

@Component({
  selector: 'app-all-workers',
  templateUrl: './all-workers.component.html',
  styleUrls: ['./all-workers.component.css']
})
export class AllWorkersComponent implements OnInit {

  losTrabajadores: any[] = [];
  constructor(private workService: WorkersService) {
    this.losTrabajadores = workService.getWorkers();
   }

  ngOnInit() {
  }

}
