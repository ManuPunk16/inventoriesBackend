var validator = require('validator');
var Active = require('../models/actives.models');

exports.test = (req, res) => {
    console.log("Funcion de prueba exitoso");
    return res.status(200).send({
        message: 'Bien'
    });
},

exports.save = (req, res) => {
    var params = req.body;
    console.log(params);

    try {
        var validate_id_bien = !validator.isInt('$params.id_bien');
        var validate_descripcion = !validator.isEmpty(params.descripcion);
        var validate_no_serie = !validator.isEmpty(params.no_serie);
        var validate_marca = !validator.isEmpty(params.marca);
        var validate_modelo = !validator.isEmpty(params.modelo);
        var validate_valor = !validator.isInt('$params.valor');
        var validate_resguardante = !validator.isEmpty(params.resguardante);
        var validate_usuario = !validator.isEmpty(params.usuario);
        var validate_ubicacion = !validator.isEmpty(params.ubicacion);
        var validate_unidad_administrativa = !validator.isEmpty(params.unidad_administrativa);
        var validate_estatus = !validator.isEmpty(params.estatus);
        var validate_fotos = !validator.isEmpty(params.fotos);
    } catch (error) {
        // console.log(error);
        return res.status(401).send({
           status: 'error',
           message: 'Faltan datos por enviar!'
        });
    }

    if (
        validate_id_bien &&
        validate_descripcion &&
        validate_no_serie &&
        validate_marca &&
        validate_modelo &&
        validate_valor &&
        validate_resguardante &&
        validate_usuario &&
        validate_ubicacion &&
        validate_unidad_administrativa &&
        validate_estatus &&
        validate_fotos
    ) {

        const active = new Active();

        active.id_bien = params.id_bien;
        active.descripcion = params.descripcion;
        active.no_serie = params.no_serie;
        active.marca = params.marca;
        active.modelo = params.modelo;
        active.valor = params.valor;
        active.resguardante = params.resguardante;
        active.usuario = params.usuario;
        active.ubicacion = params.ubicacion;
        active.unidad_administrativa = params.unidad_administrativa;
        active.estatus = params.estatus;
        active.fotos = params.fotos;

        active.save((err, activeStored) => {
            if (err || !activeStored) {
                console.log("Error 404", err);
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha guardado el registro'
                });
            }
            console.log("Nuevo bien registrado", active.id_bien);
            return res.status(200).send({
                status: 'Success',
                active: activeStored
            });
        });
        
    } else {
        console.log("No se ha guardado", err);
        return res.status(424).send({
            status: 'error',
            message: 'Los datos no son validos'
        });
    }
}