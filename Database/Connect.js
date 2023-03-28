const mongoose = require('mongoose');''
const { config } = require('dotenv');

config();

const connect = () => { 
  
  mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://root:655816@cluster0.rjjbtum.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }).then(() => console.log('Conectado ao banco de dados!')
  ).catch((err) => console.log(err));
}

module.exports = connect;
