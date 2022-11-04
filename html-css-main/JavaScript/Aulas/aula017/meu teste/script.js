let num = document.getElementById('num')
let ban = document.getElementById('ban')
let n = []
       
function guardar(){

    if (num.value == 0  ){
        alert('Um  número deve ser inserido')
    } else if (num.value > 100){
        alert('Insira um número de 0 à 100' )
    }else{
            let item = document.createElement('option')
            item.text = `O número ${num.value} foi adicionado`
            ban.appendChild(item)
            n++
            }
        
    }
            

