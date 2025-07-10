import express from "express";
import mongoose from "mongoose";
import Student from "./model/student.js";

const app = express();

app.use(express.json()) //middle ware *eawana data tika piliwelata hadana ek karanne

const connectionString = "mongodb+srv://admin:123@study.i1em97j.mongodb.net/?retryWrites=true&w=majority&appName=study"

mongoose.connect(connectionString) //create data base connection 
.then(
  ()=>{
     console.log("database connected !");
  }
 
).catch(
  ()=>{
    console.log("database connction err");
  }
)



app.get("/",
      (req, res)=>{

        console.log("request body",req.body);
        console.log("get request  recived");

        res.json(   //send the message sender
            {
                 message : "get reques fetch sucessful"
            }
        )
     });


// POST Route

app.post("/", (req, res) => {

  const student = new Student(
    {
      name : req.body.name,
      age : req.body.age,
      city : req.body.city
    }
  ) 
    student.save(). then(
      ()=>{
        res.json(
          {message : "studet create sucsess fully"}
        )
      }
    ).catch(
      ()=>{
        res.json(
          {message : "studet create error"}
        )
      }
    )

  console.log("Data:", req.body); // Logs data sent from Postman

  //res.json({ message: "POST request received", data: req.body });
});


// DELETE Route
app.delete("/", (req, res) => {

  console.log("DELETE request received");

  res.json({ message: "DELETE request acknowledged" });
});








function success(){
    console.log("sever isstaerted!")
}
app.listen(5000, success)
//create arrow function(no need function name this type function)

/*app.listen(5000, () => {
  console.log("server is started !");
});

setInterval(() => {}, 1000 * 60 * 60);*/