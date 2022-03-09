//Importante se deben declarar en SCRIPT en el archivo INDEX.HTML para que pueda funcionar, ademas que la extension de los archivos
// deben de terminar con  '.mjs'
// en este archivo se importa la clase "platzi_video" y se utilizan las funciones que se programaron en module.js


import {platzi_video} from "./module.js";

const clase_prueba = new platzi_video({
    name:'Curso de java script video',
    video_id:'ID video'
})

clase_prueba.reproducir();
clase_prueba.pausar();