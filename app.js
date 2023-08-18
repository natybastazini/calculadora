/************************************************************
 * Objetivo: Criar uma calculadora.
 * Data: 11/08/2023. 
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 ************************************************************/


var readline = require('readline');

var calculadora = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


calculadora.question('Qual operação deseja calcular?? [1-adição, 2-subtração, 3-multiplicação ou 4-divisão]', function(respostaUsuario){
    let resposta = respostaUsuario
    if(resposta == ''){
        console.log('ERRO: É obrigatório selecionar uma operação!!')
        calculadora.close()
    }else if(resposta < 1 || resposta > 4){
        console.log('ERRO: É obrigatório selecionar uma operação válida!!')
        calculadora.close()
    }else if(isNaN(resposta)){
        console.log('ERRO: É obrigatório selecionar a operação utilizando apenas números!!')
        calculadora.close()
    }
    
    if(resposta == 1){
        calculadora.question('Qual o primeiro valor??', function(valor1){
            let v1 = valor1.replace(',','.')
            calculadora.question('Qual o segundo valor??', function(valor2){
                let v2 = valor2.replace(',','.')
                if(v1 == '' || v2 == ''){
                    console.log('ERRO: É obrigatório informar 2 valores para realizar a operação!!')
                    calculadora.close()
                }else if(isNaN(v1) || isNaN(v2)){
                    console.log('ERRO: Não é obrigatório informar APENAS números!!')
                    calculadora.close()
                }

                let resultado = Number(v1) + Number(v2)
                console.log('O resultado dessa operação é: ' + String(resultado).replace('.',','))
                calculadora.close()
            })
        })
    }

    if(resposta == 2){
        calculadora.question('Qual o primeiro valor??', function(valor1){
            let v1 = valor1.replace(',','.')
            calculadora.question('Qual o segundo valor??', function(valor2){
                let v2 = valor2.replace(',','.')
                if(v1 == '' || v2 == ''){
                    console.log('ERRO: É obrigatório informar 2 valores para realizar a operação!!')
                    calculadora.close()
                }else if(isNaN(v1) || isNaN(v2)){
                    console.log('ERRO: Não é obrigatório informar APENAS números!!')
                    calculadora.close()
                }

                let resultado = Number(v1) - Number(v2)
                console.log('O resultado dessa operação é: ' + String(resultado).replace('.',','))
                calculadora.close()
            })
        })
    }

    if(resposta == 3){
        calculadora.question('Qual o primeiro valor??', function(valor1){
            let v1 = valor1.replace(',','.')
            calculadora.question('Qual o segundo valor??', function(valor2){
                let v2 = valor2.replace(',','.')
                if(v1 == '' || v2 == ''){
                    console.log('ERRO: É obrigatório informar 2 valores para realizar a operação!!')
                    calculadora.close()
                }else if(isNaN(v1) || isNaN(v2)){
                    console.log('ERRO: Não é obrigatório informar APENAS números!!')
                    calculadora.close()
                }

                let resultado = Number(v1) * Number(v2)
                console.log('O resultado dessa operação é: ' + String(resultado).replace('.',','))
                calculadora.close()
            })
        })
    }

    if(resposta == 4){
        calculadora.question('Qual o primeiro valor??', function(valor1){
            let v1 = valor1.replace(',','.')
            calculadora.question('Qual o segundo valor??', function(valor2){
                let v2 = valor2.replace(',','.')
                if(v1 == '' || v2 == ''){
                    console.log('ERRO: É obrigatório informar 2 valores para realizar a operação!!')
                    calculadora.close()
                }else if(isNaN(v1) || isNaN(v2)){
                    console.log('ERRO: Não é obrigatório informar APENAS números!!')
                    calculadora.close()
                }else if(v1 == '0' || v2 == '0'){
                    console.log('ERRO: Não é possível dividir por zero!!')
                    calculadora.close()
                }

                let resultado = Number(v1) / Number(v2)
                console.log('O resultado dessa operação é: ' + String(resultado).replace('.',','))
                calculadora.close()
            })
        })
    }
})



