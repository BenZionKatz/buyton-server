const modelDropdown = require('../models/order/dropdown/modelDropdown.js');

module.exports = (app) =>{
    app.get('/orderdetails', async(req,res)=>{
        let dropdowns = await modelDropdown();
        res.send(JSON.stringify(dropdowns))
    })
}
 