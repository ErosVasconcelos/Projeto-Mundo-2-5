const mongoose = require('mongoose');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect('mongodb://localhost/livraria', options)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = mongoose;
