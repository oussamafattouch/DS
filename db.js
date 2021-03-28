const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://amine:94574896@cluster0.6lfyo.mongodb.net/testDB?retryWrites=true&w=majority', { useNewUrlParser : true , useUnifiedTopology : true})
.then(() => console.log('Mongo is up'))
.catch((err) => console.log('Mongo is down. Raison :',err)); 

