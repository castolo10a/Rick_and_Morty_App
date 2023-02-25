const app = require('./src/routes/server');
const { sequelize } = require('./src/DB_connection');
const saveApiData = require('./src/controllers/saveApiData');

const PORT = 3001;

sequelize.sync({ force: true }).then(async () => {
    await saveApiData();
    app.listen(PORT, ()=> {
        console.log('Serven on port ' + PORT);
    })
});