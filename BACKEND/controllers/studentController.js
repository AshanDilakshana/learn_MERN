import Student from "../model/student.js"
                                          

export function createStudent (req, res){
                    // only admin can create student(rest)
  if(req.user == null){
    res.status(403).json({
      message: "unauthorized user plese try angain"
    })
    return //stop the execution
  }
  if(req.user.role != "admin"){
    res.status(401).json({
      message: "you are not allowed to create student"
    })
    return //stop the execution
  }

  const student = new Student(
    {
      name : req.body.name,
      age : req.body.age,
      city : req.body.city
    }
  ) 
    student.save().then(
      ()=>{
        res.json(
          {message : "studet create sucsess fully"}
        )
      }
    )
    .catch(
      ()=>{
        res.json(
          {message : "studet create error"}
        )
      }
    )

  console.log("Data:", req.body); // Logs data sent from Postman

  //res.json({ message: "POST request received", data: req.body });
};

export function getStudent(req, res){
        Student.find(). then(
          (students)=>{
            res.json(students)
          })
        
        .catch(
          ()=>{
            console.log("data fetching err!!")
            console.error();
          })  
     }




