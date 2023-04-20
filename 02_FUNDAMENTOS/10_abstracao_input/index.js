import inquirer from 'inquirer';

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota? '
    }, {
        name: 'p2',
        message: 'Qual a segunda nota? '
    }
])
.then((message) => {
    console.log(message);

    const media = (Number(message.p1) + Number(message.p2)) / 2;

    console.log("A média das notas é %d", media);

})
.catch(error => console.log(error))