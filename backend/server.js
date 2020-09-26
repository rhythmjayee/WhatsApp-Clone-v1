const express=require('express');
const mongoose=require('mongoose');
const Messages=require('./dbmessages');
const Pusher = require('pusher');
const cors =require('cors');

// import express from 'express';
// import mongoose from 'mongoose';


const app=express();
const port=process.env.PORT || 9000;
const pusher = new Pusher({
    appId: '1079958',
    key: 'a5f7a8fa540bcf9ae16a',
    secret: '527af5936162d2dad5fe',
    cluster: 'eu',
    encrypted: true
  });


app.use(express.json());
app.use(cors());
// app.use((req,res,next)=>{
//     res.setHeader("Acess-Control-Allow-Origin","*");
//     res.setHeader("Acess-Control-Allow-Headers","*");
//     next();
// });

const connection_url='';

mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db=mongoose.connection;

db.once('open',()=>{
    console.log('DB connected');
    const msgCollection =db.collection('messagecontents');
    const changeStream=msgCollection.watch();

    changeStream.on('change',(change)=>{
        console.log(change);
        if(change.operationType==='insert'){
            const messageDetails=change.fullDocument;
            pusher.trigger('messages','inserted',{
                name:messageDetails.name,
                message:messageDetails.message,
                timestamp:messageDetails.timestamp,
                received:messageDetails.received
            });
        }
        else{
            console.log("Error triggering Pusher");
        }
    });
});

app.get('/',(req,res)=>{
    res.status(200).send('hello world');
});

app.get('/messages/sync',(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
});

app.post('/message/new',(req,res)=>{
    const dbMessage=req.body;
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.send(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})

app.listen(port,(req,res)=>{
    console.log(`listening on ${port}`);
});
