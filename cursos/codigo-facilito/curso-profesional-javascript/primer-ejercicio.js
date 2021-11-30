// bucles
/*
1.instruccion inicial
2.condición
3.instruccion despues de cada iteración
*/
/*for (let i = 1; i <= 10; i++){
console.log(i);
if(i % 2 != 0){
continue;}
console.log('es par');
}*/

/*let i = 1;
while(i <= 10){
    console.log(i);
}*/
// do while

//funciones
/*
1.declaracion
*/
//declaracion de funcion
function saludar() {
  /*codigo */
}

//llamar funcion saluda();

function cuadrado(numero) {
  return numero * numero
  //nunca va a ejecutar esto porque el return acaba la funcion
  console.log('hola')
}
let cuadrado_de_dos = cuadrado(2)
console.log(cuadrado_de_dos)
console.log(cuadrado(3))

//expesion de funcion, no puede ejecutarse antes de que se inicialice
//solo despues
let func = function saluda() {}
func()

 /*scope, reglas que definen cuando una variable esta disponible
 scope global o scope local(funciones)
 scope global, de alcance a todo el codigo y en cualquier momento, fuera y //dentro de las funciones
 principio de menor acceso, las variables deben estar solo al alacance necesario, evitar el alcance global si no es necesario.
 cada funcion establece una variable local, pues solo esta disponible al scope local de esa funcion y solo existe mientras se ejecuta.
 dos o mas variables pueden compartir el nombre siempre que no esten en el mismo alcance.
Para crear variables, no es obligatorio usar var, let o const pero es recomendable para evitar confusiones. Pues automanticamente se asigna al scope global si importar donde este declarada.
*/
 let nombre = 'cody';

 function decirHola(){
     let nombre = 'Uriel';
     console.log ('Hola ' + nombre);
 }
 decirHola(); //llamada de funcion y se genera la variable nombre en ese ambito
 console.log(nombre);// variable global

/*
Scope Alcance de bloque: 
con var podemos declarar una variable dentro de una funcion y usarla dentro del bloque, en cambio const y let solo pueden usarse dentro del bloque y la funcion compila error.
let y const tienen alcance dentro del bloque más proximo
var dentro de la funcion mas proxima 
*/
function hola(nombre){
    if(nombre){
        var saludo = 'hola ' + nombre //let y const no funcionan
    }
    console.log(saludo);
}
hola('Lola');
/*
const: cuando es un valor que no va a cambiar.
var : declarada en un bloque pero deba usarla fuera.
let : variable de uso local, más recomendable.
*/

//ARGUMENTOS DE FUNCIONES

/*
parametro: es algo que tiene que ser llenado al llamar a la funcion
argumento: es el valor que se envia desde la llamada de la funcion y llena el parametro. No tienen un tipo defnido. 
si se le asigna un parametro por defecto este solo se tiene en cuanta si se llama a la funccion en (), si le pasamos un argumento (2) el valor por defecto se ignora.
en caso de multiples parametros, si uno debe tener un valor por defecto debe colocarse en ultimo lugar pues sino se llenara primero y el otro compilara a undefined
*/
function cuadrado2(numero/* parametro */){
    return numero*numero;
}
cuadrado2(2/* argumento */);

function sumaTodos (){
    console.log(arguments);//se genera un objeto [objeto Arguments] {0:1, 1:2, 2:3, 3:4}
let suma = 0;
for (let i = 0; i < arguments.length; i++) { suma += arguments[i]}
console.log(suma);
}
sumaTodos(1, 2, 3, 4);

/*
argumento enviado como referencia cuando el parametro apunta al valordel argumento original, cuando se modifica afecta al original
arguemnto enviado como valor cuando se envia una copia del argumento original esta en un adireccion distinta y no afecta al original.
cualquier argumento que no sea un arreglo o un objeto será enviado como valor

*/
let edad = 20;
function modificador(edad){
     edad = 25;
    console.log ('dentro de la funcion: '+ edad);// 25
}
console.log(edad);//20
modificador(edad);
console.log(edad);//20

//por referencia:
let edades = [20];
console.log(edades);
function modificador1(edades){
    edades [0]= 25;
    console.log ('dentro de la funcion: '+ edades);// 25
}
console.log(edades);//20 objeto antes de la funcion
//modificador(edades);

