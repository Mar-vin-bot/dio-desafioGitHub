

//vetores ou array

let array1 =['banana', 1, 1.8, true]

array1.forEach(function(element, indice){console.log(element, indice)});

array1.push("novo") //add novo elemento no final do array

array1.pop() //remove novo elemento no final do array não tem parametro

array1.shift(); //remove novo elemento no inicio do array não tem parametro

array1.unshift("novoItemNoIncion") //add novo elemento no inicio do array

console.log(array1.indexOf(true)) // retorna o indice do elemento dentro do indexOf

let array2 = ['banana', "maça", "pera", "manga", "chuchu"]

array2.splice(0,4) // deleta os elementos 0 e 1 por exemplo 

let array3 = array2.slice(0,3) //array3 recebe os elementos desde o (start) ate (end-1) -- banana[0] ate pera[2] 

//console.log()

