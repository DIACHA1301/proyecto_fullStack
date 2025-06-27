import express from "express"; // para realizar la conexion con el servidor
import morgan from "morgan"; // monitorear solicitudes http
import cors from "cors";
import routerUsers from "./routers/routerUsers.js";

const servidor = express();
servidor.use(cors());
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use('/users', routerUsers);

servidor.get('/',(sol , res) =>{       //puede ser req, resp
res.status(404).send("No encontrado"); //en caso de que se envie una conexion vacia devuelva un error entonces envie un 404 con un mensaje
})

export default servidor