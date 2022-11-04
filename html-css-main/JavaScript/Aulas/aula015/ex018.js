let num = [4, 5, 8, 3 , 2 , 6 , 7 , 1]
num.sort()
/*for(let pos=0; pos < num.length;pos++){
    console.log(`A posição ${pos} tem o valor de ${num[pos]}`)
}
*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor de ${num[pos]}`)
}