
import express  from "express";
import {v4 as uuidv4} from "uuid";

//Criando um servidor com o nome app
const app = express(); 
app.use(express.json());
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

app.post("/todos", (req,res )=> {
const { body }   =  req;
const todo = body;

todo.concluded = false;
todo.id = uuidv4();
//body.date = moment(date).format("DD/MM/YYYY") ;
todo.date = new Date();



todos.push(todo);

res.status(201).send(todo);
    
    
})
app.put("/todos", (req,res )=> {

const { id } = req.headers;

const {title, description, concluided} = req.query;
const todo = todos.find(todo => todo.id === id);

todo.title = title;
todo.description = description;
todo.concluided = concluided;
    res.status(202).send(todo);
    
    
})
    
app.delete("/todos", (req,res )=> {
  
    res.status(202).send();
        
})
    

app.listen(3333, () => console.log("Server running in localhost: 3333")); 
