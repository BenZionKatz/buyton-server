const DB = require('../../../DBstream');
const {OrderDropDowns} = require('./classDropDowns')
let db; 

getConcrete = async ()=>{
   let query = 'SELECT TeurParit FROM dbo.atblPritimBeton';
   let concretesTypes = await db.query(query);
   return concretesTypes
}

getPump = async() =>{
   let query   = 'SELECT TeurParit FROM dbo.AtblPritimMasheva';
   let pumpTypes = await db.query(query);
   return pumpTypes;
}

getCasting = async ()=>{
   let query = 'SELECT TeurParit FROM dbo.AtblSugYetzika';
   let castiingTypes = await db.query(query);
   return castiingTypes
}


module.exports =  async()=> {
   let orderDropDowns = new OrderDropDowns();
   /*start fetching data from DB*/ 
   db = await DB.getConnection();
   try{
      let concretes = await getConcrete();
      concretes.recordset.map(concrete =>{
         orderDropDowns.dropDowns.concretes.push(concrete.TeurParit);
      })
      console.log(concretes);
      
      let pumps = await getPump();
      pumps.recordset.map(pump =>{
         orderDropDowns.dropDowns.pumps.push(pump.TeurParit);
      })
      console.log(pumps);

      let castings = await getCasting();
      castings.recordset.map(casting =>{
         orderDropDowns.dropDowns.castings.push(casting.TeurParit);
      })
      console.log(castings);

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