console.log(edades);//25 pues se genera despues de ejecutar la funcion

//FUNCIONES PURAS

/*
es aquella que no produce efectos secundarios, como mutacio o declaracion de funciones que se pueden usar fuera de la funcion.
son mas sencillas de leer, cambiar, etc.
si recibes como argumento un arreglo o un objeto no deberias modificarlo dentro de la funcion. Es preferible que no mute o como mucho genere una copia.
*/

//modificacion funcion anterior paa que sea pura

let age = [20];
console.log(age);
function modify(age) {
    let copy = [...age];//genero copia 
    copy[0] = 25; //modifico la copia y no el valor original
    return copy ;//Para comunicar los cambios con el exterior
}
console.log(age);//[20] objeto antes de la funcion
modify(age);

console.log(age);

// FIRST CLASS OBJECT 
/*
debe ser retornable, puede ser asignado en una variable y debe ser posible su envio por argumento.
numeros, strings, booleans , arreglos, objetos, funciones 
es comun enviar funciones dentro de otra.
*/

function executor(funcion) {
    funcion();
    
}
function decirHola1(){
    console.log('Hola');
}
 executor (decirHola1);// envio la funcion no la ejecuto, se la delego a otra.


 function sumaTodos1(){
     let suma = 0;
     for (let i = 0; i < arguments.length; i++){
         suma += arguments [i]}
         return suma;
     
 }
 function sumaTodosAlt() {
     return Array.from(arguments).reduce((acc,argument) => argument + acc,0);
 }

 console.log(sumaTodos1(1, 2, 3, 4, 5));

 //funcion que retorna otra
 function build(){
     function a(){console.log('hola')}
     return a;
     /*
     return function (){console.log ('hola)}; FUNCION ANÓNIMA
     */
 }
 let f = build();
 f();

 //HOISTING
/* las funciones y la variables pueden er usadas incluso antes de ser declaradas.
solo se aplica a var y funciones.
Let y const generan error pues no se pueden acceder antes de inicianizarla
solo aplica en la declaracion no el la asignacion 

*/
console.log(x);
var x = 10;
console.log(x);

/* las variables deben declararse antes de usarse por buenas practicas

*/

//ARREy Y SUS USOS

/*
ES UN GRUPO ORDENADO DE BLOQUES, Y CADA BLOQUE ES UN DATO QUE PERTENECE AL ARRYS, Y QUE SE PUDEN PROCESAR EN CONJUNTO
si los datos debes ser acesibles u ordenados de maneras aleatorias es convenente usar objetos.
se almacena cualqier dato de primera clase
la longitud es igual a la cantidad de elementos dentro
las posiciones comienzar a contar desde 0
*/
let calificacion = [10, 9, 8, 7, 9];

/*
un mismo array puede contener elementos de distinto tipos
para acceder se escribe el nombre del array y la posicin a buscar entre corchetes.

*/
//agregar o cambiar un elemento
let array = ['tania', 'lucia', 'clara'];
array[0] = 'Iris'; //['iris', 'lucia', 'clara' ],
array.push(3);// añade 3 al final del array 
array.unshift(2);//lo añade al principio
let eliminado = array.pop(); // quita el ultimo y crea un nuevo array con el 
let eliminado2 = array.shift(); //elimina el primero y crea un nuevo array con el.
console.log(array); 
console.log(eliminado);
console.log(eliminado2);

//USAR BUCLES PARA RECORRER ARRAYS

/*

*/
//bucle for
let array1 = [1, 2, 3, 4];
for (let i= 0; i<array1.length; i++ ){
    console.log(
        array1[i]
    )
}
//recorre el array desde el final hacia el ppio
for (let i=array1.length; i >= 0 ; i-- ){
    console.log(
        array1[i]
    )
}

//forEach
/*
alternativa a for, en ocasiones es mas intuitivo que for para conocer la finalidad del bucle
*/
let lenguajes = ['ruby','php','java','phyton' ];
lenguajes.forEach(function (lenguaje/*puede ser ell que queramos*/,indice ) {
    console.log(lenguaje,indice);
})

//map
//crea un nuevo array despues de ejecutar una funcion de modificacion

