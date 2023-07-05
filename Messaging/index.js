const express = require("express")
const http = require("http")
const socket = require("socket.io")

const app = express();
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(__dirname + "/public"))

const users = {}

function getRandomColor(){
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i=0 ; i<6 ; i++){
    color+=letters[Math.floor(Math.random()*16)]
  }
  return color
}

function updateUserList(){
  io.socket.emit("updateUserList",Object.values(users))
}

function sendChatHistory(socket){
  const chatHistory = [];
  object.values(users).forEach(user=>{
    chatHistory.push(..user.messages)
  });
  socket.emit("chatHistory",chatHistory)
}

io.on("connection",socket=>{
  console.log("A user is connected");

  socket.on("joinChat",nickname=>{
    const user ={
      id:socket.id,
      nickname:nickname,
      color:getRandomColor(),
      messages:[]
    };
    users[socket.id] = user

    uppdateUserList();
    sendChatHistory(socket);
  })
  socket.broadcast.emit("userJoined,user")
socket.on("sendMessage",message=>{
  const user= user[socket.id]

  const newMessage={
    nickname:user.nickname,
    color:user.color,
    message:message
  };
  user.messages.push(newMessage)
  io.socket.emit("newMessage",newMessage)
});

socket.on("disconnect",()=>{
  console.log("A user is disconnected")
  const user = users[socket.id];
  if(user){
    delete users[socket.id]
    updateUserList()
    io.socket.emit("userLeft",user)
  }
 });
 });
const port = process.env.PORT || 3000
server.listen(port,()=>{
  console.log(`Server runnimg on port ${port}`)
})