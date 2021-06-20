var cnpj
function validate(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, ''); //Exclui pontos e barras entre os números do cnpj
     
    //Se o campo cnpj estiver em branco retorna false
    if (cnpj == '') { 
        return false;
    }

    //Não considera mais ou menos que 14 números para cnpj
    if(cnpj.length !== 14){
        return false;
    }

    //Desconsidera os números repetidos
    const equals = [...new Set(cnpj)]
    if (equals.length === 1){
        return false
    } 


     size = cnpj.length - 2
     number = cnpj.substring(0, size);
     digit = cnpj.substring(size);
     add = 0;
     
     x = size - 7;
    
     //loop que faz a multiplicação entre os números do cnpj
     for(i = size; i >= 1; i--){
        add = add + number.charAt(size - i) * x--;

        if(x < 2){
            x = 9;
        }
     }

     //Confirmação se o resto da da divisão menor que zero para retornar o valor do primeiro dígito
     confirm = add % 11 < 2 ? 0 : 11 - add % 11;

     if(confirm != digit.charAt(0)){
         return false;
     }

    size = size + 1;

    number = cnpj.substring(0, size);

    add = 0;

    x = size - 7;

    //loop que faz a multiplicação entre os números do cnpj
    for(i = size; i >= 1; i--){
        add = add + number.charAt(size - i) * x--;

        if(x < 2){
            x = 9;
        }
    }

//Confirmação se o resto da da divisão menor que zero para retornar o valor do segundo dígito 
    confirm = add % 11 < 2 ? 0 : 11 - add % 11;

    if(confirm != digit.charAt(1)){
        return false;
    }
    return true;



 
}
//Função que vai responder se é válido ou não
function cnpjResult(y){
    if(!validate(y.value)){
        alert('CNPJ inválido')

        y.value = ''
    }
    else{
        alert('CNPJ VÁLIDO')
        y.value = ''
    }
    
   
}