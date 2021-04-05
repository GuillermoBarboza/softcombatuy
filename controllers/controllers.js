const Example = require('../models/Example')


module.exports = {
    testAPI: (req, res) => {
        console.log('test log')
        return res.json('mensaje desde el back')
    },

}