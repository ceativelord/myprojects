var express=require("express");
var app=express();
var bodyParser= require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");



app.get("/", (req, res)=>{

    res.render("landing");
});


app.get("/campgrounds", (req, res)=>{

     var campgrounds =[
       {name:"Delta creek", image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
       {name:"Simon creek", image:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
       {name:"obudu creek", image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
       {name:"Delta creek", image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
       {name:"Simon creek", image:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
       {name:"obudu creek", image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
       {name:"obudu creek", image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
       {name:"obudu creek", image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
       {name:"obudu creek", image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
     ]

     res.render("campgrounds", {campgrounds:campgrounds});

});

app.post("/campgrounds", (req, res)=>{
    
    res.send("you are hitting the campground")

});

app.get("/campgrounds/new", (req, res)=>{

     res.render("new.ejs")

});





app.listen(3000, ()=>{

    console.log("YELPCAMP SERVER HAS STARTED")
});