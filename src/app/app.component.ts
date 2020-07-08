import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre     : string   = 'Capitán América';
  nombre2    : string   = 'aLaN YaEL'
  arreglo               = [1,2,3,4,5,6,7,8,9,10];
  personajes : string[] = ['Simba', 'Capitán América', 'Scar', 'Ironman'];
  PI         : number   = Math.PI;
  porcentaje : number   = 0.234;
  salario    : number   = 12345.5;
  videoUrl   : string   = "https://www.youtube.com/embed/2nJqXZ72Pmw";
  activar    : boolean  = true;

  heroe      = {
    nombre: 'Logan',
    alias:  'Wolverine',
    edad:   500,
    direccion: {
      calle:'pimera',
      casa:20
    }
  };
  valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  })
  
  idioma :string = 'es';

  fecha  :Date   = new Date();
  
  

  
}
