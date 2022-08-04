var chat = document.querySelector('.chat-content');
var addMessage = document.querySelector('.chat-form');
var addNewMessage = addMessage.querySelector('.chat-form-input');
var messageTemplate = document.querySelector('#message-template').content;
var newMessageTemplate = messageTemplate.querySelector('.chat-message');
var messages = chat.children;

addMessage.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var newValue = addNewMessage.value;
  var newMessage = ewMessageTemplate.cloneNode(true);
  var messageContent = newMessage.querySelector('.chat-message-text');
  messageContent.textContent = newValue;
  
  chat.appendChild(newMessage);
  deleteMessage(newMessage);
  addNewMessage.value = " ";
});

var deleteMessage = function(item) {
    var messageDelete = item.querySelector('.chat-message-button');
    messageDelete.addEventListener('click', function () {
        item.remove();
    });
  };

for (var i = 0; i < messages.length; i++) {
    deleteMessage (messages[i]);
}