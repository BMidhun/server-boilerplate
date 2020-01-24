const dotenv = require('dotenv');

const dotEnvConfig =  dotenv.config();


if(!dotEnvConfig) {

    throw new Error('.env file not found under src directory');
}

module.exports = {

    port : process.env.PORT
}