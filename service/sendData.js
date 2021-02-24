const axios = require('axios')

const emitter = require('../service/events/event')


exports.sendDataToExternalApi = async(data)=>{
    
    emitter.emit('sendDataToUrl', data);
}