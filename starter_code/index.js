const Elevator = require('./elevator.js');
const Person = require('./person.js');
let func = new Elevator ();
let pepe = new Person ("Alberto", 5, 10);
let juan = new Person ("Maria", 1, 8);
let ver = new Person ("Luis", 2, 7);
let lucas = new Person ("Juan", 4, 6);
func.call(pepe);
func.call(juan);
func.call(ver);
func.start();
setTimeout(()=> func.stop(), 23000);




