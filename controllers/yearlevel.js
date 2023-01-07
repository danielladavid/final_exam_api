import Yearlevel from "../models/Yearlevel.js" 



  

 export const getYearlevel = async (req, res) => { 
     try { 
         const yearlevel = await Yearlevel.find() 
         if (yearlevel.length !== 0) 
             res.status(200).json(yearlevel) 
         else 
             res.status(204).send() 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const getYearlevel = async (req, res) => { 
     try { 
         const { id } = req.params 
         const yearlevel = await Yearlevel.findById(id) 
         if (yearlevel) 
             res.status(200).json(yearlevel) 
         else 
             res.status(404).json({ error: 'resource not found' }) 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const addYearlevel = async (req, res) => { 
     try { 
         const { code, fullName, years, specialization } = req.body 
         const newYearlevel = await Yearlevel.create({ 
             code, 
             fullName, 
             years, 
             specialization 
         }) 
         const savedYearlevel = await newYearlevel.save() 
         res.status(201).json({ id: savedYearlevel._id }) 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const deleteYearlevel = async (req, res) => { 
     try { 
         await Yearlevel.deleteOne({ _id: req.params.id }) 
         res.status(204).send() 
     } catch (err) { 
         console.log(err) 
         res.status(404).json({ error: err.message }) 
     } 
 } 
  
 export const updateYearlevel = async (req, res) => { 
     try { 
         const filter = { _id: req.params.id } 
         const { code, fullName, years } = req.body 
         const update = {  
             code: code,  
             fullName: fullName,  
             years: years  
         } 
  
         await Yearlevel.findOneAndUpdate(filter, update) 
         res.status(204).send() 
     } catch (err) { 
         console.log(err) 
         res.status(404).json({ error: err.message }) 
     } 
 }