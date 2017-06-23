import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../services/workers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent implements OnInit {

  trabajador: any;
  constructor(private workService: WorkersService, private ruta: ActivatedRoute) {

   }

  ngOnInit() {
    this.trabajador = this.workService.getWorkerDetail(this.ruta.snapshot.params['id']);  
  }

}
