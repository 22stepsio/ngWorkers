import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { WorkersByCategoryComponent } from '../workers-by-category/workers-by-category.component';
import { WorkersByFilterComponent } from '../workers-by-filter/workers-by-filter.component';
import { WorkersByImageComponent } from '../workers-by-image/workers-by-image.component';
import { WorkerDetailComponent } from '../worker-detail/worker-detail.component';
import { AllWorkersComponent } from '../all-workers/all-workers.component';
import { NotFoundComponent } from '../not-found/not-found.component';


const appRoutes: Routes = [
  {path: 'navbar', component: NavbarComponent },
  {path: 'home', component: HomeComponent },
  {path: 'workersByCategory', component: WorkersByCategoryComponent },
  {path: 'workersByFilter', component: WorkersByFilterComponent },
  {path: 'workersByImage', component: WorkersByImageComponent },
  {path: 'allWorkers', component: AllWorkersComponent },
  {path: 'worker-detail/:id', component: WorkerDetailComponent },
  {path: '', redirectTo: 'home', pathMatch:'full' },
  {path:'**',component: NotFoundComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
