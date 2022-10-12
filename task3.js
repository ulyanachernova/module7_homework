// Написать функцию, которая создает пустой объект, но без прототипа.

function newObj () {
    let obj = Object.create(null)
    console.log(obj)
}
newObj()