
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

let {title, description, concluded} = req.query;
concluded == "true" ? concluded = true : concluded = false;

const todo = todos.find(todo => todo.id === id);

todo.title = title ? title : todo.title;
todo.description = description ? description : todo.description ;
todo.concluded = concluded ? concluded : todo.concluded;
    res.status(202).send(todo);
    
    
})
    
app.delete("/todos", (req,res )=> {
  
    const { id } = req.headers;

    const index = todos.indexOf(todo => todo.id ==id);
    todos.splice(index, 1);

    res.status(202).send();
        
})
    

app.listen(3333, () => console.log("Server running in localhost: 3333")); 
