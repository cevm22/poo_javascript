//MODULOS JS

function videoplay(id){
    const url_rand='https://unidrandom';
    console.log('Se esta produciendo en la URL ' + url_rand)
}

function videostop(id){
    const url_rand='https://unidrandom';
    console.log('Se ha pausado exitosamente el video ' + url_rand)
}

//la palabra reservada EXPORT es para poder dar permiso de que se puedan ejecutar en cualquier otro script
export class platzi_video{
    constructor({
        name,
        video_id
    }){
        this.name = name;
        this.video_id =video_id;
    }

    reproducir(){
        videoplay(this.video_id);
    }

    pausar(){
        videostop(this.video_id);
    }
}