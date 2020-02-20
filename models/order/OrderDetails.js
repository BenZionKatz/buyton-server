const {Cdate} = require('../../shared/classes/Date')
const {Chour} = require('../../shared/classes/Hour')



class OrderDetails{
    constructor(){
        this.details = {
            "city"         :String,
            "street"       :String,
            "number"       :String,
            "date"         : new Cdate(),
            "hour"         : new Chour(),
            "casting"      : String,
            "amount"       : Number,
            "isConcrete"   : Boolean, 
            "concreteType" : String,
            "isPump"      : Boolean,     
            "pumpType"    : String,
            "isHose"       : Boolean,
            "hoseType"     : String
        }
    }
    
}

module.exports = {OrderDetails}