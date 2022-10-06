import * as express from 'express'




const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send ('Hello, World!')
});

app.get('/bsm', (request, response) => {
    response.send ('Behaviuor Skills and Mentalities:<br>' +
    'Mentalities:<br>Responsabilidade pessoal<br> Pertisistencia<br>Orientação ao Futuro<br>Mentalidade de Crescimento<br>' +
    '<br>Skills:<br>Trabalho em equipe<br>Atenção aos detalhes<br>Proatividade<br>Comunicação.<br>')
});

app.get('/learning', (request, response) => {
    response.send ('Sendimentar meus conhecimentos de banco de dados e aprender mais sobre express')
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}!`);
    
});
