//Los objetos LITERALES son los que son definidos manualmente, ejemplo:
const students = {
    'Juan': 110,
    'Maria': 300,
    'Natalia':444,
    'Carlos':201,
};

//Los objetos LITERALES pueden considerarse instancias porque JS le asocia la instancia '__Proto__' por default. 

//JS trabaja por medio de prototipos como con la  siguiente funcion:

function Student(){
    this.name = 'NAME';
    this.age = 18;
    this.points = 780;
}

// Aquí se crea la instancia 'juanita'  con la palabra reservada 'NEW' y viendo dentro de la consola, se puede observar que tiene los atributos que la funcion Student le asignó y además la asocia con instancia __proto__ Object (Las cuales se pueden acceder sin necesidad de llamar nuevamente __proto__). Este, es como un templete que utiliza JS para la manipulacion estandar de los Objetos, dependiendo de la Instancia asignada, ya sea Array, Object, Dic, String, Date, etc.
const juanita = new Student();

// Los atributos que tiene asignada la instancia del prototipo > 'Student' al objeto 'juanita' se pueden acceder de la siguiente manera:
console.log(juanita.name)
console.log(juanita.age)
console.log(juanita.points)

//Ademas se pueden acceder de la misma manera los metodos de la instancia asignada por JS llamado __proto__
console.log(juanita.hasOwnProperty('name'));