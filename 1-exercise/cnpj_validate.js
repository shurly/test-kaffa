var cnpj
function validate(cnpj) {
    //Remove dots and slashs between numbers from CNPJ
    cnpj = cnpj.replace(/[^\d]+/g, '');

    //If the field CNPJ is blank, return false 
    if (cnpj == '') {
        return false;
    }

    //Invalidate more ou less that 14 numbers
    if (cnpj.length !== 14) {
        return false;
    }

    //Disregards the duplicated numbers  
    const equals = [...new Set(cnpj)]
    if (equals.length === 1) {
        return false
    }

    size = cnpj.length - 2
    number = cnpj.substring(0, size);
    digit = cnpj.substring(size);
    add = 0;

    x = size - 7;

    //loop that multiplies the CNPJ numbers 
    for (i = size; i >= 1; i--) {
        add = add + number.charAt(size - i) * x--;

        if (x < 2) {
            x = 9;
        }
    }

    //Confirmation if the division remainder is less than zero to return the first digit value
    confirm = add % 11 < 2 ? 0 : 11 - add % 11;

    if (confirm != digit.charAt(0)) {
        return false;
    }

    size = size + 1;

    number = cnpj.substring(0, size);

    add = 0;

    x = size - 7;

    //loop that multiplies the CNPJ numbers 
    for (i = size; i >= 1; i--) {
        add = add + number.charAt(size - i) * x--;

        if (x < 2) {
            x = 9;
        }
    }

    //Confirmation if the division remainder is less than zero to return the first digit value
    confirm = add % 11 < 2 ? 0 : 11 - add % 11;

    if (confirm != digit.charAt(1)) {
        return false;
    }
    return true;
}

//Notify if it is valid or not  
function cnpjResult(y) {
    if (!validate(y.value)) {
        alert('CNPJ inválido')

        y.value = ''
    }
    else {
        alert('CNPJ VÁLIDO')
        y.value = ''
    }


}