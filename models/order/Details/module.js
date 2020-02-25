const password = require('generate-password');

details = async(class_details)=>{
    let date = "" + class_details.city + class_details.street + class_details.number;
    let userID = generator.generate({
        length: 10,
        numbers: true
    });

    let sql = `INSERT INTO dbo.ATBLhovala (userId, ShemLakoach,THovala,SHatchalatHovala,SugYetzika,KamutSchora,KodParitBeton,SugSchora,KamutNosefet) values
                ('${userID}','${d.userAddress}','${d.date}','${d.time}','${d.casting}','${d.amount}','${f.pritimBetonKodParit}','${f.pritimMashevaKodParit}','${f.hoseLength}')`
}

