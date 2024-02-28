import mongoose from "mongoose";

async function connectDB(){
    if(mongoose.connections[0].readyState){
        console.log("existing connection availabe");
    }
    const mongodb_url = "mongodb://localhost:27017/pdfbot";
    try {
        await mongoose.connect(mongodb_url,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("coonnected to db.");
    } catch (error) {
        console.error(error);
    }
}

async function disconnectDB(){
       if(mongoose.connections[0].readyState){
        await mongoose.disconnect();
        console.log("db disconnected");
    }
}
export {connectDB,disconnectDB}