mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true }).then(
    (res) => {
     console.log("Connected to Database Successfully.")
    }
  ).catch(() => {
    console.log("Conntection to database failed.")
  })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor do que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é maior do que o limete máximo de '{MAX}'."
mongoose.Error.messages.String.enum = 
    "'{VALUE}' não é valido para o atributo '{PATH}'."