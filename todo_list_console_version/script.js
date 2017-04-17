function newTodo(){
    var newItem = prompt("Enter a new todo:");
    todoList.push(newItem);
    console.log(newItem + " added to the list");
};
function listTodo(){
    console.log("**********");
    todoList.forEach(function(item, idx){
        console.log((idx + 1) + ": " + item);
    })
    console.log("**********");
};
function delTodo(){
    console.log("**********");
    console.log("Deletion Options:");
    todoList.forEach(function(item, idx){
        console.log((idx + 1) + ": " + item);
    })
    console.log("**********");
    var del = prompt("Which item number would you like to remove:");
    del--;
    console.log("Removing: " + todoList[del]);
    todoList.splice(del, 1);
};

var todoList = [];
var cont = true;
while (cont) {
    answer = prompt("What would you like to do? Or type 'quit' to exit");
    if (answer === "quit") {
        cont = false
    }
    else if (answer === "new") {
        newTodo();
    }
    else if (answer === "list") {
        listTodo();
    }
    else if (answer === "delete") {
        delTodo();
    }
}
console.log("Okay, you quit.")
