const sql = require('mssql')
var con = {};


const config ={
    user:"buyton",
    password:"zaq21wsx!",
    server:"127.0.0.1",
    database:"duvdevan"
}
connect =()=>{
    con = sql.connect(config);
}

getConnection =()=>{
    return con;
}

module.exports = {
    connect,
    getConnection
}


/*const { ConnectionPool } = require('mssql')
const POOLS = {}



function createPool(config, name) {
 // if (getPool(name)) {
 //   throw new Error('Pool with this name already exists')
  //}
  return POOLS[name] = (new ConnectionPool(config)).connect()
}

function closePool(name) {
  if (Object.prototype.hasOwnProperty.apply(POOLS, name)) {
    const pool = POOLS[name];
    delete POOLS[name];
    return pool.close()
  }
}

function getPool(name) {
  {
    return POOLS[name]
  }
}

module.exports = {
  closePool,
  createPool,
  getPool
}*/