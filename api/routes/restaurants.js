var express = require('express');
const router = require('express-promise-router')();
const { MongoClient } = require('mongodb');
require('dotenv').config()

router.get('/', async function(req, res, next) {
    const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBURL}?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect(async(err) => {
        const restaurantLocs = await client.db("restaurants").collection("locations").find({}).toArray();
        console.log(restaurantLocs);
        res.send(restaurantLocs);
        client.close();
    });
});

module.exports = router;