let num = document.querySelector('input#txtn')
let tab = document.querySelector('select#select')
let res = document.querySelector('div#result')
let divisoes = []
let binario = []
console.log(binario)


function ToBinario(decimal){
    let binario
    binario = decimal.toString(2)
    return binario
}

function ToHexa(decimal){
    let hexa 
    return hexa = decimal.toString(16)
}

function Binario(){
    let b = ToBinario(Number(num.value))

    let item = document.createElement('option')
    item.text =   `${num.value} em decimal é ${b}` 
    tab.appendChild(item)
    num.value = ''
    num.focus()
}

function Hexa(){
    let b = ToHexa(Number(num.value))

    let item = document.createElement('option')
    item.text =   `${num.value} em Hexadecimal é ${b}` 
    tab.appendChild(item)
    num.value = ''
    num.focus()
}


function verificar(){
    if(valores.length == 0){
        window.alert('ADICIONE VALORES ANTES DE FINALIZAR') 
    } else {
        let tot = valores.length
        let orq = valores.sort()
        let soma = 0

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrado</p>`
        res.innerHTML += `<p>O maior valor informado é ${orq[tot-1]}</p>`
        res.innerHTML += `<p>O menor valor informado é ${orq[0]}</p>`
        for(let c in valores){
            soma += valores[c]
        }
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma/tot}</p>`
        
    }
    
}