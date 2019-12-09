const Departements=require('../models/deparment')

module.exports.list=(req,res)=>{
    Departements.find()
    .then((deparments)=>{
            res.json(deparments)
    }).catch((err)=>{
        res.json(err)
    })
}

module.exports.create=(req,res)=>{
    body=req.body
    const departments=new Departements(body)
    departments.save()
    .then((departments)=>{
        res.json(departments)
    }).catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Departements.findById(id)
    .then((deparment)=>{
        if(deparment){
         res.json(deparment)
        }else{
            res.json({})
        }
    }).catch((err)=>{
        res.json(err)
    })
}

module.exports.update=(req,res)=>{
     const id=req.params.id
     const body=req.body
     console.log(id,body)
    Departements.findByIdAndUpdate(id,body,{new:true})
    .then((deparment)=>{
        if(deparment){
        res.json(deparment)
        }else{
            res.json({})
        }
        }
    ).catch((err)=>{
        res.json(err)
    })
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Departements.findByIdAndDelete(id)
    .then((deparment)=>{
        if(deparment){
        res.json(deparment)
        }else{
            res.json({})
        }
    }).catch((err)=>{
        res.json(err)
    })
}