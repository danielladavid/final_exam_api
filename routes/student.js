import express from 'express' 



 import { getStudent, getStudent, addStudent, updateStudent, deleteStudent } from '../controllers/student.js' 

 import { verifyToken } from '../middleware/auth.js' 
  
 const router = express.Router({mergeParams: true}) 
  
 router.get('/', verifyToken, getStudent) 
 router.get('/:id', verifyToken, getStudent) 
 router.post('/', verifyToken, addStudent) 
 router.put('/:id', verifyToken, updateStudent) 
 router.delete('/:id', verifyToken, deleteStudent) 
  
 export default router

