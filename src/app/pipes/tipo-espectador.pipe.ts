import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoEspectador',
  standalone: true
})
export class TipoEspectadorPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value == "l"){
      return "Local";
    }
    if(value == 'e'){
      return "Extranjero"
    }
    return "sin tipo";
  }
}
