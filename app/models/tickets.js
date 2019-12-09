const mongoose=require('mongoose')

const Schema=mongoose.Schema

const ticketSchema=new Schema({
    customer:{
        type:Schema.Types.ObjectId,
        ref:'Customer',
        required:true
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:'Department',
        required:true
    },
    employees:{
        type:[Schema.Types.ObjectId],
        ref:'Employee'
    },
    title:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true,
        enum:['low','high']
    },
    message:{
        type:String,
        required:true
    },
    isResolved:{
        type:Boolean,
        default:false,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    

})

const Tickets=mongoose.model('Tickets',ticketSchema)

module.exports=Tickets