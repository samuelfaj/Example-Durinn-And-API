import api from "../helpers/api";

export default class Person {
	id: string;
	name: string;
	address: string;

	constructor(id: string, name: string) {
		this.id = id;
		this.name = name;
		this.address = "";
	}

	async getAddress() {
		let self = this;
		let [result, obj] = await api(`people/${self.id}/address`);
		return new Promise<[boolean, string]>(resolve => {
			self.address = obj.address || "";
			resolve([result, obj.address]);
		});
	}

	static async getAll() {
		let array: Person[] = [];
		let [result, obj] = await api("people");

		if (result) {
			for (let i in obj) {
				array.push(new Person(obj[i].id, obj[i].name));
			}
		}
		return array;
	}
}
