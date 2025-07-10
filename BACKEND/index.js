import mongoose from "mongoose";

import express from "express";

const app = express();


app.use(express.json()) //middle ware *eawana data tika piliwelata hadana ek karanne

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
  console.log("POST request received");

  console.log("Data:", req.body); // Logs data sent from Postman

  res.json({ message: "POST request received", data: req.body });
});



// DELETE Route
app.delete("/", (req, res) => {


  console.log("DELETE request received");

  res.json({ message: "DELETE request acknowledged" });
});

app.use(express.json())






function success(){
    console.log("sever isstaerted!")
}
app.listen(5000, success)
//create arrow function(no need function name this type function)

/*app.listen(5000, () => {
  console.log("server is started !");
});

setInterval(() => {}, 1000 * 60 * 60);*/