let numeros = [2, 5, 3, 1, 34,568];
/*let cuadrados =[];
for (let i = 0; i< numeros.length; i++){
    cuadrados[i] = numeros[i] * numeros[i];
}
console.log(cuadrados);*/ //solucion clásica con for
let cuadrados = numeros.map(function(numero){
 return numero * numero ;
})
console.log(cuadrados);

//array de string numericos

let numeros1 = ['10', '5', '25', '186'];
numeros1 = numeros1.map(function(numString){
    return parseInt(numString);
}); //lo modifica porque lo asignamos al array original
console.log(numeros1);

//filter

let nums = [8, 6, 15, 3, 4, 21];

let newNums = nums.filter(function(num){
 return num % 2 === 0;
});

/*
si retorno true se conservan todos los elementos
si retorno false se descartan los objetos
*/

//Reduce
let nums2 = [1, 2, 3, 4, 5];

let suma = nums.reduce(function(acc,num){

    return acc + num;
},0)
console.log(suma);

let array3 = ['ruby', 'phyton', 'java'];

//indexOf 
//busca un elemento y devuelve la posicion en la que fue encontrado
// usa ===
//si no existe devuelve -1

console.log(array3.indexOf('ruby'));

//includes
//permite un parametro para especificar a partir de que posicion buscar
//no interesa la posicion solo saber si contiene o no un elemento ,true o false
console.log(array3.includes('ruby'));
console.log(array3.includes('javascript'));

//find -> funcion prueba -> elemento encontrado
//finIndex -> funcion de prueba -> posicion
let respuesta = array3.find(function(elemento, posicion, array3){
    return elemento === 'ruby';
});
console.log(respuesta);

let respuesta2 = array3.findIndex(function(elemento, posicion, array3){
    return elemento === 'java';
});
console.log(respuesta2);

//some -> retorna true o false
let respuesta3 = array3.some(function(elemento, posicion, array3){
    return elemento === 'javaScript';
});
console.log(respuesta3);

//SPREAD Y REST

/*
cualquier objeto que pueda ser separado en elementos es susceptible de ser iterable.
spread syntax (...)
*/
let array4 =[1, 2, 3];

console.log(array4);//[1, 2, 3]
console.log(...array4);// 1 2 3-> lo imprime de manera individual separadas por comas

//rest
//rest parameters (...)
function demo(...arr){
    console.log(arr);
}
demo(10, 2);

let nombre3 = 'Chloe';

function promedio(nombre3, ...calificaciones){
    console.log (arguments);
    console.log(nombre3,calificaciones);
}
promedio('tania', 1, 10, 5, 4, 20);

//OBJETOS Y JSON
/*La programación orientada a objetos es un paradigma de programación basado en la creación de objetos que pueden contener datos y funciones.

Se dice que la programación orientada a objetos busca que representemos nuestro código y algoritmos con objetos, como en la vida real.

Este paradigma está basado, principalmente en los principios de abstracción, encapsulación o encapsulamiento, herencia y polimorfismo

El propósito central de la programación orientada a objetos es que los objetos que definimos para nuestros algoritmos sean independientes, que no expongan sus detalles y que se puedan usar e integrar con otros objetos.

Un objeto es una combinación de propiedades o atributos que describen al objeto y una serie de métodos o acciones que puede ejecutar el objeto. Cada objeto en nuestro programa es capaz de almacenar información en sus propiedades y de modificarlas de manera independiente a otros objetos. Esto quiere decir que aunque tuviera dos objetos similares, digamos dos marcadores, cada uno puede modificar sus propiedades sin que estas modificaciones afecten al otro objeto, aún cuando ambos son del mismo tipo.

De este mismo objeto marcador, podemos decir que las propiedades que tiene son su color, su tamaño, la tinta disponible, el tipo de material del que están hecho, por mencionar algunos. Aunque tuviéramos dos tipos de marcadores, ambos podrían tener colores de tinta distintos, tinta disponible diferente, etc. Por eso en el paradigma cada objeto guarda un valor que le pertenece solo a él en sus propiedades.

Uno de los grandes poderes del paradigma es el de composición, objetos como el marcador que usamos de ejemplo, no son una unidad, son una composición de objetos más pequeños que tienen responsabilidades específicas y sencillas, la punta solo tiene que absorber tinta, el material que lo une solo tiene que sostenerlo todo, y así en lugar de pensar en el marcador como algo complejo con muchas funciones, pensamos en él como una composición de muchos objetos haciendo tareas sencillas.

De eso se trata separar nuestro código en objetos, de crear pequeños objetos, simples, con responsabilidades sencillas, que en conjunto, puedan solucionar problemas complejos, ayudándonos así a separar dicho problema en distintas responsabilidades.

Aunque en este bloque nos enfocaremos principalmente en el contexto y el valor de this, es importante comenzar hablando del tema de definición de objetos, que tiene mucho que ver con el del contexto, comencemos.

Continuemos.

Atrás

*/
//JSON 
let curso = {
    titulo: 'curso js',
    formato:'online',
    bloques: ['introduccion', 'funciones'],
    inscribir: function(){
        console.log('inscrito');
    }
}
console.log (curso['titulo']); 

