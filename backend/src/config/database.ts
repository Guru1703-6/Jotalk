import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);




import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("Mango db connect succcessfully");
    }
    catch (error){
        console.error("Mango db connection error:",error);
        process.exit(1) // exit with  failure
        // status code 1 means failure
        // status code 0 means success
    
    }
}