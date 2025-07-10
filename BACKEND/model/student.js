
import mongoose from "mongoose";



const studentScema = new mongoose.Schema(
  {
    name:String,
    age : Number,
    city:String
  }
)
const Student = mongoose.model("Student",studentScema)
export default Student;