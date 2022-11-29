//creating an empty array
let myList= []; 

//create function that prompts user to add a grocery item to the array "myList"
function addItem(){
    myList.push(prompt("Enter a grocery item"));
    listGroceries();
}


//create function that removes the last item from the grocery list myList with the pop() function;
function deleteItem(){
    alert("You deleted: " + myList.pop());
    listGroceries();
}


//assign value of variable "list" to ul in DOM
let list = document.getElementById("getList");

//create function that adds a li element to the ul in the DOM using a for loop (Found a tutorial here: https://www.tutorialspoint.com/how-to-create-html-list-from-javascript-array)
function listGroceries(){
    //first clearing out the innerHTML in DOM 
    document.getElementById("getList").innerHTML= " "; 

    //then creating the for loop that creates the li item in the ul for each new item (i) that is added to myList
    for (i = 0; i < myList.length; i++) {
        var li = document.createElement('li');
        li.innerText = myList[i];
        list.appendChild(li);
     }
}











