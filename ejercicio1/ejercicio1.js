// El poliformismo es poder modificar o anular comportamientos de las herencias de las clases (metodos y atributos). es decir, sobreescribirlos.
// Ejemplo del poliformismo.
class Comment {
    constructor({
        content,
        student_name,
        student_role = 'Estudiante',

    }){
        this.content = content;
        this.student_name = student_name;
        this.student_role =student_role;
        this.like = 0; //Tambien se pueden crear nuevos atributos sin necesidad de tenerlo en el constructor
    }
    publicar(){
        console.log(this.student_name + ' ('+ this.student_role + ')' );
        console.log(this.like + ' likes');
        console.log(this.content);
    }
}


//Abstraccion es crear las clases necesarias para el uso de tu programacion

class Course{
    constructor({
        name,
        classes=[],
        isfree = false,
        lang = 'spanish'
    })
    {this.name=name;
    this.classes = classes;
    this.isfree = isfree;
    this.lang = lang;
    }

    set name(nuevo_nombre){
        if (nuevo_nombre === 'asdf'){
            console.error('NO PUEDES USAR ALEATORIOS');
        }else{
            this._name = nuevo_nombre;
        }
    };
    get name(){
        return this._name;
    }
}
const curso_programacion = new Course({
    name:'curso de programacion basico',
    classes: ['curso 1', 'curso2'],
    isfree: true,
})
class Learning_Paths {
    //parametros
    constructor({
        school_name,
        description= 'Descripcion del curso',
        teachers = [],
        courses = [],
    }){
        this.school_name=school_name;
        this.description=description;
        this.teachers=teachers;
        this.courses=courses;
    }
    //metodos
    add_teacher(new_teacher){
        this.teachers.push(new_teacher);
    }
}
// creacion instancias de Learning_paths
const escuelaWeb = new Course({
    school_name: 'Escuela desarrollo WEB',
    courses: [
        curso_programacion,
        'curso de CSS'
    ],
    lang:'english'
});
const escuelaData = new Learning_Paths({
    school_name: "Escuela de DATA ",
    courses:[
        'Big Data'
    ]
});
const escuelaVgs = new Learning_Paths({
    school_name: "Escuela de desarrollo de videojuegos "
});


class Student {
    //parametros
    constructor({
        name,
        email,
        username,
        twitter =undefined,
        facebook =undefined,
        instagram =undefined,
        approved_Courses=[],
        learning_Paths =[]
    }){
        this.name=name;
        this.email=email;
        this.username=username;
        this.socialmedia = {
            facebook,
            twitter,
            instagram,
        };
        this.approved_Courses=approved_Courses;
        this.learning_Paths =learning_Paths;
    }


    //Agregar un metodo para el ejemplo de poliformismo
    publicar_Comentario(comment_Content){
        //Creamos la instancia del objeto
        const comentario =new Comment({
            content: comment_Content,
            student_name: this.name,
        })
        //acá se usa el metodo de publicar de la nueva instancia Comment
        comentario.publicar();
    }
}



///////////////////////////////////////////////////
//Encapsulamiento son dos lineamientos:
//1-  Solo puede manipularse dentro de la misma clase.
//2- No permitir la alteracion de atributos y metodos de los prototipos, objetos, etc. de manera externa a menos que sepa como se estructura nuestro objeto
//---------------------------
// Metodos para encapsular en JS:
// - Getters y setters
// - Namespaces
// - Object.defineProperties
// - Modulos de ES6

////////////////////////////////
//Getters y Setters.
//Este trabaja parecido a las funciones/metodos, y se utilizan las palabras reservadas GET(obtener el valor) y SET(Cambiar el valor)
//EJEMPLO EN LAS LINEAS DE LA 11 A LA 20 DE LA CLASE COURSE

///////////////////////////////////////////////////
//================================================
///////////////////////////////////////////////////
//
//Herencias con clases.
// para poder heredar los atributos y metodos de otras clases, es necesario utilizar la palabra reservada 'EXTENDS' posteriormente la clase

class free_student extends Student{
    //En la herencia se puede utilizar el mismo constructor que la clase madre con la palabra reservada 'SUPER' y un parametro
    constructor(props){
        super(props);
    }
    approve_course(new_course){
        if (new_course.isfree){
            this.approved_Courses.push(new_course);
        } else {
            console.warn('Lo siento, ' + this.name + ', Solo puedes tomar cursos gratis')
        }
    }
}

class basic_student extends Student{
    //En la herencia se puede utilizar el mismo constructor que la clase madre con la palabra reservada 'SUPER' y un parametro
    constructor(props){
        super(props);
    }
    approve_course(new_course){
        if (new_course.lang !== "english"){
            this.approved_Courses.push(new_course);
        } else {
            console.warn('Lo siento, ' + this.name + ', no puedes tomar cursos en ingles')
        }
    }
}

class teacher_student extends Student{
    //En la herencia se puede utilizar el mismo constructor que la clase madre con la palabra reservada 'SUPER' y un parametro
    constructor(props){
        super(props);
    }
    approve_course(new_course){
        if (new_course.lang !== "english"){
            this.approved_Courses.push(new_course);
        } else {
            console.warn('Lo siento, ' + this.name + ', no puedes tomar cursos en ingles')
        }
    }

    //Ejemplo de poliformismo, se va cambiar/sobreescribir el metodo (publicar_Comentario) de la clase STUDENT con otros parametros
    publicar_Comentario(comment_Content){
        //Creamos la instancia del objeto
        const comentario =new Comment({
            content: comment_Content,
            student_name: this.name,
            student_role: 'Profesor',
        })
        //acá se usa el metodo de publicar de la nueva instancia Comment
        comentario.publicar();
    }
}

//instancias

const carlos = new free_student({
    name:'carlos',
    email:'carlos@correo.com',
    twitter: 'carlostwitter',
    learning_Paths:[escuelaWeb, escuelaVgs],

});

const maria = new basic_student({
    name:'maria',
    email:'maria@correo.com',
    twitter: 'mariatwittersdfsdxddaf',
    learning_Paths:[],

});

//ejemplo de objeto para poliformismo
const freddy = new teacher_student({
    name:'freddy',
    email:'freddy@correo.com',
    twitter: 'freddy@twitter fredier',
    learning_Paths:[],

});