const bodyParser = require('body-parser');
const express = require("express");
const Blockchain = require("./blockchain");
const PubSub = require('./publishsubscribe');
const PubSub = require("./publishsubscribe");

const app = express()
const blockchain= new Blockchain();
const PubSub=new PubSub({blockchain});


app.use(bodyParser.json());
app.get("/app/blocks", (req,res)=>{
    res.json(blockchain.chain)

});

app.post("/api/mine",(req,wqa)=>{
    const{data}=req.body;

    blockchain.addBlock({data});
    res.redirect('/api/blocks')
})

const DEFAULT_PORT= 3000;
let PEER_PORT;

if(process.env.GENERATE_PEER_PORT==='TRUE'){
    PEER_PORT=DEFAULT_PORT+ Math.ceeil(Math.random()*1000);
}
app.listen(PORT,()=> {
   console.log (`listening to PORT: ${PORT}`);
});
