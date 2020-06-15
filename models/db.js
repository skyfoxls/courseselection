var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";
function getstudentlogin(data1,callback) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        var wherestr1= { "name":data1.name,"number":data1.number,"pwd":data1.pwd};
        dbo.collection("studentlogin").findOne(wherestr1,function (error,result) { // 返回集合中所有数据
            if (err)throw err;
            else if(result==null)
            {callback("-1")}
            // 把数据传递给控制器
           else{callback("1")}
            db.close();
        });
    });
}
function getteacherlogin(data,callback) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        var wherestr= { "name":data.name,"card":data.card,"pwd":data.pwd};
        dbo.collection("teacherlogin").findOne(wherestr,function (error,result) {
            if (err)throw err;
            else if(result==null)
            {callback("-1")}
            //把数据传递给控制器
            else{ callback("1") }
            db.close();
        }); // 返回集合中所有数据
    });
}
function getcourses(callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        dbo.collection("course"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            // console.log(result);
            callback(result)  // 把数据传递给控制器
            db.close();
        });
    });
}
function save(data3,callback){
    // console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        dbo.collection("twcherstscourse").insertOne(data3, function(err, res) {
            if (err){
                console.log("插入数据失败了~");
                callback("-1"); // -1代表插入失败了
            }
            else {callback("1"); // 1代表插入数据成功了
            console.log(data3);}
            db.close();
        });
    });
}
function saveway(data4,callback){
    // console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        dbo.collection("saveway").insertOne(data4, function(err, res) {
            if (err){
                console.log("插入数据失败了~");
                callback("-1"); // -1代表插入失败了
            };
            callback("1"); // 1代表插入数据成功了
            console.log("文档插入成功");
            db.close();
        });
    });
}
function getteacher(data7,callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        var whereStr = {"coursename":data7.coursename};
        dbo.collection("course").findOne(whereStr,function (error,result) { // 返回集合中所有数据
            if (err) throw err;
            callback(result)
            console.log(result)
            // 把数据传递给控制器
            db.close();
        });
    });
}
function getStudents(callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        dbo.collection("twcherstscourse"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            callback(result)  // 把数据传递给控制器
            db.close();
        });
    });
}
function findname(callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        dbo.collection("saveway").findOne(function (error,result) { // 返回集合中所有数据
            if (err) throw err;
            {callback(result);
            console.log(result)}// 把数据传递给控制器
            db.close();
        });
    });
}
function delt(callback) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        // 查询条件
        dbo.collection("saveway").deleteMany( function(err, result) {
            if (err) throw err;
            console.log("文档删除成功");
            callback("1");
            db.close();
        });
    });
}
exports.getstudentlogin=getstudentlogin;
exports.getteacherlogin=getteacherlogin;
exports.getcourses=getcourses;
exports.save=save;
exports.getStudents=getStudents;
exports.getteacher=getteacher;
exports.saveway=saveway;
exports.findname=findname;
exports.delt=delt;