// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и
// значения только собственных свойств. Данная функция не должна возвращать значение.

function getOwnPropOfObject (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          console.log(key)
        }
    }
}
const objOld = {
    city: 'moscow',
}
obj = Object.create(objOld);
obj.name = 'andrey';
obj.surname = 'ivanov';

getOwnPropOfObject (obj)