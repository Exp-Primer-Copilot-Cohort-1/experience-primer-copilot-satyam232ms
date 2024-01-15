// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const redis = require('redis');
const client = redis.createClient();
const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('/api/comments/:id', (req, res) => {
//   // console.log(req.params.id);
//   axios.get(`http://localhost:3001/api/comments/${req.params.id}`)
//   .then((response) => {
//     res.send(response.data);
//   })
//   .catch((err) => {
//     res.send(err);
//   })
// })

// app.get('/api/comments/:id', (req, res) => {
//   // console.log(req.params.id);
//   axios.get(`http://localhost:3001/api/comments/${req.params.id}`)
//   .then((response) => {
//     res.send(response.data);
//   })
//   .catch((err) => {
//     res.send(err);
//   })
// })

// app.get('/api/comments/:id', (req, res) => {
//   // console.log(req.params.id);
//   axios.get(`http://localhost:3001/api/comments/${req.params.id}`)
//   .then((response) => {
//     res.send(response.data);
//   })
//   .catch((err) => {
//     res.send(err);
//   })
// })

// app.get('/api/comments/:id', (req, res) => {
//   // console.log(req.params.id);
//   axios.get(`http://localhost:3001/api/comments/${req.params.id}`)
//   .then((response) => {
//     res.send(response.data);
//   })
//   .catch((err) => {
//     res.send(err);
//   })
// })

// app.get('/api/comments/:id', (req, res) => {
//   // console.log(req.params.id);
//   axios.get(`http://localhost:3001/api/comments/${req.params.id}`)
//   .then((response) => {
//     res