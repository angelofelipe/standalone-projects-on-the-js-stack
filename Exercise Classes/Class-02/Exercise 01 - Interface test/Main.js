// This attempt to create an interface just checks the name and whether that name is a function

const MyInterface = {
	method1: function () { },
	method2: function (param1, param2) { },
};

class MyClass {
    num = 0

	method1() {
		console.log("Method 1 called");
	}

	method2() {
		console.log("Method 2 called");
	}

	method2(param1, param2) {
		console.log(
			`Method 2 called with ${param1} and ${param2}`);
	}
}

function implementsInterface(obj, interfaceObj) {
	for (const method in interfaceObj) {
		if (!(method in obj) ||
			typeof obj[method] !== "function") {
			return false;
		}
	}
	return true;
}

const myObject = new MyClass();

if (implementsInterface(myObject, MyInterface)) {
	console.log(
		"myObject implements MyInterface");
} else {
	console.log(
		"myObject does not implement MyInterface");
}

console.log(function () {} in myObject)
console.log("method2" in myObject)
console.log(0 in {0:[0]})

