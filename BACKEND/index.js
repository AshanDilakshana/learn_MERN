import express from "express";

const app = express();














//function success(){
 //   console.log("sever isstaerted!")
//}
//app.listen(5000, success)


//create arrow function(no need function name this type function)
app.listen(5000, () => {
  console.log("server is started !");
});
