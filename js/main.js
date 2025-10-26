const fuego = document.querySelector(".fuego");
const nave = document.querySelector(".container");

let motor = false;
let avanzar = 0,
  inicio = 0,
  dereccion = "",
  rotate = 0;
document.addEventListener("keydown", (e) => {
  if (e.key.toLocaleLowerCase() === "e") {
    fuego.setAttribute("data-motor", "on");
    motor = true;
  }
  if (e.key.toLocaleLowerCase() === "q") {
    fuego.setAttribute("data-motor", "off");
    motor = false;
    // nave.style.transform = `translateY(${(avanzar = inicio)}px)`;
  }

  if (motor) {
    switch (e.key.toLocaleLowerCase()) {
      case "w":
        if (rotate == 0) {
            nave.style.transform = `translateY(${(avanzar -= 10)}px)`
        } else {
          if (dereccion === "derecha") {
            nave.style.transform = `translateX(${(avanzar += 10)}px) rotate(${(rotate)}deg)`;
          } else if (dereccion === "abajo") {
            nave.style.transform = `translateY(${(avanzar += 10)}px) rotate(${(rotate)}deg)`;
          } else if (dereccion === "izquierda") {
            nave.style.transform = `translateX(${(avanzar -= 10)}px)
                rotate(${(rotate)}deg)`;
          }
        }
        break;
      case "s":
        dereccion = "derecha";
        nave.style.transform = `rotate(${(rotate = 90)}deg)`;
        nave.classList.add("derecha")
        nave.classList.remove("izquierda")
        nave.classList.remove("bottom")
        break;
      case "z":
        dereccion = "abajo";
        nave.style.transform = `rotate(${(rotate = 180)}deg)`;
        nave.classList.add("bottom")
        nave.classList.remove("derecha")
        nave.classList.remove("izquierda")



        break;
      case "a":
        dereccion = "izquierda";
        nave.classList.add("izquierda")
        nave.classList.remove("bottom")
        nave.classList.remove("derecha")


        if (rotate <= 90) {
          nave.style.transform = `rotate(${(rotate = -90)}deg)`;
        } else if (rotate > 90) {
          nave.style.transform = `rotate(${(rotate = 270)}deg)`;
        }

        break;
    }
  }

  console.log(dereccion);
  console.log(rotate);
  console.log(motor);
  console.log(avanzar);
});
