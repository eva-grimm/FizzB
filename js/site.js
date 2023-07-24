// Gets the numbers from the value input fields
function getValues() {
    // get the values from the form and attempt to convert string to number
    let fizz = Number(document.getElementById('fizz-value').value);
    let buzz = Number(document.getElementById('buzz-value').value);
    let start = Number(document.getElementById('start-value').value);
    let end = Number(document.getElementById('end-value').value);

    // validation
    if (isNaN(fizz) == true || isNaN(buzz) == true || isNaN(end) == true) {
        Swal.fire({
            title: 'Oops!',
            text: 'Sorry, but \'Fizz, B\' only works with real numbers',
            icon: 'error',
            backdrop: false
        });
    } else if (start <= 0) {
        Swal.fire({
            title: 'Oops!',
            text: 'Sorry, but start value must be greater than 0',
            icon: 'error',
            backdrop: false
        });
    } else if (end < 1) {
        Swal.fire({
            title: 'Oops!',
            text: 'Sorry, but no stop value less than 1',
            icon: 'error',
            backdrop: false
        });
    } else if (end > 5000) {
        Swal.fire({
            title: 'Oops!',
            text: 'Sorry, but no stop value greater than 5000',
            icon: 'error',
            backdrop: false
        });
    } else if (start > end) {
        Swal.fire({
            title: 'Oops!',
            text: 'Sorry, but start value can\'t be more than the end value',
            icon: 'error',
            backdrop: false
        });
    } else {
        let numbersToStyle = FizzB(fizz, buzz, start, end);

        displayNumbers(numbersToStyle);
    }
}

function FizzB(fizz, buzz, start, end) {
    let value = '';
    let currentArray = [];

    value += ((start % fizz == 0) ? 'fizz' : '') + ((start % buzz == 0) ? 'buzz' : '') + ((start % fizz != 0 && start % buzz != 0) ? start : '');
    currentArray.push(value);
    start++;

    if (start > end) {
        return currentArray;
    } else {
        let returnArray = FizzB(fizz, buzz, start, end);
        returnArray.unshift(currentArray[0]);
        currentArray = returnArray;
    }
    return currentArray;
}

// Puts the numbers on the page
function displayNumbers(numbersToStyle) {
    let tableHtml = '';
    let currentHtmlString = '';

    for (let i = 0; i < numbersToStyle.length; i++) {
        // wipe currentHtmlString clean
        currentHtmlString = '';
        // set currentNumber to the next number in the array
        let currentNumber = numbersToStyle[i];

        // if the currentNumber is one greater than a number divisible by 5 
        // or otherwise the number 1, then begin a new row
        if ((i + 1) % 5 == 1) currentHtmlString = '<tr>';

        if (currentNumber == 'fizzbuzz') {currentHtmlString += '<td class = fizz-buzz>'
        } else if (currentNumber == 'fizz') {currentHtmlString += '<td class = fizz>'
        } else if (currentNumber == 'buzz') {currentHtmlString += '<td class = buzz>'
        } else currentHtmlString += '<td>';

        currentHtmlString += ((i + 1) % 5 == 0) ? `${currentNumber}</td></tr>` : `${currentNumber}</td>`;
        tableHtml += currentHtmlString;
    }

    document.getElementById('results').innerHTML = tableHtml;
}