const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea a bprrar'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Valor de actualización'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}