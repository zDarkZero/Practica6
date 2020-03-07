import { Component } from '@angular/core';
@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
  export class HomePage{
    
    animales = [
    {
    nombre: "Gato",
    imagen: 'assets/gato.png',
    sonido: 'assets/gato.mp3'
    },
    {
    nombre: "Perro",
    imagen: 'assets/perro.png',
    sonido: 'assets/perro.mp3'  
  },
    {
    nombre: "Leon",
    imagen: 'assets/leon.png',
    sonido: 'assets/leon.mp3'  
  },
    {
    nombre: "elefante",
    imagen: "assets/elefante.png",
    sonido: 'assets/ELEPHANT.mp3'  
  }
  ];

  sonidoAnimal(animalito)
  {
    let sonido=new Audio();
    sonido.src=animalito.sonido;
    sonido.load();
    sonido.play();
  }
}


