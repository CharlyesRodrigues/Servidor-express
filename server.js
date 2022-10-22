
import express  from "express";

//Criando um servidor com o nome app
const app = express(); 
/* CRUD =>
C - CREATE - CRIAR
R - READ   - LER
U - UPDATE - ATUALIZAR
D - DELETE - DELETAR   */

var todos =[];
app.get("/todos", (req,res )=> {

    //Busca de todos
res.status(200).json({todos});


})

app.post ("/todos", (req,res )=> {
const { body }   =  req;

todos.push(body);

res.status(201).send()
    
    
})
app.put("/todos", (req,res )=> {

    res.status(202).send()
    
    
})
    
app.delete("/todos", (req,res )=> {
    
       
    res.status(202).send()
        
})
    

app.listen(3333, () => console.log("Server running in localhost: 3333")); 
