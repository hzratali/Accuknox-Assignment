function generateID(num = 4) {
	let id = "";
	for (let i = 0; i < num; i++) {
		id += parseInt(Math.random() * 10).toString();
	}
	id = id.padEnd(num, "0");
	return id;
}

export default generateID;
