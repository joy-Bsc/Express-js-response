var express=require ('express');

app = express();


//simple string response

app.get("/one",function(req,res){
    res.send("this is simple string response");
})

app.post("/two",function(req,res){
    res.send("this is simple string response");
})

app.get("/",function(req,res){
    res.send("hello express js");
})

app.get("/about",function(req,res){
    res.send("this is about page");
})

app.post("/contact",function(req,res){
    res.send("this is about contact page");
})

app.put("/terms",function(req,res){
    res.send("its all about term");
})

//response status

app.get("/three",function(req,res){

    res.status(401).end("unauthorized");
})

//jSON response

app.get("/four",function(req,res){

    myData=[
        {
            name:"Joy Dhar",
            address:"Naogaon",
            occupation:"Student"
        },
        {
            name:"Tapos Dhar",
            address:"Naogaon",
            occupation:"Business"
        },
        {
            name:"Ety Dhar",
            address:"Naogaon",
            occupation:"Housewife"
        },
        {
            name:"Riya Dhar",
            address:"Naogaon",
            occupation:"Student"
        },
        {
            name:"J.K.D",
            address:"Naogaon",
            occupation:"Business"
        }
    ]

    res.json(myData);
})

//download response
app.get("/five",function(req,res){

    res.download("./uploads/Screenshot (1).png");
})

//response redirect
app.get("/six",function(req,res){

    res.redirect("http://localhost:8030/seven");
})
app.get("/seven",function(req,res){

    res.send("Welcome to seven page");
})

//response header

app.get("/eight",function(req,res){
      res.append("name","Joy");
      res.append("age","24 year");
      res.append("study","B.Sc");
      res.append("Hobby","Riding");
      res.append("city","Naogaon");

    
    res.status(201).end("Welcome to eight page");
    
})

//response cokkie

app.get("/nine",function(req,res){

    res.cookie("name","Joy");
    res.cookie("address","Naogaon");
    res.cookie("age","24 years");
    res.end("cookie set success");
})

//clear cookie

app.get("/ten",function(req,res){

   
    res.clearCookie("age","24 years");
    res.end("cookie set success");
})


app.listen(7080,function(){

    console.log("server run success");
})