var ul = document.getElementById("myList");
var button = document.getElementById("button");
var input = document.getElementById("inputUser");


function inputLength(){
    return input.value.length;
}

function createList(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    var deleteBtn = document.createElement("BUTTON");
    deleteBtn.innerText = "Delete";
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function(){
        li.remove();
    })
    li.addEventListener("click", lineThrough);
    input.value = "";
}


function lineThrough(){
    this.classList.toggle("done");
}

function addItemClick(){
    if (inputLength() > 0) {
        createList();
    }
}

function addItemEnter(event){
    if (inputLength() > 0 && event.keyCode === 13) {
        createList();
    }
}

button.addEventListener("click", addItemClick);

input.addEventListener("keypress", addItemEnter);