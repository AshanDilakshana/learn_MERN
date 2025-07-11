import Student from "../model/student.js"

export function createStudent (req, res){
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




