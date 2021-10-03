const mongose = require('mongoose')

const documentScheme = new mongose.Schema({
    value: {
        type: String,
        required: true
    }
})

module.exports = mongose.model('Document', documentScheme)