// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalAppliance (name, power) {
    this.name = name;
    this.power = power;
    this.plugIn = function () {
        console.log(this.name + ' is plugged');
    }
    this.unplug = function () {
        console.log(this.name + ' is unplugged');
    }
}
function Lamp(name, power, brand) {
    this.name = name;
    this.power = power;
    this.brand = brand;
}
Lamp.prototype = new ElectricalAppliance();

function Computer(name, power, brand, type) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.type = type;
}
Computer.prototype = new ElectricalAppliance();

const tableLamp = new Lamp ('Table lamp', 5, 'Xiaomi')
const homeCD = new Computer ('Table PC', 10, 'Xiaomi', 'stationary')

tableLamp.unplug()
homeCD.plugIn()
console.log(tableLamp)
console.log(homeCD)

