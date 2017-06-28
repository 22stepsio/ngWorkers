import { Component, OnInit, Input } from '@angular/core';
import { WorkersService } from '../services/workers.service';

@Component({
  selector: 'app-workers-by-category',
  templateUrl: './workers-by-category.component.html',
  styleUrls: ['./workers-by-category.component.css']
})

export class WorkersByCategoryComponent implements OnInit {

  @Input() filterBy: string = "all";

  losTrabajadores: any[] = [];
  constructor(private workeService: WorkersService) {
    this.losTrabajadores = workeService.getWorkers();
  }

  ngOnInit() {
  }

}
