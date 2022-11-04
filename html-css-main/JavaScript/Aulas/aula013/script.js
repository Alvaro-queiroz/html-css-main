function contar(){
    let ini = document.getElementById('in')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('pass')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || 
        fim.value.length == 0 || 
        pas.value.length == 0){

        window.alert('[ERRO] Faltam Dados')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number (ini.value)
        let f = Number (fim.value)
        let p = Number (pas.value)
        if(i < f){

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F3F4}`
        }
        res.innerHTML += `\u{2728}`
        }else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F3F4}`
            } 
        }
        res.innerHTML += `\u{2728}`
    }

}
