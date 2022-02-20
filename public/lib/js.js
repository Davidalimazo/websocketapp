var socket = io();

var messages = document.getElementById('messages'); 

 var form = document.getElementById('form');  
 
 var input = document.getElementById('input');
 var user = document.getElementById('input2');
 var feedback = document.getElementById('feedback');

form.addEventListener('submit', function(e) {    e.preventDefault();    if (input.value && user.value){
     socket.emit('chat message', {chat:input.value, user:user.value}); 
     input.value = '';    
  }  
});

input.addEventListener('keypress', ()=>{
  socket.emit('typing', user.value)
})

socket.on('chat message', function(data){ 
  feedback.innerHTML ='';
  const {chat, user} = data;
    var item = document.createElement('li'); 

    item.textContent = `${user} : ${chat}`; 
    
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight); 
  
  });

  socket.on('typing', (data)=>{
    feedback.innerHTML = `<p><em>${data} is typing </em></p>`;
    
  })
window.setInterval(()=>{
  feedback.innerHTML ='';
  
}, 2000)

  