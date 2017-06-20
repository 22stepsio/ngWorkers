import { Injectable } from '@angular/core';

@Injectable()
export class WorkersService {

  constructor() { }
  allWorkers = [];
  getWorkers(){ this.allWorkers = WORKERS.slice(0);  }

  getWorkerDetail(id: number){ 
    return WORKERS.slice(0).find( i => i.id == id);
  }
}

const WORKERS = [
  {"id":1, "category":"Accountant", "name":"Maryl Streep", "age":55, "email":"maryl@gmail.com", "picture":"assets/img/workers/1.jpg"},
  {"id":2, "category":"Architect", "name":"Brad Pitt", "age":42, "email":"brad@gmail.com", "picture":"assets/img/workers/2.jpg"},
  {"id":3, "category":"Dentist", "name":"Jhonny Deep", "age":47, "email":"jhonny@gmail.com", "picture":"assets/img/workers/3.jpg"},
  {"id":4, "category":"Designer", "name":"Julia Roberts", "age":36, "email":"julia@gmail.com", "picture":"assets/img/workers/4.jpg"},
  {"id":5, "category":"Engineer", "name":"Sandra Bullock", "age":40, "email":"sandrab@gmail.com", "picture":"assets/img/workers/5.jpg"},
  {"id":6, "category":"Journalist", "name":"Angelina Jolie", "age":43, "email":"angejoli@gmail.com", "picture":"assets/img/workers/6.jpg"},
  {"id":7, "category":"Lawyer", "name":"Kate Winslet", "age":41, "email":"kw69@gmail.com", "picture":"assets/img/workers/7.jpg"},
  {"id":8, "category":"Engineer", "name":"Tom Hanks", "age":58, "email":"tomh56@gmail.com", "picture":"assets/img/workers/8.jpg"},
  {"id":9, "category":"Photographer", "name":"Robert de Niro", "age":60, "email":"robert36@gmail.com", "picture":"assets/img/workers/9.jpg"},
  {"id":10, "category":"Accountant", "name":"Jennifer Lawrence", "age":29, "email":"jenylaw@gmail.com", "picture":"assets/img/workers/10.jpg"},
  {"id":11, "category":"Accountant", "name":"Jenifer Aniston", "age":37, "email":"jeniferanis@gmail.com", "picture":"assets/img/workers/11.jpg"},
  {"id":12, "category":"Engineer", "name":"Tom Cruise", "age":39, "email":"tomcruise@gmail.com", "picture":"assets/img/workers/12.jpg"},
  {"id":13, "category":"Engineer", "name":"Danzel Washington", "age":37, "email":"danzel@gmail.com", "picture":"assets/img/workers/13.jpg"},
  {"id":14, "category":"Journalist", "name":"Scarlett Johansson", "age":31, "email":"scarlettj@gmail.com", "picture":"assets/img/workers/14.jpg"},
  {"id":15, "category":"Photographer", "name":"Nicole Kidman", "age":40, "email":"nicolekid@gmail.com", "picture":"assets/img/workers/15.jpg"},
  {"id":16, "category":"Designer", "name":"Jack Nicolson", "age":55, "email":"jack2424@gmail.com", "picture":"assets/img/workers/16.jpg"},
  {"id":17, "category":"Designer", "name":"Natalie Portman", "age":32, "email":"natalieleon@gmail.com", "picture":"assets/img/workers/17.jpg"},
  {"id":18, "category":"Architect", "name":"Amy Hathaway", "age":29, "email":"amyprincess@gmail.com", "picture":"assets/img/workers/18.jpg"},
  {"id":19, "category":"Electrician", "name":"Al Pacino", "age":49, "email":"pacinopacina@gmail.com", "picture":"assets/img/workers/19.jpg"},
  {"id":20, "category":"Electrician", "name":"Morgan Freeman", "age":50, "email":"morganlibre@gmail.com", "picture":"assets/img/workers/20.jpg"}
];