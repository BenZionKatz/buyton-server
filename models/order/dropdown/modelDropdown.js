const DB = require('../../../DBstream');
const {OrderDropDowns} = require('./classDropDowns')
let db; 

getConcrete = async ()=>{
   let query = 'SELECT TeurParit FROM dbo.atblPritimBeton';
   let concretesTypes = await db.query(query);
   return concretesTypes
}

getPump = async() =>{
   let query   = 'SELECT TeurParit FROM dbo.atblPritimMishava';
   let pumpTypes = await db.query(query);
   return pumpTypes;
}

module.exports =  async()=> {
   let orderDropDowns = new OrderDropDowns();
   /*start fetching data from DB*/ 
   db = await DB.getConnection();
   try{
      let concretes = await getConcrete();
      //let pumps     = await getPump();
      concretes.recordset.map(concrete =>{
         orderDropDowns.dropDowns.concretes.push(concrete.TeurParit);
      })
      //pumps.recordset.map(pump =>{
      //   orderDropDowns.dropDowns.pumps.push(pump.TeurParit);
    //  })
      return orderDropDowns;
   } 
   catch(e) {
      console.log(e)
      orderDropDowns.error = 'true';
      return orderDropDowns;
   }
}











/*
  createOrder = (orderdetails)=>{
     let orderDetails = new OrderDetails();
     orderDetails = JSON.parse(orderdetails);

  }
  */