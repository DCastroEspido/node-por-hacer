const descripcion = {
	demand: true,
	alias: 'd',
	desc: 'Descripción de la tarea por hacer',
};

const completado = {
	alias: 'c',
	default: true,
	desc: 'Marca como completado [true] o pendiente [false] la tarea',
};

const filtro = {
    alias: 'f',
    desc: 'Aplica como condición de filtro el valor proporcionado'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('listar', 'Lista todas las tareas según el filtro aplicado', { filtro })
	.command('actualizar', 'Imprime en consola la lista de tareas', {
		descripcion,
		completado,
	})
	.command('borrar', 'Elimina una tarea por hacer', { descripcion })
	.help().argv;

module.exports = {
	argv,
};
