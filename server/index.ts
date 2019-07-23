import Server from "./classess/server";


const server = new Server();

server.start(()=>{
    console.log(`Servidor corriendo en el puerto: ${server.port}`);
});