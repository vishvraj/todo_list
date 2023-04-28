const todoList = [
{
  name: 'make dinner',
  duedate: '2022-12-22'
},
{
  name: 'wash dishes',
  duedate: '2022-12-22'
}
]

displayTodo();

function displayTodo() {

  let todoListHTML = '';


  todoList.forEach( function(todoObject,index){
    const {name,duedate} = todoObject;
    
    const html = `
        <div>${name}</div>
        <div>${duedate}</div>
            <button class="delete-todo-button js-delete-todo-button" >Delete</button>
    `;
    todoListHTML += html; 
    
  });


  /*for(let i = 0; i<todoList.length; i++){
    const todoObject = todoList[i];
    const name = todoObject.name;
    const duedate = todoObject.duedate;

    const html = `
        <div>${name}</div>
        <div>${duedate}</div>
            <button class="delete-todo-button" onclick="
                todoList.splice(${i},1);
                displayTodo();
            ">Delete</button>
    `;
    todoListHTML += html; 
    } */
  
  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;

 
  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      displayTodo();
    } );
  });


}

document.querySelector('.js-add-button')
  .addEventListener('click', ()=> {
    addTodo();
  })

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');

  const duedate = dateInputElement.value;
  
  todoList.push({
    //name: name,
    //duedate: daueDate,
    name,
    duedate
  });

  console.log(todoList);

  inputElement.value = '';

  displayTodo();

}

