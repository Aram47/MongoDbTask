const express = require('express');
const {MongoClient} = require('mongodb');
const client = new MongoClient("mongodb://localhost:27017");
const dbName = "example";
const obj = {
    "name" : "Mike", 
    "age"  : 25
};

async function main() {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.insertOne(obj);
    collection.findOne(obj).then((res) => console.log(res));   
}
main();