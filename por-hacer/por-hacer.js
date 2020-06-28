const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
	let data = JSON.stringify(listadoPorHacer);

	fs.writeFile('db/data.json', data, (err) => {
		if (err) throw new Error('No se pudo grabar', err);
	});
};

const cargarDB = () => {
	try {
		listadoPorHacer = require('../db/data.json');
	} catch (error) {
		listadoPorHacer = [];
	}
};

const crear = (descripcion) => {
	let porHacer = {
		descripcion,
		completado: false,
	};

	cargarDB();
	listadoPorHacer.push(porHacer);
	guardarDB();

	return porHacer;
};

const getListado = (filtro) => {
	cargarDB();
	let bfiltro = filtro == 'true'
	console.log(bfiltro)

	if (filtro) {
		let filtrado = listadoPorHacer.filter(
			(tarea) => tarea.completado == bfiltro
		);
		console.log(filtrado);
		//console.log(listadoPorHacer)
		return filtrado;
	} else return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
	cargarDB();

	let index = listadoPorHacer.findIndex(
		(tarea) => tarea.descripcion === descripcion
	);

	if (index >= 0) {
		listadoPorHacer[index].completado = Boolean(completado);
		guardarDB();
		return true;
	}
	return false;
};

const borrar = (descripcion) => {
	cargarDB();

	let filtered = listadoPorHacer.filter(
		(tarea) => tarea.descripcion !== descripcion
	);
	//console.log(listadoPorHacer)
	//console.log(filtered)
	if (listadoPorHacer.length > filtered.length) {
		listadoPorHacer = filtered;
		guardarDB();
		return true;
	}
	return false;
};

module.exports = {
	crear,
	getListado,
	actualizar,
	borrar,
};
