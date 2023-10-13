//Домашнее задание к лекции 1 «Основные понятия»

"use strict"

//Решение квадратного уравнения: a*x^2+b*x+c=0. Входные параметры: a, b и c
function solveEquation (a, b, c) {
	let rootsOfEquation = [];
	let descriminant = Math.pow(b, 2) - 4 * a * c;

	if (descriminant === 0) {
		rootsOfEquation[0] = -b / (2 * a);
	} else if (descriminant > 0) {
		rootsOfEquation[0] = (-b + Math.sqrt(descriminant)) / (2 * a);
		rootsOfEquation[1] = (-b - Math.sqrt(descriminant)) / (2 * a);
	} else if (descriminant < 0) {
		console.log("There are no real root, descriminant is a negative number ");
	}
	return rootsOfEquation;
}

//Расчет платежа по ипотеке. Входные данные: процент, первый взнос, сумма займа и срок
function calculateTotalMortgage(percent, contribution, amount, countMonths) {

    percent = parseFloat(percent);
    contribution = parseFloat(contribution);
    amount = parseFloat(amount);
    countMonths = parseFloat(countMonths);
    let totalPayment;

    if (Number.isNaN(percent) || Number.isNaN(contribution) || Number.isNaN(amount) || Number.isNaN(countMonths)) {
        totalPayment = false;
    } else {
        let interestRate = percent / 100 / 12;
        let loanSum = amount - contribution;
        let commonRate = (1 + interestRate) ** countMonths;
        let monthlyPayment = loanSum * interestRate * commonRate / (commonRate - 1);

        totalPayment = monthlyPayment * countMonths;
        totalPayment = parseFloat(totalPayment.toFixed(2));
    }
    return totalPayment;
}