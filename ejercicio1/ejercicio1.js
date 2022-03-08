class Learning_Paths {
    //parametros
    constructor({
        school_name,
        description= 'Descripcion del curso',
        teachers = []
    }){
        this.school_name=school_name;
        this.description=description;
        this.teachers=teachers;
    }
    //metodos
    add_teacher(new_teacher){
        this.teachers.push(new_teacher);
    }
}

const escuelaWeb = new Learning_Paths({
    school_name: 'Escuela desarrollo WEB'
});
const escuelaData = new Learning_Paths({
    school_name: "Escuela de DATA "
});
const escuelaVgs = new Learning_Paths({
    school_name: "Escuela de desarrollo de videojuegos "
});

class Approved_Courses {
    constructor({

    }){

    }
}
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
}

//instancias

const carlos = new Student({
    name:'carlos',
    email:'carlos@correo.com',
    twitter: 'carlostwitter',
    learning_Paths:[escuelaWeb, escuelaVgs],

});