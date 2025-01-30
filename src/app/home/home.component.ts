import { Component, OnDestroy, OnInit } from '@angular/core';
import { routes } from '../shared/routes/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  public routes = routes;

  // Array de imágenes para el carousel
  images = [
    'assets/fondosits/baner.jpg',
    'assets/fondosits/banner insti-02.jpg',
    'assets/fondosits/banner insti-03.jpg'
  ];

  // Índice de la imagen actual
  currentImageIndex = 0;
  translateX = '0';

  // Intervalo para cambiar las imágenes
  intervalId: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Detener el carousel cuando se destruya el componente
    }
  }

  // Iniciar el carousel
  startCarousel() {
    this.intervalId = setInterval(() => {
      this.changeImage();
    }, 5000); // Cambiar imagen cada 5 segundos
  }

  // Cambiar la imagen
  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.translateX = `-${100 * this.currentImageIndex}%`; // Mueve el contenedor hacia la izquierda
  }
}