import express, { json } from "express";
import cors from "cors";


const app = express();
const PORT = 5000;

app.use(cors());
app.use(json());



// test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

const products= [
    {id: 1,name: "Laptop"},
    {id: 2, name: "Phone"},
    {id: 3, name: "Headphones"},
    {id: 4, name: "Monitor"},
];

app.get("/products", (req,res)=>{
    res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
