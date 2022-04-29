const {format} = require("date-fns");
const {v4 : uuid, __esModule} = require("uuid");

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) =>{
    var dateFormat = `${format(new Date(),'dd-MM-yyyy\tHH:mm:ss')}`;
    var logMessage = `${dateFormat}\t${uuid()}\t${message}\n`;

    try{
        if(!fs.existsSync(path.join(__dirname,'logs')))
        {
            await fsPromises.mkdir(path.join(__dirname,'logs'))
        }

        await fsPromises.appendFile(path.join(__dirname,'logs','LogMessages.txt'), logMessage);
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = logEvents;