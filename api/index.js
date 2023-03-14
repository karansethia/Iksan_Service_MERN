const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')
const servicesRoute = require('./routes/services')
const servicesProvidersRoute = require('./routes/servicesProviders')
const usersRoute = require('./routes/users')

const app = express();
const connect = async () =>{

    try {
        await mongoose.connect('mongodb+srv://iksanmern:iksanmern_kmg@iksandata.akoghe7.mongodb.net/iksanData?retryWrites=true&w=majority');
        console.log('connected to mongodb atlas');
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on('disconnected',()=>{
    console.log("mongodb disconnected");
})

//middlewares
app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/services', servicesRoute);
app.use('/serviceProvider', servicesProvidersRoute);



app.listen(3010,() =>{
    connect()
    console.log("connected to the backend");
})