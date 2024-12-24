const express = require("express")
const mongoose = require("mongoose");
const Accounts = require("./models/accounts.modal")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://amarkumarreddynew:BBoMX20EC5fEsXpx@portfolio.kph32.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio").then(() => {
    app.listen(3000)
    console.log("Connected!");
});

app.post("/api/portfolio",async(request,response)=>{
    console.log("/api/portfolio")
    try{
        const account = await Accounts.create(request.body)
        response.status(201).send(account)
    }catch(error){
        console.log("/api/portfolio error:"+ error.message)
    }
})