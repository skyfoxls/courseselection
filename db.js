var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/runoob';

// function getStudents(callback){
//     MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("runoob");
//         var whereStr = {"name":data};
//         dbo.collection("twcherstscourse"). find({}).toArray(function(err, result) { // 返回集合中所有数据
//             if (err) throw err;
//             callback(result)  // 把数据传递给控制器
//             db.close();
//         });
//     });
// }
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//     if (err) throw err;
//     console.log('数据库已创建');
//     var dbase = db.db("runoob");
//     dbase.createCollection('saveway', function (err, res) {
//         if (err) throw err;
//         console.log("创建集合!");
//         db.close();
//     });
// });

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     var myobj =  [
//         { name: '刘顺', number:'123451',coursenumber:'101001', coursename: '高等数学',time:'64'},
//
//     ];
//     dbo.collection("twcherstscourse").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     });
// });
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     var myobj =  [
//         { name: '刘顺', number:'123451', pwd: 'liushun'},
//         { name: '赵亚鹏',  number:'123452',pwd: 'zhaoyapeng'},
//         { name: '钱永林', number:'123453',pwd: 'qianyongling'},
//
//     ];
//     dbo.collection("teacherlogin").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     });
// });
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     var myobj =  [
//         {  number: '101001', coursename: '高等数学' , time: '64', teachername: '李老师'  },
//         {  number: '102002', coursename: '大学英语' , time: '24', teachername: '王老师'  },
//         {  number: '103003', coursename: '数据库原理' , time: '32', teachername: '赵老师'  },
//         {  number: '104004', coursename: '计算机基础' , time: '48', teachername: '刘老师'  },
//
//     ];
//     dbo.collection("course").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     });
// });