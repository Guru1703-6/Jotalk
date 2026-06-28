import express from "express";
import { clerkMiddleware } from '@clerk/express'

import authRoutes from "./routes/authRoutes"
import chatRoutes from "./routes/chatRoutes"
import messageRoutes from "./routes/messageRoutes"
import userRoutes from "./routes/userRoutes"
import { errorHandler } from "./middleware/errorhandler";


const app = express();

app.use(express.json()); //parses incoming Json request bodies makes them available as req body in your route handlers


app.use(clerkMiddleware());
app.get("/health",(req,res) => {
    res.json({status:"ok",message:"server is running"});
});


app.use("/api/auth",authRoutes);
app.use("/api/chats",chatRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


//error handler muse come after all the routes and other middlewares so they can catch errors passed with next(err)
//or thrhown inside async  handlers.
app.use(errorHandler);



export default app;

