import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routes/studentRouter.js";

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

app.use("/students",studentRouter)









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