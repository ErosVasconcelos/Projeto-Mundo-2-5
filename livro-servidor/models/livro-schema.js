const mongoose = require('./conexao');

const LivroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
});

const Livro = mongoose.model('Livro', LivroSchema);

module.exports = Livro;
