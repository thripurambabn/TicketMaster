const mongoose=require('mongoose')
const Schema=mongoose.Schema

const customerSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator:{
            validator:function(value){
            return validator.isEmail(value)
        },message:function(){
            return 'invalid email format'
        }
    }},
    mobile:{
        type:String,
        unique:true,
        validator:{
            validator:function(value){
                return this.validator.isNumber(value)
            },message:function(){
                return 'invalid mobile number'
            }
        }   
    }
})

const Customer=mongoose.model('Customer',customerSchema)

module.exports=Customer