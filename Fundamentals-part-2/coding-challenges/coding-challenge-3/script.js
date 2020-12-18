/*
    Voltando à comparação de IMCs feita por Mark e John. Dessa vez, vamos usar objetos para implementar os cálculos. Lembre-se: BMI = mass / height ** 2 = mass / (height * height) (peso em kg e altura em metros).

    1. Para cada um deles, crie um objeto com propriedades para o nome completo (Mark Miller e John Smith), peso e altura.
    2. Crie o método 'calcBMI' eme cada objeto para calcular o IMC (o mesmo método em ambos os objetos). Armazene o valor do IMC em uma propriedade, e também retorne-a do método.
    3. Mostre no console quem tem o maior IMC, junto com o nome completo e os respectivos IMCs. Exemplo: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

*/

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const higherBMI = function (markBMI, johnBMI) {
    if (markBMI > johnBMI) {
        return `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`;
    } else if (johnBMI > markBMI) {
        return `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`;
    } else {
        return "Both have the same BMI!";
    }
}
mark.calcBMI();
john.calcBMI();

console.log(higherBMI(mark.bmi, john.bmi));