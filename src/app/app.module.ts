import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WorkersByCategoryComponent } from './workers-by-category/workers-by-category.component';
import { WorkersByFilterComponent } from './workers-by-filter/workers-by-filter.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';

import {RoutingModule } from './routing/routing.module';
import {WorkersService } from './services/workers.service';
import { AllWorkersComponent } from './all-workers/all-workers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WorkersByCategoryComponent,
    WorkersByFilterComponent,
    NotFoundComponent,
    WorkerDetailComponent,
    AllWorkersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [WorkersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
