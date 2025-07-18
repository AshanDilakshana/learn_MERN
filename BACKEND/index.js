import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routes/studentRouter.js";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json()) //middle ware *ewana data tika piliwelata hadana ek karanne

app.use(   //authentication middleware
  (req, res, next) => { 
    let token = req.header("Authorization"); 

    if (token != null) {
      token = token.replace("Bearer ", "");
      //console.log("token", token);

        jwt.verify(token, "JwtSecretKey00",(err,decoded)=>{ //verify the token and decode it

            if(decoded == null){
              res.json({
                message: "invalid token plese login again"
              })
              return //stop the execution
          }else{
            req.user = decoded; //store the decoded token in the request object 
            console.log("decoded", decoded);
          }
         }
       )
      }
      next()
  }
)



const connectionString = "mongodb+srv://admin:123@study.i1em97j.mongodb.net/?retryWrites=true&w=majority&appName=study"

mongoose.connect(connectionString) //create data base connection 
.then(  ()=>{
     console.log("database connected !✅");
  }).catch(  ()=>{
    console.log("database connction err");
  }
)


app.use("/students",studentRouter)
app.use("/users", userRouter);  










function success(){
    console.log("sever is Started!✅")
}
app.listen(5000, success)
