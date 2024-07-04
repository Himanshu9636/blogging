import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect("mongodb+srv://shiv:gWg9tWzotFx7lu5I@training.x07yzvw.mongodb.net/bloging")
    
.then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})
}

export default connectDB;
