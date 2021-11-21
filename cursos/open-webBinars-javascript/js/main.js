//objetos

 const persona = {
     nombre: 'jhon',
     edad: 30,
     saludar: function () {
         console.log('hola ' + this.nombre);
     }
 };
 console.log(persona.saludar());

 //ejemplo 
 const jugador = {
     fuerza: 1,
     incrementarfuerza: function() {
    this.fuerza += 1;
     },
     consultarfuerza: function() {
    console.log('Tu fuerza es: ' + this.fuerza)
     }
 }
 jugador.consultarfuerza();
 jugador.incrementarfuerza();
 jugador.consultarfuerza();

 //objeto date
 const date = new Date();//sin parametro fecha actual

 console.log(date);

 const year = date.getFullYear();
 const month = date.getMonth();
 const day = date.getUTCDay();
 console.log('Hola, hoy es: '+ day + '-' +  month + '-' + year);

//objeto math
const pi = Math.PI;
console.log(pi);

console.log(Math.min(1, 2, 3, 0, 435, -10));
console.log(Math.max(1, 2, 3, 0, 435, -10));
console.log(Math.round(4.5));
console.log(Math.floor(4.8));//redondea a la baja
console.log(Math.ceil(4.2));//redondea a la alza
//ejemplo 

function generarNumero(numeroMaximo) {
    return Math.round(Math.random() * numeroMaximo) ;
}
console.log(generarNumero(100));


//objeto Arrays
//datos ordenados por posiciones
//formas de generar arrays
const persona1 = ['jhon', 30, true];
const persona2 = new Array(3);
const persona3 = new Array('rojo', 'azul', 'verde');

const colors = ['verde', 'azul', 'rojo'];
console.log(colors);
console.log(colors[0]);//se accede a una posicion concreta
console.log(colors[5]);//no esta definido 

colors.push('amarillo');//añade elemento al array, ultima posicion
console.log(colors);

//bucles
const colors1 = ['verde', 'azul', 'rojo'];
for(let i = 0; i < colors1.length; i += 1 ) {
console.log(colors1[i]);
};
//ejemplo arrays + bucles

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let total = 0;
for(let i = 0; i < nums.length; i += 1){
    if ( i % 2 == 0){
        console.log(i);
    }
total += nums[i];
}
console.log('El total es: '+ total)

//DOM(Document Object Model)
//Nodos:cada elemento de la página web
//selectores: acceder, manipular el contenido de esos nodos 
//en el inspector salen todos los atributos

const title = document.getElementById('title');
console.log(title.innerText);

const title2 = document.getElementsByTagName('h1');
console.log(title2);
 title2[0].style.color = 'red';
 title2[0].style.backgroundColor = 'yellow';

