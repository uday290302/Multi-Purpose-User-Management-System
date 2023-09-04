const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB
// mongoose.connect(url,{useNewUrlParser:true})
// const con = mongoose.connection;

// con.on("open",function(){
//     console.log("connected")

// })
// mongoose.set('strictQuery', true)


//const url = "mongodb://localhost:27017"//not working




                                   //v imp

//mongoose.connect(process.env.MONGO_URL).then(()=> console.log("Connected Succesfully")).catch((err)=>{console.error(err);});






    // If the Error states:

    // connect() Error :MongooseServerSelectionError: connect ECONNREFUSED ::1:27017
    
    // Then the connection to localhost is refused on the IPv6 address ::1 . Mongoose per default uses IPv6 ..
    
    // For a quick check you can set the IPv4 address explicit:
    
    // mongoose.connect('mongodb://127.0.0.1/test')

