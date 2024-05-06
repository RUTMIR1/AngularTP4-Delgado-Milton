import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoValor',
  standalone: true
})
export class TipoValorPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value >= 100){
      return value + ' $';
    }else{
      if(value == 0){
        return value;
      }else{
        return value + ' puntos'
      }
    }
  }

}
