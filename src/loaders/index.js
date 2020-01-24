const expressLoader = require('./express');


const init = async (app) => {

    const expressPromise = await expressLoader(app);
    console.log(Boolean(expressPromise));

}


module.exports = {init};