curso.titulo = 'curso de ruby';
curso['inscribir'] = function(){ console.log('inscribir v2')}
console.log(curso.titulo);
curso.inscribir();

//shorthand properties / syntax

let names = 'pepito';
let user = { names,
saludar: function(){ console.log('hola')}
};
user.saludar();

//duplicar o combinar objetos

let person = {
    edad : 20,
    nombre: 'Manuela'
}
let esquemaPermisos ={nievel:2};
//let admin = {... person, ...esquemaPermisos, nombre:'cody'};
//console.log(admin);
// la diferencia entre spread operator y object.assign esta en los metodos setters, que permiten definir metodos como si fueran funciones
let copy = Object.assign({}, person);
console.log(copy);

//DESTRUCTURING ASSIGNMENT
/*
ASIGNAR LAS PROPIEDADES DE UN OBJETO A UNAS VARIABLES INDEPENDIENTES USANDO ASIGNACION POR DESESTRUCTURACION
PARA ELLO SE COLOCA EN EL LADO IZQUIERDO DEL OPERADOR DE ASIGNACION LAS LLAVES CON LAS VARIABLES EN LAS QUE SE VAN A SEPARAR LAS PROPIEDADES DEL OBJETO, EN EL DRCH EL OBJETO DEL QUE VAMOS A OBTENER ESAS VARIABLES

MIRAR ESTO MAS DETENIDAMENTE!!

*/
let per = {
    edad : 20,
    nom: 'Manuela'
};
let { nom } = per;
console.log(nom);

//FUNCIONES CONSTRUCTORAS
/*
hay varios tipos
*/
//funciones constructoras.
function Course (title){
    this.title = title;
    this.inscribir = function(){}
}
//se usa como base de partida, normalmente en este tipo se una mayuscula en el nombre

let objeto = new Course('curso ruby');//usar el operador new, crea nuevo objeto en blanco
let js = new Course('curso java');
console.log(objeto);
console.log (js);

//CONTEXTO !!!

/*
valor que tiene la palabra reservada  this, cuando se evalua depende de donde este puede adquirir un valor diferente.
el valor depende de donde se ejecuta la funcionn no de donde se declara
*/

//valor contexto alcance global : window
console.log (this); //objeto global, ej: window

//valor contexto: es el objeto que ejecuta la funcion 
let objeto1 = {
    demo : function(){
        console.log(this);
    }
}
objeto1.demo();

function demo1() {
    console.log(this);
}
let object = {
    func: demo
}
object.func();

//ARROW FUNCTIONS
//cuando solo hay un return, se pueden obviar las llaves y se crea implicito(no hace falta return)
/*
el nombre de la funcion se adopta de la varible asignada,
las llaves pueden omitirse cuando es de una sola linea
y el return es esa linea
heredan el valor de this del contexto en el que fueron creadas, y no se reasigna
*/

//METODOS PARA ASIGNAR DELIVERADAMENTE EL VALOR DE THIS

//BIND
/*
LOS QUE EJECUTAN DE MANERA INMEDIATA LA FUNCION : CALL Y APPLY
LOS QUE CONSTRUYEN UNA NUEVA FUNCION PARA EJECUTARLA DESPUES : BIND
*/
//CON APPLY LOS ARGUMENTOS SE ENVIAN EN UN SOLO OBJETO

function Estudiante(){
    this.nombre= 'Tania';
    this.saludar = function(){console.log(this, arguments)};

    this.saludar = this.saludar.bind(this);
}
let e = new Estudiante();
let fu = e.saludar;

