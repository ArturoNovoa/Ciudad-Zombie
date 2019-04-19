/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 33,
  velocidad: 15,
  vidas: 8,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  moverse: function (movX, movY) {

    this.x += movX;
    this.y += movY;

    if (movX > 0) {
      this.sprite = "imagenes/auto_rojo_derecha.png",
        this.ancho = 33,
        this.alto = 15
    };
    if (movX < 0) {
      this.sprite = "imagenes/auto_rojo_izquierda.png",
        this.ancho = 33,
        this.alto = 15
    };
    if (movY > 0) {
      this.sprite = "imagenes/auto_rojo_abajo.png",
        this.ancho = 15,
        this.alto = 33
    };
    if (movY < 0) {
      this.sprite = "imagenes/auto_rojo_arriba.png",
        this.ancho = 15,
        this.alto = 33
    };


  },
  perderVidas: function (cantidadVidas) {
    this.vidas = this.vidas - cantidadVidas;
  }
}
