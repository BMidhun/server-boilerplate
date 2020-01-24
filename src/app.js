const config = require('./config');
const loaders = require('./loaders');
const express = require('express');

const startServer = async() => {

    const app = express();

   await loaders.init(app);

    app.listen(process.env.PORT,(err) => {

            if(err){

                console.log('Server is not running')
            }

            else
                console.log('Server is running....')
        })
}


startServer();