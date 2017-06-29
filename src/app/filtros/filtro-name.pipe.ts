import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroName'
})
export class FiltroNamePipe implements PipeTransform {

  transform(value: any, args: string): any {
    if(args === undefined){
      return value;
    } 
    else{
      return value.filter(x =>{
        return x.name.toLowerCase().includes(args.toLowerCase());
      });
    }
  }

}
