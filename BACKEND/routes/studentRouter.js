import express from 'express';
import { createStudent, getStudent } from '../controllers/studentController.js';

const studentRouter = express.Router();


studentRouter.get("/",getStudent);
studentRouter.post('/',createStudent);



studentRouter.put('/',()=>{
    
        console.log("put ok")
    }
)


studentRouter.delete('/',()=>{
    
        console.log("delete ok")
    }
)







export default studentRouter;