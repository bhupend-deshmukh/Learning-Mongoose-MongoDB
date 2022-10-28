require("dotenv").config();
const uri = process.env.DB_URL
const mongoose = require("mongoose");

mongoose.connect(uri,{ useNewUrlParser: true ,useUnifiedTopology: true} ,(err)=>{
    if (err) throw err.message;
    console.log('connected');
})

const detailsSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required : true
    },
    password:{
        type:Number,
        required:true
    },
    mobile_no:{
        type:Number,
        required:true
    }
})

const Student = new mongoose.model("Student",detailsSchema)

const insertData = async () =>{

    try {
        const student1 = new Student({
            name:"Nikhil",
            email:"bhupendra@gmail.com",
            password:12345,
            mobile_no:7066920804
        })
        
        const result = await Student.insertMany([student1]);
        console.log('data inserted successfully...\n',result);
        
    } catch (error) {
        console.log(error.message);
    }
}

// insertData()

const getData = async()=>{

    try {
        const result = await Student.find({})
        console.log(result);
    } catch (error) {
        console.log(error);
    }

} 

// getData()

const updateData = async()=>{
    try {
        const result = await Student.updateMany({name:'Nikhil'},{password:111111111})
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}

// updateData()

const deleteData = async()=>{
    try {
        const result = await Student.deleteMany({name:'Nikhil'})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// deleteData()