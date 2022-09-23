const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    if(inputField.value.length == 0){
        alert('Enter New Task');
    }
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through';
        paragraph.style.opacity = '0.6';
    })
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
})

inputField.addEventListener('keypress', function(event){
    if (event.key === "Enter") {
        event.preventDefault;
        addToDoButton.click();
    }
})

