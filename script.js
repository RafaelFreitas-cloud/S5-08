const list = [
    "Pedro",
    "Maria",
    "João",
    "José",
    "Marcos",
    "Marlom",
    "Jessica",
    "Jordana",
]

// const list2 = []

// function howManyOnThelist(lista) {
//     if (lista.length == 0) {
//         return "The list is empty"
//     } else {
//         return lista.length
//     }
// }

// console.log(howManyOnThelist(list))
// console.log(howManyOnThelist(list2))

// function insertInElementInList(lista, nome) {
//     if (typeof (nome) == "string") {
//         lista.push(nome)
//     } else {
//         return "Entrada inválida!"
//     }
//     return lista
// }

// console.log(insertInElementInList(list, "Rafael"))
// console.log(insertInElementInList(list, true))
// console.log(insertInElementInList(list, 10))

function returnPositionOfElement(lista, nome) {

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].toLowerCase() == nome.toLowerCase()) {
            return i
        }
    }
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].toLowerCase() !== nome.toLowerCase()) {
            return "Element not found"
        }
    }
}

console.log(returnPositionOfElement(list, "rafael"))
console.log(returnPositionOfElement(list, "hasso"))

function findFirstElementWithLetter(lista, letra) {
    let teste = []
    for (let i = 0; i < lista.length; i++) {
        teste = lista[i]
        if (teste[0].toLowerCase() == letra.toLowerCase()) {
            return lista[i]
        }
    }
    for (let i = 0; i < lista.length; i++) {
        teste = lista[i]
        if (teste[0].toLowerCase() !== letra.toLowerCase()) {
            return "Element not found"
        }
    }
}

console.log(findFirstElementWithLetter(list, "m"))
console.log(findFirstElementWithLetter(list, "r"))

function filterAllElementsWithLetter(lista, letra){
    let result=[]
    let teste=[]
    for (let i = 0; i < lista.length; i++) {
        teste = lista[i]
        if (teste[0].toLowerCase() == letra.toLowerCase()) {
            result.push(lista[i])
        }
    }
    if (result.length==0){
        return "No ocuurrence"
    }else{
        return result
    }
}

console.log(filterAllElementsWithLetter(list,"m"))
console.log(filterAllElementsWithLetter(list,"r"))

function invertSpecificElement(lista2, palavra){
    let reverseWord=""
    if(returnPositionOfElement(lista2, palavra)=="Element not found"){
        return "Element not found"
    }else{
        for(let i=palavra.length-1;i>=0;i--){
            reverseWord+=palavra[i]
        }
        return reverseWord
    }
}

console.log(invertSpecificElement(list,"Maria"))
console.log(invertSpecificElement(list,"Rafael"))

