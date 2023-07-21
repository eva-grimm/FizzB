// Gets the numbers from the value input fields
function getValues() {
    // get the values from the form and attempt to convert string to number
    let fizzNumber = Number(document.getElementById('fizz-value').value);
    let buzzNumber = Number(document.getElementById('buzz-value').value);
    let stopNumber = Number(document.getElementById('stop-value').value);

    // validation
    if (isNaN(fizzNumber) == true || isNaN(buzzNumber) == true || isNaN(stopNumber) == true) {
        // if we don't have numbers
        Swal.fire({
            title: 'Oops!',
            text: 'Sorry, but \'Fizz, B\' only works with real numbers',
            icon: 'error',
            backdrop: false
        });
    } else if (stopNumber < 1) {
        // if we have a stop value less than 1
        Swal.fire({
            title: 'Oops!',
            text: 'Sorry, but no stop value less than 1',
            icon: 'error',
            backdrop: false
        });
    } else if (stopNumber > 5000) {
        // if we have a stop value greater than 5000
        Swal.fire({
            title: 'Oops!',
            text: 'Sorry, but no stop value greater than 5000',
            icon: 'error',
            backdrop: false
        });
    } else {
        // create an array of the numbers from 1 to stopNumber
        let numbersToStyle = generateNumbers(stopNumber);

        // convert numbersToStyle into HTML and push it to the applet page
        displayNumbers(fizzNumber, buzzNumber, numbersToStyle);
    }
}

function generateNumbers(stopNumber) {
    let numbersToStyle = [];

    // create an array of numbers from 1 up to stopNumber
    for (let i = 1; i <= stopNumber; i++) {
        numbersToStyle.push(i);
    }

    return numbersToStyle;
}

// Puts the numbers on the page
function displayNumbers(fizz, buzz, numbersToStyle) {
    let tableHtml = '';
    let currentHtmlString = '';

    for (let i = 0; i < numbersToStyle.length; i++) {
        // wipe currentHtmlString clean
        currentHtmlString = '';
        // set currentNumber to the next number in the array
        let currentNumber = numbersToStyle[i];

        // if the currentNumber is one greater than a number divisible by 5 
        // or otherwise the number 1, then begin a new row
        if (currentNumber % 5 == 1) {
            currentHtmlString = `<tr>`;
        }

        if (currentNumber % fizz == 0 && currentNumber % buzz == 0) {
            // if currentNumber is divisible by fizz *AND* buzz
            currentHtmlString += '<td class = fizz-buzz>Fizz, B!</td>'
        } else if (currentNumber % fizz == 0) {
            // if currentNumber is divisible by *ONLY* fizz
            currentHtmlString += '<td class = fizz>Fizz</td>'
        } else if (currentNumber % buzz == 0) {
            // if currentNumber is divisible by *ONLY* buzz
            currentHtmlString += '<td class = buzz>B</td>'
        } else {
            // if currentNumber is divisible by *NEITHER* fizz nor buzz
            currentHtmlString += `<td>${currentNumber}</td>`
        }

        // if currentNumber is disivible by 5, then end the row
        if (currentNumber % 5 == 0) {
            currentHtmlString += `</tr>`;
        }

        // append the string the loop's been building to tableHtml 
        tableHtml += currentHtmlString;
    }

    document.getElementById('results').innerHTML = tableHtml;
}