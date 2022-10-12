// Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    plugIn() {
        console.log(this.name + ' is plugged');
    }
    unplug() {
        console.log(this.name + ' is unplugged');
    }
}

class Lamp extends ElectricalAppliance {
    constructor(brand, name, power) {
        super(name);
        this.power = power;
        this.brand = brand;
    }
}
class Computer extends ElectricalAppliance {
    constructor(brand, type, name, power) {
        super(name);
        this.power = power;
        this.brand = brand;
        this.type = type;
    }
}
const tableLamp = new Lamp ('Xiaomi', 'Table lamp', 5)
const homeCD = new Computer ('Xiaomi', 'stationary', 'Table PC', 10)

tableLamp.unplug()
homeCD.plugIn()
console.log(tableLamp)
console.log(homeCD)