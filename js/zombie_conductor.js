/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function (sprite, x, y, ancho, alto, velocidad, rangoMov) {

  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);

  this.moverV = function () {
    this.y += this.velocidad;
  };

  this.moverH = function () {
    this.x += this.velocidad;
  }

};

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.consturctor = ZombieConductor;

ZombieConductor.prototype.mover = function () {

  //Mueve Horizontal si los rangos son Vertical
  if ((this.rangoMov.desdeX - this.rangoMov.hastaX) == 0) {
    this.moverV();
  };

  //Mueve Vertical si los rangos son Horizontal
  if ((this.rangoMov.desdeY - this.rangoMov.hastaY) == 0) {
    this.moverH()
  };


  if (this.x < this.rangoMov.desdeX || this.x > this.rangoMov.hastaX) {
    this.velocidad *= -1;
  };


  if (this.y < this.rangoMov.desdeY || this.y > this.rangoMov.hastaY) {
    this.velocidad *= -1;
  }

};


ZombieConductor.prototype.atacar = function () {
  Jugador.perderVidas(Jugador.vidas);

};
