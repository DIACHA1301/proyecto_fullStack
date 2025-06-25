import mongoose from "mongoose";
mongoose
.connect(process.env.MONGODB)
.then((dato)=>{
    console.log("Esta conectado a la DB");
}).catch((error)=> {
    console.log("No se conecto a la DB");
});