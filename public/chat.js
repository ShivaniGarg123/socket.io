//MAKE CONNECTION
var socket = io.connect('http://localhost:4000');

//QueryDOM
var message=document.getElementById('message');
var btn=document.getElementById('send');
var handle=document.getElementById('handle');
var output=document.getElementById('output');
var feedback=document.getElementById('feedback');

//Emit Events
btn.addEventListener('click',()=>{
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    })
});
socket.on('chat',(data)=>{
    feedback.innerHTML="";
    output.innerHTML+='<p><strong>'+data.handle+':</strong>'+data.message+'</p>';

});
message.addEventListener('keypress',()=>{
    socket.emit('typing',handle.value);
});

socket.on('typing',(data)=>{
    feedback.innerHTML+=data+' is typing a msg....'
});