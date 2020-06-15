let db = require("../models/db")
exports.showlogin=(req,res)=>{
    res.render("login")
}
exports.showteacherlogin=(req,res)=>{
    res.render("teacherlogin")
}
exports.doteacherlogin=(req,res)=>{

    db.getteacherlogin( req.body,function(info){
        res.send(info)
    });
}
exports.showstudentlogin=(req,res)=>{
    res.render("studentslogin")
}
exports.dostudentlogin=(req,res)=>{
    db.getstudentlogin( req.body,function(info1){
        res.send(info1)
    });
}
exports.showmainpage=(req,res)=>
{
    res.render("main")
}
exports.showteachermain=(req,res)=>
{
    res.render("teachermain")
}
exports.showselect=(req,res)=>
{
    res.render("courseselection")
}
exports.showcourse=(req,res)=>
{
    db.getcourses(function(arr){
        res.render("course",{"arr":arr})
    });
}
exports.showcourse1=(req,res)=>
{
    res.render("course1")
}
exports.showcourse2=(req,res)=>
{
    res.render("course2")
}
exports.showcourse3=(req,res)=>
{
    res.render("course3")
}
exports.showteacherstscourse=(req,res)=>
{
    db.getStudents(function(arr){
        res.render("teacherstscourse",{"arr":arr})
    });

}

exports.dotaecherstscourse=(req,res)=>
{
    db.getteacher(req.body,function(info){
        res.send(info)
    })
}
exports.doadd= (req,res)=>{
    // console.log(req.body)
    db.save(req.body,function(info){
        res.send(info)
    })
}
exports.dosaveway= (req,res)=>{
    // console.log(req.body)
    db.saveway(req.body,function(info){
        res.send(info)
    })
}
exports.doadd1= (req,res)=>{
    // console.log(req.body)
    db.findname(function(info){
        res.send(info)
    })
}
exports.dodelt= (req,res)=>{
    // console.log(req.body)
    db.delt(function(info){
        res.send(info)
    })
}

