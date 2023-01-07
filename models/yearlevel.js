import mongoose from 'mongoose' 



  

 const YearlevelSchema = new mongoose.Schema( 
     { 
         code: { type: String, required: true , unique: true}, 
         fullName: { type: String, required: true }, 
         years: { type: Number, required: true }, 
         specialization: [] 
     },  
     { timestamps: true } 
 ) 
  
 const Yearlevel = mongoose.model('Yearlevel', YearlevelSchemaSchema) 
 export default Yearlevel
