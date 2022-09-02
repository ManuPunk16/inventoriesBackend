const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

const Actives = mongoose.model(
  "Actives",
  new mongoose.Schema({
    id_bien: { type: Number, required: true },
    descripcion: { type: String, required: true },
    no_serie: { type: String, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    valor: { type: Number, required: true },
    resguardante: { type: String, required: true },
    usuario: { type: String, required: true },
    ubicacion: { type: String, required: true },
    unidad_administrativa: { type: String, required: true },
    estatus: { type: String, required: true },
    fotos: { type: String, required: true },
    baja: [{
      causa_baja: { type: String, required: false },
      no_oficio: { type: String, required: false },
      fecha_movimiento: { type: Date, required: false },
      estatus_baja: { type: String, required: false },
      observaciones: { type: String, required: false }
    }],
    create_user: {
        id: String,
        username: String,
        email: String,
        accessToken: String,
      },
      editor_user: {
        id: String,
        username: String,
        email: String,
        accessToken: String,
      },
    editor_count: String
  },
  {
      timestamps: {
          createdAt: 'createdAt',
          updatedAt: 'updatedAt'
      },
  })
);

module.exports = Actives;