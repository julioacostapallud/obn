// Manager global para la música medieval de fondo
class MedievalMusicManager {
  private audio: HTMLAudioElement | null = null;

  start() {
    // Preparar el audio (solo crear la instancia, no reproducir todavía)
    if (!this.audio) {
      this.audio = new Audio('/sounds/medieval.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.4;
      this.audio.preload = 'auto';
    }
  }

  play() {
    // Reproducir cuando el usuario interactúa
    if (!this.audio) {
      this.start();
    }
    
    if (this.audio && this.audio.paused) {
      this.audio.play().catch((error) => {
        console.log('Error reproduciendo música medieval:', error);
      });
    }
  }
}

// Instancia singleton
export const medievalMusic = new MedievalMusicManager();

