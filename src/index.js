module.exports = function toReadable (number) {
    let numberArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let tenArray = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy','eighty', 'ninety'];

    let tens = Math.floor(number / 10);
    
    let hundreds = Math.floor(number / 100);

    if (number < 20) {
        return numberArray[number];
    }

    if (number >= 20 && number < 100) {
        if (number % 10 == 0) {
            return tenArray[tens];
        }
        else return (tenArray[tens] + ' ' + numberArray[number % 10]);
    }

    if (number > 99) {
        if (number % 100 == 0) {
            return numberArray[hundreds] + ' ' + 'hundred';
        }

        else if (number % 10 == 0) {
            return (numberArray[hundreds] + ' ' + 'hundred' + ' ' + 
            tenArray[tens % 10]);
        }

        else if (number % 100 < 20) {
            return (numberArray[hundreds] + ' ' + 'hundred' + ' ' + 
            numberArray[number % 100]);
        }

        else return (numberArray[hundreds] + ' ' + 'hundred' + ' ' +
        tenArray[tens % 10] + ' ' + numberArray[number % 10]);
    }
}