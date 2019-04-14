const fs = require('fs');
const color = require('colors');


let listaTareas;

let cargarBD = () => {

    try {
        listaTareas = require('../bases/lista-tareas.json');
    } catch {
        listaTareas = [];
    }
}

let guardarBD = () => {

    let data = JSON.stringify(listaTareas);
    fs.writeFile('bases/lista-tareas.json', data, (err) => {
        if (err) { throw new Error('No se pudo grabar la bdd', err) };
    });
}

let crearTarea = (descripcion) => {

    cargarBD();
    let tarea = {
        descripcion,
        completado: false
    };
    listaTareas.push(tarea);
    guardarBD();
    return tarea;

}

let listarTareas = () => {


    console.log('Lista de Tareas'.green);
    console.log('==============='.green);
    console.log(' ');

    cargarBD();
    for (let tarea of listaTareas) {
        console.log(`Nombre tarea: ${tarea.descripcion} `.rainbow);
        console.log(`Estado tarea: ${tarea.completado} `.red);
        console.log('------------------------------------'.bgBlue);
    }
    return;

}

let actualizarTarea = (descripcion, completado) => {

    let tarea;
    cargarBD();
    let indice = listaTareas.findIndex(e => e.descripcion == descripcion);
    if (indice >= 0) {
        tarea = {
            descripcion,
            completado
        };
        listaTareas[indice] = tarea;
        guardarBD();
    } else {
        throw new Error('Tarea a actualizar no encontrada');
    }

    return tarea;

}

let borrarTarea = (descripcion) => {

    let tarea;
    cargarBD();
    let indice = listaTareas.findIndex(e => e.descripcion == descripcion);
    if (indice >= 0) {
        tarea = listaTareas[indice];
        listaTareas.splice(indice, 1);
        guardarBD();
    } else {
        throw new Error('Tarea a borrar no encontrada');
    }

    return tarea;

}

module.exports = {
    crearTarea,
    listarTareas,
    actualizarTarea,
    borrarTarea
}