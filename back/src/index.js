const app = require('./src/routes/server')

const PORT = 3001;


app.listen(PORT, ()=> {
    console.log('Serven on port ' + PORT);
})