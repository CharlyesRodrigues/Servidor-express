import express  from "express";

//Criando um servidor com o nome app
const app = express(); 

app.get("/", (req,res )=> {

res.status(200).json({message: "Hello Word"});


})

app.listen(3333, () => console.log("Server running in localhost: 3333")); 
