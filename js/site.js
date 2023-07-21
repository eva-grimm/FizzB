// Gets the numbers from the start/end value input fields
function getValues() {
    // get the values from the form and attempt to convert string to number
    let startNumber = Number(document.getElementById('start-value').value);
    let endNumber = Number(document.getElementById('end-value').value);

    // validation
    if (isNaN(startNumber) == true || isNaN(endNumber) == true ) { 
        // if we don't have numbers
        Swal.fire({
            title: 'Oops!',
            text: 'Sorry, but 99 & 1 only works with real numbers',
            icon: 'error',
            backdrop: false
        });
    } else if (startNumber > endNumber) {
        // if we have a starting number greater than the ending number 
        Swal.fire({
            title: 'Oops!',
            text: 'The starting number must be less than the ending number',
            icon: 'error',
            backdrop: false
        });
    } else if (endNumber > 100) {
        // if we have a ending number greater than 100
        Swal.fire({
            title: 'Oops!',
            text: 'Sorry, but no ending number greater than 100',
            icon: 'error',
            backdrop: false
        });
    } else {
        // create an array of the numbers in range
        let range = generateNumbers(startNumber, endNumber);

        // display the numbers in range
        displayNumbers(range);
    }
}

// Creates every number in the chosen input range
function generateNumbers(start, end) {
    let range = [];

    // create an array including only the numbers in range
    for (let number = start; number <= end; number++) {
        range.push(number);
    }

    return range;
}

// Puts the numbers on the page
function displayNumbers(numbersToDisplay) {
    let tableHtml = '';
    let tableRowHtml = '';

    for (let i = 0; i < numbersToDisplay.length; i++) {
        let currentNumber = numbersToDisplay[i];

        // if the current number is one greater than a number divisible by 5, 
        // or is otherwise the number 1, then begin a new row
        if (currentNumber % 5 == 1) {
            tableRowHtml = `<tr>`;
        }

        // if the current number is divisible by 2, then make it bold
        if (currentNumber % 2 == 0) {
            tableRowHtml = `<td><strong>${currentNumber}<strong></td>`
        } else {
            tableRowHtml = `<td>${currentNumber}</td>`
        }

        // if the current number is disivible by 5, then end the row
        if (currentNumber % 5 == 0) {
            tableRowHtml += `</tr>`;
        }

        tableHtml += tableRowHtml;
    }

    document.getElementById('results').innerHTML = tableHtml;
}