e.saludar();
fu();

setTimeout(e.saludar,100);

//e.saludar.call({},'1','2'); // call
e.saludar.apply({},['1','2']);

// bind permite asignar el valor de this sin que la funcions eejecute
//retorna una nueva funcion para la que el valor de this ha sido definido y no deberia cambiar

let nuevaFuncion = e.saludar.bind({},'1','2');
nuevaFuncion();

/*
en javascript las clases no existen, es un lenguaje orientado a objetos pero se basa en prototipos
*/
//CLASES
//sintaxis alternativa para definir objetos
//se usa la palabra reservada class
class Curso1{
    title = 'hola';

    inscribir(nombre){
        this.nombre = nombre;
    }
}
let c = new Curso1();
c.inscribir('tania');

console.log(c.nombre);


//ALCANCE DE PROPIEDADES
//las propiedades y los metodos de una clases son unicos por defectos. 
// nueva sintaxis #title
//solo pueden ser utilizados dentro de las clases

class example{
    #title ='Java';
    constructor(){
        this.#bienvenida();
    }
    #bienvenida(){
        console.log('Bienvenido al curso' + this.#title);
    }
}
let Java = new example();

//METODO CONSTRUCTOR
/*
metodo especial, este se ejecua de manera automatica cuando instaciamos un nuevo objeto de nuestra clase.
sintaxis : constructor(){}
en una clase solo puede haber un constructor
puede recibir parametros que se asignal al usar el metodo new
tambien cuenta con arguments

*/
class Ludo{
    constructor(titulo,color='yellow'){
        this.titulo = titulo;
        this.color = color;
        console.log(arguments);

    }
}
new Ludo('curso punto creativo');

//HERENCIA CLASES
/*
permite que un objeto herede los metodos y las propiedades de un objeto al que llama padre, a partir de una copia de dicho padre podremos modificar y añadir o quitar propiedades en el objeto que conocemos como hijo
cada descendiente hereda de los ascendientes
para definir la herenia se usa la palabra reservada EXTENDS despues de declarar la nueva clase y seguida de la clase que hereda: class Amind extends Human {}
se hereda cualquier metodo o propiedad que no sea privado
funciona tambien con los metodos
*/

class Human{
    especie = 'Humano';//propiedad
    respirar(){console.log('Inhala')}//metodo
}
class Admin extends Human{}

let admin = new Admin();
console.log(admin.especie);
admin.respirar();

/*
se asocia a la reutilizacion de codigo
*/
/*
ejemplo codigo a refactorizar conla herencia
class Vimeo{
    play(){ this.video.play();}
    duration{ return this.video.duration / 100;}
    open{ this.redirecToVimeo(this.video);}
}
class YouTube{
    play(){ this.video.play();}
    duration{ return this.video.duration / 100;}
    open{ this.redirecToYouTube(this.video);}
}

class Player {
    play(){ this.video.play();}
    duration {return this.video.duration / 100; }
}

class Vimeo extends Player{
    
    open{ this.redirecToVimeo(this.video);}
}
class YouTube extends Player{
    
    open{ this.redirecToYouTube(this.video);}
}
*/

//  buildt in objects, 
/*
en algunos casos sera necesario sobrescribir la funcionalidad heredada de la clase base
*/

class UserNew { 
     constructor(name){
        this.name = name;
    }
    saludar(){console.log('hola usuario');}
}
class Admin1 extends UserNew{
  constructor(name){
      super(name);
  }
    saludar(){
        super.saludar();//este metodo llamara al de NewUser, solo se tiene acceso en herencias 
        console.log('Hola soy Admin1');//con este solo se sobreescribiria saludar()
    }
}
let admin2 = new Admin1('pepito');
admin2.saludar();
console.log(admin2.name)

//METODOS ACCESORES
/*
encapsular.
esconder las propiedades del objeto y ofrecer metodos para leerlos y modificarlos sin que se acceda especificamente a la propiedad
GET => se usan para obtener o leer los datos de una propiedad
se diferencian de otros metodos porque al llamarlos no necesitamos los parentesis para ejecutarlos
SET => para asignar un valor nuevo a algunas de las propiedades. se diferencias de los demas en que son llamados cuando utilizamos el operador de igualdad

*/

