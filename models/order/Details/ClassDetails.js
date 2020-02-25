const {Cdate} = require('../../../shared/classes/Date')
const {Chour} = require('../../../shared/classes/Hour')


class CDetails{
    constructor(){
        this.details = {
            "isConcrete"  : Boolean,
            "isPump"      : Boolean,  
            "city"        :String,
            "street"      :String,
            "number"       :String,
            "date"         : new Cdate(),
            "hour"         : new Chour(),
            "castingType"  : String,
            "concreteType" : String,
            "amount"       : Number,
            "pumpType"      : String,
            "isDailyHose"    : Boolean,
            "rubberHose"     : Number
        }
    }  
}

module.exports = {CDetails}
