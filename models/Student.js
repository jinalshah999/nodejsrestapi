var db=require('../dbconnection');
var fs = require('fs');
var Student={
    deleteStudent:function(Student,callback){
        var path='./public'+Student.student_img;
        fs.unlink(path,function(err){
            if(err){
            console.log(err);
            }
            console.log('Deleted successfuly')});
return db.query("delete from student_tbl where rno=?",[Student.rno],callback);        
    },
addStudent:function(Student,callback){
    var dt=new Date();//current date and time of server
    var text = "";//random text
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    var base64d=Student.student_img.replace(/^data:image\/png;base64,/, "");
    var path="./public/images/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    var path1="/images/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
fs.writeFile(path,base64d,'base64',function(err){
 if(err) {
        return console.log(err);
    }
   console.log("The file was saved!");
 });

return db.query("Insert into student_tbl values(?,?,?,?)",[Student.rno,Student.name,Student.mobile_no,path1],callback);
}
};
module.exports=Student;