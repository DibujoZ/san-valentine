import { Component, signal, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.html',
})
export class Principal {
  // Estado usando Signals (Angular 17+)
  accepted = signal(false);
  musicPlayed = signal(false);
  
  // Posición del botón "No"
  noBtnTransform = signal('translate(0px, 0px)');

  @ViewChild('bgMusic') bgMusic!: ElementRef<HTMLAudioElement>;

  // Escucha clics globales para iniciar música si el navegador bloqueó el autoplay
  @HostListener('document:click')
  playMusicOnFirstClick() {
    if (!this.musicPlayed()) {
      this.playMusic();
      this.musicPlayed.set(true);
    }
  }

  playMusic() {
    const audio = this.bgMusic.nativeElement;
    audio.play().catch(err => console.log("Esperando interacción para audio"));
  }

  moveButton() {
    const x = Math.random() * 150 - 75;
    const y = Math.random() * 150 - 75;
    this.noBtnTransform.set(`translate(${x}px, ${y}px)`);
  }

  yesClicked() {
    this.accepted.set(true);
    this.playMusic();
  }

}
