var Userdb = require('../model/model')


exports.create= (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content cannot be empty"});
        return
    }


    //new instance of the Userdb module 
    const user = new Userdb({
        name : req.body.name,
        email : req.body.email,
        gender : req.body.gender,
        status : req.body.status

    })

    //save the data to the database 
    user.save().then((data)=>{
            // res.send(data);
                res.redirect('/add-user')  //note keep the - as it is _doesnt work

        }).catch((err)=>{
            res.status(500).send({message:err.message|| "some problem occured"});
        })

    }

    exports.find= (req,res)=>{
        if(req.query.id){
            const id = req.query.id
            Userdb.findById(id).then(data=>{
                if(data){
                    res.send(data);

                }else{
                    res.status(404).send({message:err.message|| "may be user with id does not exist"});

                }
            }).catch(err=>{
    
                res.status(500).send({message:err.message|| "some problem occured"});
    
            })
            }else{ 
        Userdb.find().then(data=>{
            res.send(data);
        }).catch(err=>{

            res.status(500).send({message:err.message|| "some problem occured"});

        })
        }
    }
    
    exports.update= (req,res)=>{

       const id = req.params.id;
       console.log(id);
       const i = req.body;
       console.log(i);

       if(!req.body){
        res.status(400).send({message:"Content cannot be empty"});
        return
    }

       Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
       .then(data=>{
            if(!data){
              res.status(404).send({message:err.message|| `may be user with id: ${id} does not exist`});

           }else{
              res.send(data);

            }
              }).catch(err=>{
                res.status(500).send({message:`ERROR cannot update  user with id :${id}`});

               })
  }

    


    exports.delete= (req,res)=>{
        const id = req.params.id;
        Userdb.findByIdAndDelete(id,).then(data=>{
    if(!data){
     res.status(404).send({message:err.message|| `may be user with id: ${id} does not exist`});
 
    }else{
     res.send({message:'user deleted succesfully'});
 
    }
   }).catch(err=>{
     res.status(500).send({message:`ERROR cannot delete  user with id :${id}`});
 
     })
   }
 
     
    

    