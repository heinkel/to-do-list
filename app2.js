
/* THIS SECOND APP2 VERSION WAS MADE TO RECEIVE DATA FROM INPUTS IN HTML DOC, HANDLE INPUT IN SERVER AND GET A RESPONSE BACK*/
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
const port = 3002;
const items = []; // I will have stored multiple elements here added to my list
const worksItem = [];


app.use(express.static("public"));
// declaring "Public" folder as static folder for local files using express

app.set("view engine", "ejs"); //adds EJS to my projects 
app.use(bodyParser.urlencoded({extended:true})); //this sentence allows me using body-parser get access to data inserted by the user through inputs elements in html file 
/** THIS METHOD HAPPENS WHEN LOAD FROM ROOT "/" */
app.get("/", (req, res) => {
    let listName = "todaysList";
    res.render("list2", { listTitle: date.getDate(), newListItem : items, listDestiny: listName}); // I have to "always" send all variables in html file from server to avoid server errors
});

app.get("/work", (req,res) => {
    let listName = "work"
    res.render("list2", { listTitle :listName, newListItem: worksItem , listDestiny : listName });
});

/** THIS HAPPENS WHEN USER PRESS ADD THE INPUT TO MY LIST BRING THE VALUE TO SERVER AND SERVER SEND BACK TO SPECIFIC VARIABLE INTO ROOT RESPONSE */
app.post("/", (req,res)=> {
    let item = req.body.newItem; //extracting the item inserted by user, newItem is an "input element" 
    if (req.body.list === "work"){
        if (item != '')
            worksItem.push(item);
        res.redirect("/work"); // response "redirecting" again to root "/" new item will be shown in view 
        }
    else { // I am on daylist items
        if (item != '') 
            items.push(item);
        res.redirect("/"); // response "redirecting" again to root "/" new item will be shown in view
        }
});

app.get('/about',(req,res)=>{
    res.render("about"); //no parameters for this file
});



// NOT NEEDED
// app.post("/work", (req,res)=> {
//     
//     let item = req.body.newItem; //extracting the item inserted by user, newItem is an "input element" 
//     if (item != ''){
//         worksItem.push(item);
//     }
//     res.redirect("/work"); // response "redirecting" again to root "/" new item will be shown in view 
// });


app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
