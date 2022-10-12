// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у
// переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function isObjHasProp (str, obj) {
    console.log(str in obj)
}
isObjHasProp (
    str = 'cow',
    obj = {
        dog: 12,
        cat: 5,
        cow: 30,
    })