class Socio {
    get nombre(){return 'Tania';}
    set nombre(nombre){console.log(nombre);}
}
let socio = new Socio();

console.log(socio.nombre);//getter
socio.nombre = 'Lucia';//setter =>le indica a js que debe buscar un setter con ese identificador y se envia el valor 

class Socio1 {
    get nombre(){return this._nombre.toUpperCase();}
    //this._nombre.chartAt(0).toUpperCase() + this._nombre.slice(1) => pasa la primera posicion (0) a mayuscula y le suma desde la posicion 1 = Lucia
    set nombre(nombre){
        if(typeof nombre !== 'string') throw new Error('No es una cadena')
        this._nombre = nombre;}
}
let socio1 = new Socio1();
socio1.nombre = 'lucia';//setter
console.log(socio1.nombre);//getter

//METODOS Y PROPIEDADES ESTATICOS

class Api {
    static ENDPOINT = 'localhost : 300'
    static get(){ console.log('soy un método estático');}
}
Api.get();// llamar al metodo desde la clase sin instanciar un objeto
console.log( Api.ENDPOINT);// propiedad
/*
Las funciones estaticas son funciones de utilidad como crear o clonar objetos
Mientras que las propiedades estaticas son utiles para cachear, almacenar informacion fija o cualquier dato que no necesita ser replicado 

con un metodo estatico podemos acceder a otros metodos estaticos usando la propiedad this
*/

class Gato{
    permission = 0;
    static admin(){
        let gato = new this();
        gato.permission = 5;
        return gato;
    }
}
console.log(Gato.admin())

//PROTOTYPES
/*
es un obj. asociado a cualquier funcion donde esta incluye una propiedad con un objeto qu epodemos usr para compartir codigo.
cualqier funcion tiene una propiedd prototype incluida.

*/
function Course0 (){
    Course0.prototype.inscribir = function(){
        console.log('hola!!');
    }
}
let course = new Course0();
course.abandonar = function(){
    console.log('abandonar');
};//pertenece al objeto nuevo
course.inscribir();//pertenece  a la funcion constructora
console.log(course);
/*
new enlaza el objeto prototype de la la funcion cob la propiedad __proto__ de la funcion constructora

*/

/*
TEORIA PROTOTYPES

Conceptos de prototipos
Vamos a hacer un repaso de los conceptos que hemos aprendido en este tema y que son relevantes cuando hablamos de prototipos en JavaScript.

Tenemos la propiedad prototype, todas las funciones tienen esta propiedad y apunta al prototype object.

El prototype object es el objeto al que podemos asignar métodos y propiedades que queremos compartir en el prototype chain o cadena de prototipos.

Cuando creamos un objeto de una función usando new, se asigna una propiedad proto que apunta al prototype de la función con la que se creó el objeto, también conocida como función constructora. Esto quiere decir que podemos decir que proto apunta al prototype de la función constructora.

El prototype chain o la cadena de prototipos hace referencia al enlace que se crea entre prototipos que tienen su propio prototipo, que tienen su propio prototipo. Cuando buscamos un método o una propiedad en un objeto, se buscará inicialmente en el objeto y luego en la cadena de prototipos.

El último eslabón de la cadena de prototipos es Object.prototype, este objeto es usado para definir métodos que compartan todos los objetos del lenguaje, ya que eventualmente la cadena de prototipos termina aquí.

El prototipo de una función constructora apunta por defecto al prototype de Object, aunque esto puede ser modificado.

Un dato interesante es que cualquier objeto creado con la notación JSON enlaza su propiedad proto al prototype de la función constructora Object.
*/

function Course1(){}

Course1.prototype.inscribir = function(){
    console.log('Ya llegué');
}
Course1.prototype.conteo = 0;


let javaScript = new Course1();
javaScript.__proto__.conteo += 1;
let ruby = new Course1();
ruby.__proto__.conteo += 1;
javaScript.inscribir();
ruby.inscribir();

console.log(Course1.prototype.conteo);
//este metodo esta siendo compartido desde el prototype, no le pertenece a // ninguno de los objetos y no es duplicado ni copiado, se mantiene en el prototipo
//podemos agregar funciones nuevas al prototipo

