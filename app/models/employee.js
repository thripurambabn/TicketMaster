const mongoose=require('mongoose')
const Schema=mongoose.Schema

const employeeSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        validator:{
            validator:function(value){
                return validator.isEmail(value)
            },message:function(){
                return 'invalid email format'
            }
        },
        mobile:{
            type:String,
            unique:true,
            validator:{
                validator:function(value){
                    return validator.isNumber(value)
                },message:function(){
                    return 'invalid mobile number'
                }
            },
            department:{
                type:Schema.Types.ObjectId,
                required:true,
                ref:'Department'
            }
        }
    }
})

const Employee=mongoose.model('Employee',employeeSchema)

module.exports=Employee