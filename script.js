var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var container = document.createElement("div");
	var del = document.createElement("button");

	container.classList.add("container");
	del.textContent = "Delete";
	del.classList.add("del");
	li.classList.add("task");

	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(container)
	container.appendChild(li);
	container.appendChild(del);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(task){
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

function deleteTask(element){
	if (element.target.className === "del"){
		element.target.parentElement.remove();
	}
}

function handleUlCLick(element){
	doneTask(element);
	deleteTask(element);
}

ul.addEventListener("click", handleUlCLick);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);