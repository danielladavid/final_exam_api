import express from 'express' 

 import { getYearlevel, getYearlevel, addYearlevel, updateYearlevel, deleteYearlevel } from '../controllers/yearlevel.js'; 

 import { verifyToken } from '../middleware/auth.js'; 
  
 const router = express.Router(); 
  
 router.get('/', verifyToken, getYearlevel) 
 router.get('/:id', verifyToken, getYearlevel) 
 router.post('/', verifyToken, addYearlevel) 
 router.put('/:id', verifyToken, updateYearlevel) 
 router.delete('/:id', verifyToken, deleteYearlevel) 
  
 export default router