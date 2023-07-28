// Gets the numbers from the value input fields
function getValues() {
    // get the values from form, convert strings to number, and drop decimals
    let fizz = parseInt(document.getElementById('fizz-value').value);
    let buzz = parseInt(document.getElementById('buzz-value').value);
    let start = parseInt(document.getElementById('start-value').value);
    let end = parseInt(document.getElementById('end-value').value);

    // validation
    if (Number.isInteger(fizz)
        && Number.isInteger(buzz)
        && Number.isInteger(start)
        && Number.isInteger(end)
        && start > 0
        && end > 0
        && end <= 3000
        && start <= end) {
        let numbersToDisplay = FizzB(fizz, buzz, start, end);

        displayNumbers(numbersToDisplay);
    } else {
        Swal.fire({
            title: 'Oops!',
            text: 'Sorry, but there\'s a problem with your inputs. \'Fizz, B\' only works with real numbers, start and end values greater than 0, a max end value of 3,000, and a start value that isn\'t greater than the end value',
            icon: 'error',
            backdrop: false
        });
    }
}

function FizzB(fizz, buzz, start, end, result = []) {
    // classic method
    // let value = ''
    // if (start % fizz == 0) value +='fizz';
    // if (start % buzz == 0) value +='buzz';
    // if (value == '') value += start;

    // ternary one-line method
    let value = (start % fizz == 0 ? 'fizz' : '') + (start % buzz == 0 ? 'buzz' : '') || start;

    result.push(value);
    start++;
    if (start > end) return result;
    else return FizzB(fizz, buzz, start, end, result);
}

function displayNumbers(numbersToDisplay) {
    let tableHtml = '';

    for (let i = 0; i < numbersToDisplay.length; i++) {
        tableHtml += `<div class = "col border border-dark ${numbersToDisplay[i]}">${numbersToDisplay[i]}</div>`;
    }

    document.getElementById('results').innerHTML = tableHtml;
}