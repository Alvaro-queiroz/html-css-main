let num = [5,8,2,9,3]
num.push(7)
let pos =num.indexOf(2)
console.log(num)
if ( pos == -1){
    console.log (`O valor não foi encontrado`)
} else{
    console.log(`O valor está na posição ${pos}`)
}
