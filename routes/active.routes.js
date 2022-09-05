const activeController = require('../controllers/active.controller');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

module.exports = function(app){
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test", activeController.test);
    app.post("/api/save", activeController.save);
    app.get("/api/actives", activeController.getActives);
    app.get("/api/active/:id", activeController.getActive);
    app.put("/api/updateActive/:id", activeController.update);
    app.get("/api/cancellations", activeController.getCancellations);
    app.get("/api/cancellation/:id", activeController.getActive);
    app.post("/api/profile", activeController.uploadSingleImage);
    app.post("/api/photos/upload", activeController.uploadMultipleImage);
};
