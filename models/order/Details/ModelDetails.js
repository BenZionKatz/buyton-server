const { getConnection } = require ('../../../DBstream');
const { CDetails } = require('./ClassDetails');
const { CQuotation } = require('./ClassQuotation');
const password = require('generate-password');



getUseridFromSession = async()=>{
    let sql = `SELECT userid FROM 'session' WHERE 'sid' LIKE ${cookie}`;
    const con = await getConnection();
    var result = await con.query(sql).recordset;
    if(result)
        return result.userId;
    // צריך לטפל במקרה שלא חזר
}

isConSession = async(sid) => {
    let sql = `SELECT userid FROM 'session' WHERE 'sid' LIKE ${cookie}`;
    const con = await getConnection();
    var result = await con.query(sql).recordset;
    if(result)
        return true;
    return false;
}

getUserId = async(session) => {
    let userId;
    if (session.sid) //&& await isConSession(req.session.sid)){
        userId = "qwert";  //getUseridFromSession();
    
    else userId = password.generate({
        length: 10,
        numbers: true
    });
    return userId;
}

setDetails = async(req, isNewUser)=>{
   
    let user_id = getUserId(req.session);
    
    try{        
        let sql = `EXEC dbo.OrderDetails @UserId = ${user_id}, @userAddress ="g", @casting = "y",@amount = 8, @concreteType = "o", @pumpType = "gf", @hoseLength = 7;`
        const con = await getConnection();
        var res = await con.query(sql);
        return res;
    }
    catch{
        return false;
    }
};

getQuotation = async(data)=>{
    quot = new CQuotation();
    
    if (data === false){
        quot.error = true;
        return quot;
    }
    quot.quot.companyName = "בוזגלו";
    quot.quot.price = data.recordsets[1][0].SachHakolKolel; // from DBtable
    quot.quot.orderId = Object.values( data.recordsets[0][0])[0] // from DBtable
    return quot;
}


setDetailsGetBid = async(req)=>{
    
    let res = await setDetails(req, isNewUser);
    let res2 = getQuotation(res);
    return res2;
}



isNewUser = async(req) => {
    if (req.session.sid && await isConSession())
        isNewUser = true;
    else isNewUser = false;
} 


setDetailsNewUser= async(req)=>{
    let userID = password.generate({
        length: 10,
        numbers: true
    });
    // let userID = "234567";
    try{  
        //let sql = `INSERT INTO dbo.ATBLhovala (userId, ShemLakoach,THovala,SHatchalatHovala,SugYetzika,KamutSchora,KodParitBeton,SugSchora,KamutNosefet) values
                 //   ('${userID}','${d.userAddress}','${d.date}','${d.time}','${d.casting}','${d.amount}','${d.concreteType}','${d.pompType}','${d.rubberHose}')`;  
        // let sql = `INSERT INTO dbo.ATBLhovala (userId, ShemLakoach,THovala,SHatchalatHovala,SugYetzika,KamutSchora,KodParitBeton,SugSchora,KamutNosefet) values
        //             ('${userID}','${d.userAddress}','${d.date}','${d.time}','${d.casting}','${d.amount}','${f.pritimBetonKodParit}','${f.pritimMashevaKodParit}','${f.hoseLength}')`;
        let sql = `EXEC dbo.OrderDetails @UserId = "wert", @userAddress ="a", @casting = "d",@amount = 5, @concreteType = "f", @pumpType = "g", @hoseLength = 8;`
        const con = await getConnection();
        var res = await con.query(sql);
        return res;
    }
    catch{
        return false;
    }

}
module.exports = { setDetailsGetBid };


setOrder_getQuotation = async(req)=>{
    let newUser;
    if (req.session.sid){ //&& await isConSession()){
        newUser = true;
        //let res = setDetails(JSON.parse(req.body));
        let res = await setDetailsNewUser(req.body);
        let res2 = getQuotation(res);
        return res;
    }
    else {
        //let res = setDetailsNewUser(JSON.parse(req.body));
        let tmpRes = await setDetailsNewUser(req.body);
        let res = getQuotation(tmpRes);
        console.log(res);
        return res;
    }
}
//module.exports = { setOrder_getQuotation };
