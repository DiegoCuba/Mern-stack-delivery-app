const mongoose = require('mongoose')
const Schema = mongoose.Schema ;


const temporalUserSchema= new Schema ( {
 name:{
   type: String,
   required:true,
     trim: true,
 },
 password:{
   type:String,
   required:true,
 },

 email:{
   type:String,
   required:true,
    index:1
 },
  roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    
emailToken:{
type: String,
require:true
},
createdAt: { type: Date, expires: 86400, default: Date.now }
},

);




const TemporalUser =mongoose.model('TemporalUser',temporalUserSchema)



module.exports = TemporalUser 