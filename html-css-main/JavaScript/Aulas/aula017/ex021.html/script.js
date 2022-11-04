let num = document.getElementById('num')
let ban = document.getElementById('ban')
let res = document.querySelector('div#res')
let valores = []
function isNUmero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

    function inLista (n, l){
    if (l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
    }
    

function adicionar(){
    if (isNUmero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O número ${num.value} foi adicionado`
        ban.appendChild(item)
    } else{
        alert('Valor inválido ou já encontrado na lista ')
        
    }
    num.value = '' 
    num.focus()

}


function finalizar(){

if(valores.length == 0 ){
    window.alert('Adicione um número antes de finalizar')
}else{
    let total = valores.length
    valores.sort()
    let menor = valores[0]
    let maior = valores[0]
    let soma = 0
    let media = 0

    for(let pos in valores){
        soma += valores[pos]
    if (valores[pos] > maior)
        maior = valores[pos]
    if (valores[pos] < menor)
        menor = valores[pos]
    }
    media = soma / total

    res.innerHTML = ''
    res.innerHTML += `<p> ${total} números adicionados`
    res.innerHTML +=  `<p> O menor número é  ${menor} e o maior número é ${maior}`
    res.innerHTML += `<p> A soma de todos os números é de ${soma}`
    res.innerHTML += ` <p> A média dos números é ${media}`
}
}