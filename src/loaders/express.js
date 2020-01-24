const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const expressLoader = async (app) => {

    app.get('/status',(req,res,next) => {res.status(200).send("Server is running...")})

    app.use(bodyParser.json());
    app.use(cors());
    app.use(morgan("dev"));

    return app

}

module.exports = expressLoader;