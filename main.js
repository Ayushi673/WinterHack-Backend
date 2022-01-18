const {MongoClient} = require("mongodb");
const Express = require("express");
const Cors = require("cors");
require('dotenv').config();
const app = Express();

app.use(Cors());
app.use(Express.json());


const client = new MongoClient(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

var collection;

app.post("/search", async(req,res)=>{
    try{
        let result = await collection.aggregate([
            {
                "$search":{
                    "index": "autocomplete",
                    "compound": {
                        "must": [
                            {
                                "autocomplete": {
                                    "query": `${req.body.query}`,
                                    "path": "name"
                                }
                            },
                            {
                                "geoWithin":{
                                    "circle":{
                                        "center":{
                                            "type":"Point",
                                            "coordinates": [req.body.position.lng,req.body.position.lat]
                                        },
                                        "radius": 10000
                                    },
                                    "path":"address.location"
                                }
                            }
                        ]
                    }
                }
            }
        ]).toArray();
        res.send(result);
    } catch(err){
        res.status(500).send({ message: err.message, statusCode: 500});
    }
})

let port = process.env.PORT || 8181;
app.listen(port, async()=>{
    try{
        await client.connect();
        collection= client.db("sample_airbnb").collection("listingsAndReviews");
    }catch(err){
        console.log(err);                                                                                                           
    }
})