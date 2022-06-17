const mongoose = require('mongoose');
const express = require('express');
const User = require('./models/User');

const PORT = process.env.MOGODB_URL || 3001;

mongoose.connect('mongodb://127.0.0.1/testdb', () => {
  console.log(`Connected to Mongoose Database on Port: ${PORT}`);
},
(err) => {
  console.log(`Error connecting to Mongoose Database: ${err}`);
});

