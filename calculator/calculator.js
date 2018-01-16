function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (sumArr) {
	return sumArr.reduce((current, total) => total + current, 0);
}

function multiply (multArr) {
	return multArr.reduce((current, total) => total * current, 1);
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(n) {
	if (n == 0) return 1;
	
	var total = 1;
	for (var i = n; i > 0; i--) {
		total *= i;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}