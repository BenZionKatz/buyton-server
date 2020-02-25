const {CLogin} = require('./ClassResLogin');
const password = require('generate-password');



getFromDB = async()=> {
    try{        
        let sql = `SELECT password, uid, Name FROM users WHERE email = ${userId}`
        const con = await getConnection();
        let res = await con.query(sql);
        return res;
    }
    catch{
        return false;
    }  
}

check = async(formLogin, cResLogin)=>{
    let formPass = formLogin.formInput.password; //from form
    let formUser = formLogin.formInput.password; // from form

    if (!formUser || !formPass){ // clientטעות במידע שמגיע מה 
        cResLogin.error = true;
        cResLogin.errorDetails.userId = false;
    }

    resDB = await getFromDB(formUser);
    if (resDB === false){ // שגיאה מה דאטה 
        return false;
    }
    if (!resDB.recordset){ // אמייל לא טוב
        return false;
    }
    if (!resDB.recordset.password == ){ // סיסמה לא טובה
        return false;
    }
    cResLogin.details.name = resDB.recordset.name;
    return true;
}


// יצירת סשן וקוקי
createSession = async(req) => {
    let user_ip = "10.0.0.10" //os.environ["REMOTE_ADDR"];
    let user_agent =  "11" //os.environ["HTTP_USER_AGENT"];
    let cookie_id = password.generate({ length: 10, numbers: true} ); 
    let user_id = req.body.userId //str(user_details[2]);
    let update_time = ""//time;//str(datetime.datetime.now());
    
    let sql = `INSERT INTO sessions ('sid', 'uid', 'create_session', 'update_session', 'ip_address', 'user_agent') 
                VALUES ('${cookie_id}', '${user_id}', '${update_time}', '${update_time}','${user_ip}', '${user_agent}')`
    try{        
        const con = await getConnection();
        let res = await con.query(sql);
        req.session.token = cookie_id;
        return ;
    }
    catch{
        return false;
    }  
}

checkLogin = async(req)=>{
    let cReslogin = new CResLogin();
    let userId;
    // convertReqToClass(req.body);
    // לבדוק האם היןזר מתעדכן כרפרנס
    let isSuccess = await checkInDB_GetUser(req.bady, cReslogin, userId); // return bool
    if (isSuccess)
        let cookie = await createSession(userId);
    res.session.sid = cookie;
    return cReslogin;
}


