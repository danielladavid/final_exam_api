import Student from '../models/Student.js' 

  

 export const getStudent = async (req, res) => { 
     try { 
         const Student = await Student
             .find({ programId: req.params.programId }) 
             .populate('programId') 
             .select('version year programId') 
         if (Student.length !== 0) 
             res.status(200).json(Student) 
         else 
             res.status(204).send() 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const getStudent = async (req, res) => { 
     try { 
         const { id } = req.params 
         const Student= await Student.findById(id) 
             .populate('programId') 
             .select('version year programId') 
         if (Student) 
             res.status(200).json(Student) 
         else 
             res.status(404).json({ error: 'resource not found' }) 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const addStudent = async (req, res) => { 
     try { 
         const { version, year } = req.body 
         const programId = req.params.programId 
         const newStudent = await Student.create({ 
             version, 
             year, 
             programId 
         }) 
         const savedStudent = await newStudent.save() 
         res.status(201).json({ id: savedStudent._id }) 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const deleteStudent = async (req, res) => { 
     try { 
         await Student.deleteOne({  
             programId: req.params.programId,  
             _id: req.params.id  
         }) 
         res.status(204).send() 
     } catch (err) { 
         res.status(404).json({ error: err.message }) 
     } 
 } 
  
 export const updateStudent = async (req, res) => { 
     try { 
         const filter = {  
             programId: req.params.programId,  
             _id: req.params.id  
         } 
         const { version, year } = req.body 
         const update = {  
             version: version,  
             year: year 
         } 
  
         await Student.findOneAndUpdate(filter, update) 
         res.status(204).send() 
     } catch (err) { 
         console.log(err) 
         res.status(404).json({ error: err.message }) 
     } 
 }
