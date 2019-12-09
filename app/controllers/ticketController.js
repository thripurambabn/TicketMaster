const Tickets=require('../models/tickets')

module.exports.list=(req,res)=>{
    Tickets.find()
    .then((tickets)=>{
        res.json(tickets)
    }).catch((err)=>{
        res.json(err)
    })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const tickets=new Tickets(body)
    tickets.save()
    .then((tickets)=>{
        res.json(tickets)
    }).catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Tickets.findById(id)
    .then((tickets)=>{
        if(tickets){
        res.json(tickets)
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
      console.log(body,id)
      Tickets.findByIdAndUpdate(id,body,{new:true})
      .then((tickets)=>{
          if(tickets){
          res.json(tickets)
          }else{
              res.json({})
          }
      }).catch((err)=>{
          res.json(err)
      })
}

module.exports.destroy=(req,res)=>{
      const id=req.params.id
      Tickets.findByIdAndDelete(id)
      .then((tickets)=>{
          if(tickets){
          res.json(tickets)
          }else{
              res.json({})
          }
      }).catch((err)=>{
          res.json(err)
      })
}