/*
PROGRAMACIÓN ASINCRONA

Qué es la programación asíncrona
En un lenguaje de programación asíncrono como JavaScript, las tareas pueden ejecutarse secuencialmente, esto significa que podemos indicar que algunas tareas se pasen a segundo plano y esperen a su turno para ser reanudadas y ejecutadas.

Esta característica del lenguaje existe para mejorar el rendimiento del mismo, porque nos permite aprovechar al máximo las capacidades del equipo en el que se está ejecutando nuestro código.

Por lo general las tareas que se esperan sean más tardadas, o que necesiten esperar respuesta de algún otro elemento del sistema, son candidatas a ser delegadas a este proceso de espera y ejecución.

JavaScript es un lenguaje de ejecución sobre un solo hilo, esto significa que sólo puede ejecutar una tarea a la vez. Cuando una operación tarda demasiado o está esperando la respuesta de otra, decimos que bloquea las demás instrucciones, precisamente porque JavaScript no puede ejecutar dos a la vez.

Para solucionar esto, JavaScript introduce el event loop, o ciclo de eventos. El event loop se compone de dos componentes principales, una cola de mensajes y un ciclo que se encuentra iterando esta cola de mensajes. La programación asíncrona en JavaScript funciona empujando ciertas operaciones a esta cola de actividades, para que no bloqueen la ejecución de código mientras terminan, el trabajo del event loop es estar preguntando las operaciones de la cola de actividades si ya han finalizado, y cuando lo hacen, reanuda la ejecución de dicha operación, la recupera por así decirlo.

Para que todo esto funcione, necesitas una forma de delegar ciertas operaciones a esta cola, y una forma de saber cuándo estas operaciones han terminado, para hacerlo JavaScript introdujo inicialmente el concepto de callbacks, y después el de promesas, finalmente a la sintaxis se introdujeron las funciones asíncronas, todos estos conceptos están diseñados para que esta comunicación entre el event loop, la cola de actividades y tu código, suceda.

Veamos en la práctica como hacerlo.
*/

/*
un callback es una funcion que se pasa como argumento a una función asincrona

*/
//npm install request=> esta obsoleto
/*let request = require('request');

request('https://www.google.com', function(){
    console.log('termine la peticion');
});*/

//PROMESAS
/*
SURGE COMO ALTERNATIVA A LA SINTAXIS DE CALLBACKS
es mucho mas expresiva, concisa y facil de entender, sobre todo cuando se escriben varias peticiones asincronas en secuencia.
callback hell => funcion dentro de una y denrro de otra y de otra, son dificiles de leer.

*/
//npm install request-promise
/*let request = require('request-promise');

request('https://www.google.com').then( function(){
    console.log('termine la peticion');
});*/

//FUCIONES ASINCRONAS
/*
Funciones asíncronas
Cuando programamos en JavaScript, constantemente trabajamos con operaciones asíncronas como solicitudes a un servicio web, cálculos, eventos, etc.

La complejidad de las operaciones asíncronas es que no se sabe cuándo van a terminar, por lo que debe existir un mecanismo que nos informe sobre si una tarea ha sido completada o no, qué resultado produjo y si se completó con éxito o hubo un error, y en caso de que haya habido un error, de qué error se trata.

Para solucionar esto se han introducido distintas estrategias, objetos y estructuras que permitan trabajar en un flujo de operaciones asíncronas, inicialmente teníamos los callbacks, funciones que se asignaban y eran llamadas cuando la operación asíncrona había retornado. Eventualmente se introdujeron las promesas, objetos pensados para valores asíncronos con funcionalidad adicional pensada precisamente para trabajar con 1 o varias operaciones asíncronas en un programa.

Las promesas, como aprendimos antes, introdujeron incontables mejoras por sobre los callbacks, sin embargo, la sintaxis puede parecer confusa y poco legible, además de que es un concepto que puede ser desafiante para nuevos desarrolladores de JavaScript.

En versiones más nuevas del lenguaje se introdujo el concepto de funciones asíncronas, dentro de las que trabajar con promesas se vuelve más simple con el uso de la palabra reservada await.

En este bloque conocerás los detalles de las funciones asíncronas, la sintaxis, cómo funcionan y cómo puedes usarlas para manejar operaciones asíncronas, como podrás ver más adelante, esto significará que el código de manejo de operaciones asíncronas se vuelve más expresivo y sencillo, sin perder por supuesto la funcionalidad correspondiente.

*/
// ESTAS SIEMPRE DEVUELVEN UNA PROMESA SIN IMPORTA EL VALOR DEL CUERPO DE LA FUNCION NI LO QUE RETORNEN

