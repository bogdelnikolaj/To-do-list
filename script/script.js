// получаем инпут и кнопку
let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add');
    todo = document.querySelector('.todo');
    
let todoList = [];

if(localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}



// Далее пишем обработчика события

addButton.addEventListener('click', function(){
    // каждый раз , когда пишем сообщение, то и будет содержаться в ToDo 
   // остальные параметры по умолчанию будут false
  // чтобы хранить каждое наше сообщение, нам надо создать массив ВЫШЕ
// создадим массив,в который будем записывать каждое новое дело.
  let newTodo = {

        todo:addMessage.value,
        checked: false,
        important:false
    };
    
    todoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo',JSON.stringify(todoList));
    // console.log(todoList);используем просто для себя -для проверки

});


 // здесь мы будем перебирать наш массив, и каждый объект выводить на страницу в виде тега li
function displayMessages(){
let displayMessage = '';        
todoList.forEach(function(item, i){
// let displayMessages = `Наше дело: ${addMessage.value}`;
// console.log('displayMessages: ', displayMessages);
displayMessage += `
<li>
<input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
<label for='item_${i}'>${item.todo}</label>
</li>
`;
todo.innerHTML = displayMessage;
});

}
