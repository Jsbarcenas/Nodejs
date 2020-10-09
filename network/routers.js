const express = require('express');
const message = require ('../components/message/network')
const routers = (server)=>{
    server.use('/', message);
}