import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProfesion'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(args === "all"){
      return value;
    }
    else{
      return value.filter(x =>{
        return x.category === args;
      });
    }
  }

}
