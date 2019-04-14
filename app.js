const argv = require('./config/yargs').argv;
const { crearTarea, listarTareas, actualizarTarea, borrarTarea } = require('./por-hacer/por-hacer');

let comando = argv._[0];
let { descripcion, completado } = argv;
let tarea;
switch (comando) {
    case 'listar':
        console.log('listar todas las tareas');
        listarTareas();
        break;
    case 'crear':
        console.log('crear una tarea');
        tarea = crearTarea(descripcion);
        console.log(tarea);
        break;
    case 'borrar':
        console.log('borrar una tarea');
        tarea = borrarTarea(descripcion);
        console.log(tarea);
        break;
    case 'actualizar':
        console.log('actualizar una tarea');
        tarea = actualizarTarea(descripcion, completado);
        console.log(tarea);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}