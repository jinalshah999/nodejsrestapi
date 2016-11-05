var mysql=require('mysql');
var connection=mysql.createPool({

/*host:'localhost',
user:'root',
password:'',
database:'demo'
*/
host:'faizal123.db.9462939.hostedresource.com',
    user:'faizal123',
    password:'Jinal@9898',
    database:'faizal123'

});
module.exports=connection;