/*
lo unico que diferencia una funcion asincrona de una normal es el uso de await
dentro del cuerpo de la funcion

async retorna una promesa ya resuelta con el resultado que devolvera esa funcion
return promise.resolve(valor1) +  (valor2)
con async la sintaxis de promise es implicita y aunque no se escriba el interprete lo ejecuta como tal.

*/
//await
/*
hace que la ejecucion del codigo espere a que una promesa sea resuelta evitando que escribas then o creando funciones anonimas.

*/
(async function(){

let promesa = new Promise((resolve, reject)=>{
    setTimeout(resolve,400,5)
});
console.log(promesa);
})();

// con await esto no es necesario :promesa.then( (resultado)=> {console.log(resultado)})

//await y fetch

async function showGitHubInfo(){
    let response = await fetch('https://api.github.com/users/taniamg/repos');
    let repos = await response.json();
    console.log(repos);
}
showGitHubInfo();
//await marca las peticiones asincronas
//parra manejar error se usa catch


//modulos
//import def =?

//GENERADORES E ITERADORES
//CUALQUIER OBJETO  QUE IMPLEMENTE UN METODO NEXT, QUE RETORNE UN OBJETO
//CON UNA PROPIEDAD VALUE, UNA PROPIEDAD DONE E IMPLEMENTE UN PROTOCOLO POR LO QUE ES UN ITERADOR

let iterador = {
    currentValue:1,
    next(){
        let result = {value: null, done: false};

        if (this.currentValue > 0 && this.currentValue <= 5){
            result = {value: this.currentValue, done:false}
            this.currentValue += 1;
        }else {
            result = {done: true};
        }
        return result;
        
    }
};
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
//iterador perezoso
setTimeout(()=> console.log(iterador.next()), 5000)


//CARACTERES ESPECIALES
//ESCAPIN => \caracter a ignorar\
 let  a = 'hola ';
 let b = 'mundo';
 console.log(a.concat(b));

 //interpolacion Template Literals => Template Strings
let nombres = 'tania'
 let template = `Hola ${nombres}, ¿cómo estás?`;
 console.log(template);

 // padStart padEnd

 //comparacion de cadenas.
 console.log('A'.localeCompare('z'));
 console.log('a'.localeCompare('b'));
 console.log('A'.localeCompare('a'));
 console.log('b'.localeCompare('b'));
 console.log('A'.localeCompare('z'));
 
 //subcadena y caracteres
 let cadena = 'hola';
 for (const caracter of cadena ){
     console.log(caracter);
 }

 let cadenas = 'HolaMundo';
 console.log(cadenas.substring(0,4));//es igual que slice salvo en que este no reordena en caso de que e¡sea (6,4) y si es un numero negatico no lo ignora sino qu eempieza desde el final.

 //BUSQUEDA
 //indexOf => 
 let cadenita = 'hola tania';
 if (cadenita.indexOf('tania') >0) console.log('encontrado');

 //includes => retorna true si se encuentra la cadena o false sino lo encuentra

//lastIndexOf
//startsWith endsWith
let link = 'https://codigofacilito.com';
if(link.startsWith('https:')) console.log('es un link seguro');

//cadenas y arreglos

let texto =' estoy aprendiendo javascript y html';
let palabras = texto.split(' ');
console.log(palabras);
console.log(palabras.join(' '));

function filtroDeMarcas(str){
    let marcas =['codigoFacilito'];
    let palabrasFiltradas = str.split(' ').map(
      palabra => {
          return marcas.includes(palabra) ? 'xxx' : palabra
      } 
    );
    return palabrasFiltradas.join(' ');
}
console.log(filtroDeMarcas(texto)) ;

//trim => quita espacio en blanco delante y detras
console.log(' hola '.trim());
//trimStar trimEnd

//repeat => retorna una cadena con la principal repetida 'n' cantidad de veces
console.log(' hola '.repeat(3));
//replace => retorna una nueva cadena con el reemplazo ejecutado
console.log(' hola '.replace('hola','adios'));

//unicode

//planos unicode
