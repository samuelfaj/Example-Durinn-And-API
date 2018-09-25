/**
 * Welcome to Durinn
 * -----------------------------------------------
 * A Node.js object-oriented programming framework
 * -----------------------------------------------
 * https://github.com/samuelfaj/Durinn
 */

import Person from "./classes/person";

async function init() {
	console.log("Obtendo lista de pessoas...");

	let list = await Person.getAll();

	console.log(" - Lista obtida com sucesso!\n");
	console.log("Obtendo lista de endereços...");

	for (let i in list) {
		let person = list[i];

		await person.getAddress();

		console.log(JSON.stringify(person));
	}
}

init();
