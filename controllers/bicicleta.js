import { Bicicleta } from "../models/bicicleta";

exports.list = function (re, res) {
  res.render("bicicleta/index", { bicis: Bicicleta.allBicis });
};

exports.show = function (req, res) {
  const bici = Bicicleta.findById(req.params.id);

  res.render("bicicleta/show", { bici });
};

exports.create_get = function (req, res) {
  res.render("bicicleta/create");
};

exports.create_post = function (req, res) {
  var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);

  bici.ubicacion = [req.body.lat, req.body.lng];
  Bicicleta.add(bici);

  res.redirect("/bicicleta");
};

exports.delete = function (req, res) {
  Bicicleta.removeById(req.body.id);

  res.redirect("/bicicleta");
};

exports.update_get = function (req, res) {
  res.render("bicicleta/create");
};

exports.update_post = function (req, res) {
  var bici = Bicicleta.findById(req.params.id);

  bici.id = req.body.id;
  bici.color = req.body.color;
  bici.modelo = req.body.modelo;
  bici.ubicacion = [req.body.lat, req.body.lng];

  res.redirect("/bicicleta");
};

exports.update_get = function (req, res) {
  var bici = Bicicleta.findById(req.params.id);

  res.render("bicicleta/update", { bici });
};
