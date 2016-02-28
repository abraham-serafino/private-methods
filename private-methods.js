class Calculation {
    perform() {
        function calculateResult() {
            return input1 / input2;
        }

        const input1 = 99,
            input2 = 11;

        this.result = calculateResult();
    }
}

var calculation = new Calculation();
calculation.perform();
console.log(calculation.result);