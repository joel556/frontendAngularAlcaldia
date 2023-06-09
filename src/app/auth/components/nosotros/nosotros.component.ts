import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {
  galleryItems = [
    'assets/demo/images/patacamaya/foto17.jpg',
    'assets/demo/images/patacamaya/foto4.jpg',
    'assets/demo/images/patacamaya/foto3.jpg',
    'assets/demo/images/patacamaya/foto5.jpg',
    'assets/demo/images/patacamaya/foto6.jpg',
    'assets/demo/images/patacamaya/foto7.jpg',
    'assets/demo/images/patacamaya/foto8.jpg',
    'assets/demo/images/patacamaya/foto9.jpg',
    'assets/demo/images/patacamaya/foto11.jpg',
    'assets/demo/images/patacamaya/foto17.jpg',
    'assets/demo/images/patacamaya/foto12.jpg',
    'assets/demo/images/patacamaya/foto13.jpg',
    'assets/demo/images/patacamaya/foto14.jpg',
    'assets/demo/images/patacamaya/foto15.jpg',
    'assets/demo/images/patacamaya/foto16.jpg',
    'assets/demo/images/patacamaya/foto1.jpg',
    'assets/demo/images/patacamaya/foto18.jpg',
    'assets/demo/images/patacamaya/foto19.jpg'
    // Agrega más rutas de imágenes según sea necesario
  ];
  currentIndex = 0;

  showPreviousImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.galleryItems.length) % this.galleryItems.length;
  }

  showNextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.galleryItems.length;
  }
}
