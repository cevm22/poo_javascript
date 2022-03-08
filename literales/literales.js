
// Objeto literal
const natalia = {
    //Atributos 
    name: "Natalia",
    age: 20,
    cursos_Aprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    //Para crear metodos en los objetos literales de JS hay 2 opciones:
    //La primera manera sería > aprobarCurso: function({})
    //La segunda:
    aprobar_Curso(nuevo_curso){
        //THIS Hace referencia al mismo objeto que se esta manipulando
        this.cursos_Aprobados.push(nuevo_curso)
    },
};


//Crear metodo para poder editar objeto Literal

//Hacer que Natalia apruebe otro curso
//natalia.cursos_Aprobados.push("Curso de REsponsive Design")

////////////////////////////////////////////////////////
//Creacion de prototipos para hacer un "Molde o funcion"

function Student(name, age, cursos_Aprobados){
    this.name = name;
    this.age = age;
    this.cursos_Aprobados= cursos_Aprobados;

};
//Se puede crear metodos dentro de la funcion (como en el ejemplo del objeto literal) o por fuera de la funcion de la siguiente manera:
Student.prototype.aprobar_Curso = function(nuevo_curso){
        //THIS Hace referencia al mismo objeto que se esta manipulando
        this.cursos_Aprobados.push(nuevo_curso)
    };

// crear instancia del prototipo anterior con la palabra reservada 'NEW'

const juanita = new Student(
    "Juanita",
    15,
    [
        "Curso de Introducción a la produccion de videojuegos",
        "Curso de creacion de personajes"
    ]
);
//============================================
///Prototipos con sintaxis de clases con la palabra reservada Class 

class Estudiante{
    // 'CONSTRUCTOR' nos permite crear nuestra instancia de clase
    constructor(name, age, cursos_Aprobados){
        this.name = name;
        this.age = age;
        this.cursos_Aprobados= cursos_Aprobados;
    }
    // Se pueden crear los metodos dentro del constructor, pero la mejor forma es por fuera del constructor
    // Tambien puede utilizarse la palabra reservada 'THIS' y funcionara de la misma manera que el prototipo
    aprobar_Curso(nuevo_curso){
        this.cursos_Aprobados.push(nuevo_curso);
    }
}

// Crear nueva instancia

const miguel = new Estudiante(
    'miguel',
    28,
    [
        "Curso de Analisis de negocios para ciencia de datos",
        "Curso de visualizacion datos"
    ]
    
);


//Explicacion de patron RORO = Recieve Object Return Object.
// El cual funciona para que nuestra clases reciban un objeto y así pueda ejecturase sin problema en el orden de los argumentos
// porque si se realiza de la forma como la clase ESTUDIANTE (la clase anterior a esta), será estrictamente necesario acordarnos del orden de los parametros

class Estudiante_roro{
    // en los parametros del constructor se definen los parametros de tipo objeto.
    constructor( {
        //Para agregar un parametro por defecto en caso de que no se reciba en el argumento, se utiliza el '='
        // En este caso se utiliza un array vacio
        cursos_Aprobados = [],
        email,
        name,
        age})

    //aqui se definen los atributos
    {
        this.email = email;
        this.name = name;
        this.age = age;
        this.cursos_Aprobados= cursos_Aprobados;
    }

    // Se pueden crear los metodos dentro del constructor, pero la mejor forma es por fuera del constructor
    // Tambien puede utilizarse la palabra reservada 'THIS' y funcionara de la misma manera que el prototipo
    aprobar_Curso(nuevo_curso){
        this.cursos_Aprobados.push(nuevo_curso);
    }
}

// Crear nueva instancia de la clase Estudiante_roro

const teresa = new Estudiante_roro({
    name: 'Teresa',
    age:28,
    email:"tere@correo.com",

    }
);
