const express=require('express'), http=require('http'), {Server}=require('socket.io');
const tasks=require('./data/demo/tasks.json'); const app=express(), server=http.createServer(app), io=new Server(server);
app.use(express.json()); app.use(express.static('public'));
app.get('/api/health',(_,res)=>res.json({ok:true,mode:'demo',mqtt:'simulated'}));
app.get('/api/tasks',(_,res)=>res.json(tasks));
app.post('/api/tasks',(req,res)=>{const task={id:`DEMO-${tasks.length+1}`,title:String(req.body.title||'Demo task'),team:'Demo Operations',status:'open'};tasks.push(task);io.emit('task:created',task);res.status(201).json(task)});
io.on('connection',socket=>socket.emit('demo:status',{mqtt:'simulated-local'}));
server.listen(process.env.PORT||6767,'127.0.0.1',()=>console.log('SIGOP demo running'));
