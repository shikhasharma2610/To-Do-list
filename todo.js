let addToDoButton = document.getElementById('addbut');
let toDoContainer = document.getElementById('todocontainer');
let inputField = document.getElementById('inputfield');
addToDoButton.addEventListener("click",function(){
    var paragraph=document.createElement("p");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    if (inputField.value===""){
        console.log("pgk");
        document.getElementById("error").textContent="please enter task";
    }
    else{
        document.getElementById("error").textContent=" ";
    }
    
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

}) 
