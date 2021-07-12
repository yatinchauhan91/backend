module.exports = (app) => {
    const express = require("express");
    const cors = require("cors");
    const path = require('path');
    const apiRouter = require("../api/routes/index");
  
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "public")));
  
    app.use(cors());
    //API Routes
    app.use('/api/v1', apiRouter);
  };