import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = false): string {
  //   let contrasena:string = "";

  //   if (activar) {
  //     for (let letra = 0; letra < value.length; letra++) {
  //       contrasena = '*'+contrasena;
  //     }
  //     return contrasena;
  //   } else {
  //     return value;
  //   }
  // }
  return (activar) ? '*'.repeat(value.length) : value; 
  }
}
