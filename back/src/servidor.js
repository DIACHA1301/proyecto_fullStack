import express from "express"; // para realizar la conexion con el servidor
import morgan from "morgan"; // monitorear solicitudes http

const servidor = express();
servidor.use(morgan("dev"));
servidor.use(express.json());

servidor.get('/',(solicitud , respuesta) =>{       //puede ser req, resp
respuesta.status(404).send("No encontrado"); //en caso de que se envie una conexion vacia devuelva un error entonces envie un 404 con un mensaje
})

export default servidor