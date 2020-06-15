let express = require("express");
var bodyParser = require('body-parser')

let students = require("./controller/students")
let app = express();
app.use(express.static("public"))
// 配置body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 通过req.body得到客户端传递过来的数据

app.set("view engine","ejs")
app.get("/login",students.showlogin)
app.get("/tcher_login",students.showteacherlogin)
app.post("/tcher_login",students.doteacherlogin)
app.get("/sts_login",students.showstudentlogin)
app.post("/sts_login",students.dostudentlogin)
app.get("/main",students.showmainpage)
app.get("/teachermain",students.showteachermain)
app.get("/select",students.showselect)
app.get("/course",students.showcourse)
app.get("/course1",students.showcourse1)
app.get("/course2",students.showcourse2)
app.get("/course3",students.showcourse3)
app.get("/select1",students.showteacherstscourse)
app.post("/add",students.doadd)
app.post("/add1",students.doadd1)
app.post("/taecherstscourse",students.dotaecherstscourse)
app.post("/stsloginway",students.dosaveway)
app.post("/delt",students.dodelt)
app.listen(3033,()=>{
    console.log("服务器启动了~")
})
