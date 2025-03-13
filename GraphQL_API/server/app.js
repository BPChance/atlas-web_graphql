const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const Task = require('./models/task');
const Project = require('./models/project');

const uri =
  'mongodb+srv://test:test@cluster0.8fk7z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const app = express();

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => console.log('connected to database'));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});
