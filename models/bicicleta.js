export let Bicicleta = function (id, color, modelo, ubicacion) {
  this.id = id;

  this.color = color;

  this.modelo = modelo;

  this.ubicacion = ubicacion;
};

Bicicleta.prototype.toString = function () {
  return `id: ${this.id} | color: ${this.color}`;
};

Bicicleta.allBicis = [
  new Bicicleta(1, "rojo", "urbana", [-34.6012424, -58.3861497]),
  new Bicicleta(2, "blanca", "urbana", [-34.596932, -58.3808287]),
  new Bicicleta(3, "negra", "montaña", [-34.6037459, -58.3816505]),
  new Bicicleta(4, "azul", "urbana", [-34.6037459, -58.3816505]),
  new Bicicleta(5, "verde", "montaña", [-34.6037459, -58.3816505]),
  new Bicicleta(6, "amarilla", "urbana", [-34.6037459, -58.3816505]),
];

Bicicleta.add = function (aBici) {
  Bicicleta.allBicis.push(aBici);
};

Bicicleta.findById = function (aBiciId) {
  const aBici = Bicicleta.allBicis.find((x) => x.id == aBiciId);
  if (aBici) return aBici;
  else throw new Error(`No existe una Bicicleta con el id: ${aBiciId}`);
};

Bicicleta.removeById = function (aBiciId) {
  const aBici = Bicicleta.findById(aBiciId);

  for (let i = 0; i < Bicicleta.allBicis.length; i++) {
    if (Bicicleta.allBicis[i].id == aBiciId) {
      Bicicleta.allBicis.splice(i, 1);

      break;
    }
  }
};

