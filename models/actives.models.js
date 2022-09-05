const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

const Actives = mongoose.model(
  "Actives",
  new mongoose.Schema({
    id_bien: { 
      type: Number, 
      required: true
    },
    descripcion: { 
      type: String, 
      required: true,
      uppercase: true 
    },
    no_serie: { 
      type: String, 
      required: true,
      uppercase: true
    },
    marca: { 
      type: String, 
      required: true,
      uppercase: true
    },
    modelo: { 
      type: String, 
      required: true,
      uppercase: true
    },
    valor: { 
      type: Number, 
      required: true
    },
    resguardante: { 
      type: String, 
      required: true,
      uppercase: true
    },
    usuario: { 
      type: String, 
      required: true,
      uppercase: true
    },
    ubicacion: { 
      type: String, 
      required: true,
      uppercase: true
    },
    unidad_administrativa: { 
      type: String, 
      required: true,
      uppercase: true
    },
    estatus: { 
      type: String, 
      required: true,
      uppercase: true
    },
    fotos: { 
      type: String, 
      required: true,
      uppercase: true
    },
    baja: [{
      causa_baja: { 
        type: String, 
        required: false,
        uppercase: true
      },
      no_oficio: { 
        type: String, 
        required: false,
        uppercase: true
      },
      fecha_movimiento: { 
        type: Date, 
        required: false
      },
      estatus_baja: { 
        type: String, 
        required: false,
        uppercase: true
      },
      observaciones: { 
        type: String, 
        required: false,
        uppercase: true
      }
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
    editor_count: Number
  },
  {
      timestamps: {
          createdAt: 'createdAt',
          updatedAt: 'updatedAt'
      },
  })
);

module.exports = Actives;