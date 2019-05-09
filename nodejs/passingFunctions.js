function saySomething(word) {
	console.log(word);
}

function execute(someFunction, value) {
	someFunction(value);
}

execute(saySomething, "hola");