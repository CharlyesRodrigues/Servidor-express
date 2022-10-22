import { Express } from "express";

const app = express();

app.get("/", (req,res )=> {

res.status(200).json({message: "Hello word"});


})

app.listen(3333, () => console.log("Server running in localhost: 3333"))