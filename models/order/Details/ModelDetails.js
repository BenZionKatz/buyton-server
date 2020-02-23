const { getConnection } = require ('../DBstream');
const { CDetails } = require('../classes/OrderDetails');
const { CQuotation } = require('./ClassQuotation')


let OD = new CDetails();
OD.details.sity = "ashdod";
OD.details.street = "yanai";
OD.details.casting = "bbr";
OD.details.amount = 10;


setOrderDetails = async(req)=>{
    
    try{
        const con = await getConnection();
        const sql1 = "INSERT INTO dbo.AtblHovala (MikumHahamasa, YahadPrika, SugYetzika, KamutSchora) VALUES ('" +OD.details.city + "')//,"+OD.details.street+"',"+OD.details.casting+"',"+OD.details.amount+"')";
        const sql2 = "ex";

        console.log(sql1, sql2);
        
        var res = await con.query(sql);
        return res;
    }
    catch{
        return false;
    }
};

getQuotation = async(req)=>{
    quot = new CQuotation();
    
    if (req === false){
        quot.error = true;
        return quot;
    }
    return quot;
}

setOrder_getQuotation = async(req)=>{
    res = setOrderDetails(req);
    res2 = getQuotation(res);
    return res2;
}


module.exports = { setOrder_getQuotation };
