import express from "express"
import mongoose from "mongoose";


const app =express()

app.use(express.json())






//function success(){
 //   console.log("sever isstaerted!")
//}
//app.listen(5000, success)


//create arrow function(no need function name this type function)
app.listen(5000, () => {
  console.log("server is started !");
});
