var db=require('../dbconnection');

var Task={

getAllTasks:function(callback){

return db.query("Select * from task",callback);

},
getTaskById:function(id,callback){

    return db.query("select * from task where Id=?",[id],callback);
},
addTask:function(Task,callback){
    console.log(Task);

return db.query("Insert into task values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
deleteTask:function(id,callback){
    return db.query("delete from task where Id=?",[id],callback);
},
updateTask:function(id,Task,callback){
    return  db.query("update task set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
}

};
module.exports=Task;