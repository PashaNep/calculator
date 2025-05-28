const buttons = document.querySelectorAll('.buttons button');
const input = document.querySelector('input[type="text"]');
const specialChars = ['-', '+', '%', '*', '/', '=']
let output = '';

buttons.forEach(button => button.addEventListener('click', printValue));

function printValue(e) {
    const dataValue = e.target.getAttribute('data-value');
    if (dataValue === 'AC') {
        output = '';
    }
    else if (dataValue === 'DEL') {
        output = output.slice(0, -1);
    }
    else if (output === '' && specialChars.includes(dataValue)) return;
    else if (dataValue === '=') {
        output = eval(output.replace("%", "/100"));
        try {
            output = eval(output);
        }
        catch {
            output = 'Error';
        }
    }
    else {
        output += dataValue;
    }
    input.value = output;
}