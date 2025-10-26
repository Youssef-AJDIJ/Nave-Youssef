class Nave {
  constructor(containerSelector, fuegoSelector) {
    // Elementos del DOM
    this.nave = document.querySelector(containerSelector);
    this.fuego = document.querySelector(fuegoSelector);

    // Estado inicial
    this.motor = false;
    this.avanzar = 0;
    this.inicio = 0;
    this.direccion = "";
    this.rotate = 0;

    // Iniciar controles
    this.initControls();
  }

  // 🔥 Enciende o apaga el motor
  toggleMotor(on) {
    this.motor = on;
    this.fuego.setAttribute("data-motor", on ? "on" : "off");
  }

  // 🧭 Cambia la dirección (rotación)
  rotar(direccion, grados) {
    this.direccion = direccion;
    this.rotate = grados;
    this.nave.style.transform = `rotate(${grados}deg)`;
    this.nave.classList.remove("derecha", "izquierda", "bottom");
    this.nave.classList.add(direccion);
  }

  // 🚀 Mueve la nave hacia la dirección actual
  mover() {
    if (!this.motor) return;

    if (this.rotate === 0) {
      this.nave.style.transform = `translateY(${(this.avanzar -= 10)}px)`;
    } else {
      switch (this.direccion) {
        case "derecha":
          this.nave.style.transform = `translateX(${(this.avanzar += 10)}px) rotate(${this.rotate}deg)`;
          break;
        case "abajo":
          this.nave.style.transform = `translateY(${(this.avanzar += 10)}px) rotate(${this.rotate}deg)`;
          break;
        case "izquierda":
          this.nave.style.transform = `translateX(${(this.avanzar -= 10)}px) rotate(${this.rotate}deg)`;
          break;
      }
    }
  }

  // 🎮 Controlador de teclas
  initControls() {
    document.addEventListener("keydown", (e) => {
      const key = e.key.toLowerCase();

      switch (key) {
        case "e":
          this.toggleMotor(true);
          break;
        case "q":
          this.toggleMotor(false);
          break;
        case "w":
          this.mover();
          break;
        case "s":
          this.rotar("derecha", 90);
          break;
        case "z":
          this.rotar("abajo", 180);
          break;
        case "a":
          if (this.rotate <= 90) {
            this.rotar("izquierda", -90);
          } else if (this.rotate > 90) {
            this.rotar("izquierda", 270);
          }
          break;
      }

      // Debug
      console.log({
        motor: this.motor,
        direccion: this.direccion,
        rotate: this.rotate,
        avanzar: this.avanzar,
      });
    });
  }
}

// 🚀 Instanciamos la nave
const nave = new Nave(".container", ".fuego");
